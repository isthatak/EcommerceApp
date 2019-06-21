import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Mainpage from "./mainpage";
import Register from "./first/registerpage";
import Verifypage from "./first/verify";
import Arrayuse from "./arrayuse";
import Carduse from "./carduse";
import Sellherepage from "./sellherepage";
import Sellerregisterpage from "./sellerregister";
// import Sellerloginpage from "./sellerlogin";
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';


import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Sellingpage from "./sellingpage";
import Loginpage from "./first/loginpage";
import products from "./cardarray";
import Sellerloginpage from './sellerlogin';
import Sellerverifypage from './sellerverify';
// import Cards from "./cardshow";
//import Register from "./first/registerpage"


class App extends React.Component {
 
  render()
  {
  return (
    
  
    
    //  <Loginpage />
    
    <Router>

{/* <Carduse /> */}
     
      <Switch>

      <Route  exact path="/" component={Loginpage}/>

       <Route path="/register"   exact component={Register}/> 
       <Route path="/Verify"  exact component={Verifypage}/> 
       <Route path="/mainpage"  exact component={Mainpage}/>
       <Route path="/sellherepage" exact component={Sellherepage}/>
       <Route path="/sellerlogin" exact component={Sellerloginpage}/>
       <Route path="/sellerregister" exact component={Sellerregisterpage}/>
       <Route path="/sellerverify" exact component={Sellerverifypage}/>
       <Route path="/sellingpage" exact component={Sellingpage}/>
       {/* <Arrayuse /> */}
      

      </Switch>
      
      {/* <Sellerloginpage /> */}
    </Router>
  )
  
  }
}


export default App;
