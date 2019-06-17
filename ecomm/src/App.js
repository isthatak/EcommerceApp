import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Mainpage from "./mainpage";
import Register from "./first/registerpage";
import Verifypage from "./first/verify";
import Arrayuse from "./arrayuse";

import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';


import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Loginpage from "./first/loginpage";
import products from "./cardarray";
import Cards from "./cardshow";
//import Register from "./first/registerpage"


function App (){
 
  
  return (
    
    <Router>

    
      {/* <Loginpage /> */}
      <Switch>
      <Route  exact path="/" component={Loginpage}/>

       <Route path="/register" exact  component={Register}/> 
       <Route path="/Verify" exact component={Verifypage}/> 
       <Route path="/cardshow" exact component={Cards}/>

      

      </Switch>
      
    
    </Router>
  )

}


export default App;
