import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./loginpagecss.css";
import "./resister.css";
import Register from "./registerpage";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
//import products from "./cardarray";

class  Loginpage extends React.Component

{
  render()
  {
    
    return(
      
 <div className="dropclass"> 

     <center>
     <Form className="first">
      
         <h1>PLEASE LOGIN HERE</h1>
         
  <Form.Group controlId="formBasicEmail">
    <Form.Label>USERNAME:</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>PASSWORD</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button className="extra"  variant="primary" >LOGIN
    
  </Button>
  

  <Link to="/register" >
    <Button   variant="primary" >REGISTER
    
  </Button>
  </Link>


</Form>
</center>
 </div>
        )
}
}
export default Loginpage;