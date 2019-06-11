import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./loginpagecss.css";
import Register from "./registerpage";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

function Verifypage()
{
    return(
      
 <div >
     <center>
     <Form className="first">
         <h1>THIS IS VERIFY PAGE</h1>
         
  <Form.Group controlId="formBasicEmail">
    <Form.Label>VERIFY:</Form.Label>
    <Form.Control type="email" placeholder="Enter OTP:" ></Form.Control>
<Form.Text className="text-muted">
     Never share your OTP with anyone else.
    </Form.Text>
  </Form.Group>

  
  

  <Link to="/register" ><Button  variant="primary" >VERIFY
    
  </Button></Link>


</Form>
</center>
 </div>
        )
}
export default Verifypage;