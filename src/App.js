import React, {useState} from 'react';
import './App.css';
import './cFile.css'
import './bootstrap.min.css'
import {Route} from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Nav from "./Nav";
import Auth from "./Auth/Auth";

class App extends React.Component {
    constructor (props){
        super(props);
        this.auth = new Auth(this.props.history);
    }
    render() {
        return (
            <><Nav/>
            <div className="body">
               <Route path="/" exact
                      render={ props => <Home auth={this.auth}{...props}/>}/>
               <Route path="/profile" component={Profile}/>
           </div>
           </>
        );
    }
}

export default App;

