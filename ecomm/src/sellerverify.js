import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./first/loginpagecss.css";
// import Register from "./registerpage";
import "./first/resister.css";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


class Sellerverifypage extends React.Component
{
    render()
    {

    return(
      
 <div className="newone">
     <center>
     <Form className="first">
         <h1>VERIFY SELLER</h1>
         
  <Form.Group controlId="formBasicEmail">
    <Form.Label>VERIFY:</Form.Label>
    <Form.Control type="email" placeholder="Enter OTP:" ></Form.Control>
<Form.Text className="text-muted">
     Never share your OTP with anyone else.
    </Form.Text>
  </Form.Group>

  
  

  <Link to="/sellingpage" ><Button  variant="primary" >VERIFY
    
  </Button></Link>


</Form>
</center>
 </div>
        )
}
}
export default Sellerverifypage;