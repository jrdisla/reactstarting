import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './cFile.css'
import axios from 'axios';
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

	// const testData = [
	// 		{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    //   {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  	// 	{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
	// ];


const CardList = (props)=>(
    <div>
        {props.profile.map(pro=><Card key={pro.id}{...pro}/>)}
    </div>
);

class Card extends React.Component{
    render() {
        return (
            <div className="github-profile">
                <img alt="" className="img" src={this.props.avatar_url} />
                <div className="info">
                    <div className="name"> {this.props.name} </div>
                    <div className="name"> {this.props.company}</div>
                </div>
            </div>
        );
    }
}

class Form extends React.Component{
    state = {
        username:''
    };
    handler = async (event)=>{
        event.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${this.state.username}`);
        this.props.callAddNewProfile(response.data);
    };
    render() {
        return(
            <form className="form" onSubmit={this.handler}>
                <input
                type="text"
                required
                placeholder="Enter the user name here"
                onChange={event => this.setState({username:event.target.value})}
                />
                <button>Add User</button>
            </form>
        );
    }
}



class App extends React.Component{
    state = {
        profiles:[]
    };
    addNewProfile = (profile) =>{
    this.setState(prevState => ({
        profiles: [...prevState.profiles,profile]
    }))
    };
    render() {
        return(
        <div className="header">
            {this.props.title}
            <Form callAddNewProfile={this.addNewProfile} />
            <CardList profile={this.state.profiles}/>
        </div>
        );
    }
}
// function App({title}) {
//   return (
//       <div className="header" align="center"> {title}
//         <Card/>
//       </div>
//   );
// }


export default App;
