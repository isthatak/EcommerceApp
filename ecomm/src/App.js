import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Register from "./first/registerpage";
import Verifypage from "./first/verify";

import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';


import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Loginpage from "./first/loginpage";
//import Register from "./first/registerpage"


function App() {
  return (
    <Router>

    
      {/* <Loginpage /> */}
      <Switch>
      <Route  exact path="/" component={Loginpage}/>

       <Route path="/register" component={Register}/> 
       <Route path="/Verify" component={Verifypage}/> 
      

      </Switch>
      
    
    </Router>
  );
}

export default App;
