import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';

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
function Button(props) {

  return <button onClick={()=>props.incre(props.toIncre)}>
    +{props.toIncre}
  </button>;
}

function Display(props) {
  return (
      <div>{props.message}</div>
  );
}
function App() {
  const [counter, setCounter] = useState(0);
  let increment = (value)=> setCounter(counter+value);
  return (
      <div>
        <Display message={counter} />
        <Button incre={increment} toIncre={1}/>
        <Button incre={increment} toIncre={5}/>
        <Button incre={increment} toIncre={10}/>
        <Button incre={increment} toIncre={100}/>
      </div>
  );
}


export default App;
