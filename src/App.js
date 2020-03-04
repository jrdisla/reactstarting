import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './cFile.css'
import Axios from 'axios';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//
//   );
// }


	const testData = [
			{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  		{name: "Julio Disla T.   ", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
	];


const CardList = (props) => (
 <div>
   {props.profile.map(pro => <Card {...pro}/>)}
 </div>
);

class Card extends React.Component{
  render() {
    const profile = this.props;
    return (
        <div className='github-profile'>
          <img className="img" alt=""  src={profile.avatar_url} />
          <div className="info">
            <div className="name">{profile.name}</div>
            <div className="name">{profile.company}</div>
          </div>
        </div>
    );
  }
}

class Form extends React.Component{
  state = {
    username : ''
  };
  handleSubmit = async (event) => {
  event.preventDefault();
  //const  response = await fetch(`https://api.github.com/users/${this.state.username}`);
      const response = await Axios.get(`https://api.github.com/users/${this.state.username}`);
      console.log(response.data);
  };
  render() {
    return (
        <form className="form" onSubmit={this.handleSubmit}>
          <input
              type="text"
              placeholder="GitHub user name"
              required
              onChange={event => this.setState({username:event.target.value})}
          />
          <button>Add card</button>
        </form>
    );
  }
}

class App extends React.Component{
  state = {
    profiles: testData
  };
  render() {
    return(
        <div align="center" className="header">{this.props.title}
        <Form/>
        <CardList profile={this.state.profiles} />
        </div>

    );
  }
}


// function App({title}) {
//   return (
//       <div className="header" align="center"> <h1>{title}</h1>
//
//       </div>
//   );
// }


export default App;
