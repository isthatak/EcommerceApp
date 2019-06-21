import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./first/loginpagecss.css";
// import "./resister.css";
// import Register from "./registerpage";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
//import products from "./cardarray";

class  Sellingpage extends React.Component

{
  render()
  {
    
    return(
      
 <div className="dropclass"> 

     <center>
     <Form className="first">
      
         <h1>PLEASE ENTER PRODUCT DETAILS</h1>
         
  <Form.Group controlId="formBasicEmail">
    <Form.Label>ITEM NAME</Form.Label>
    <Form.Control type="text" placeholder="ITEM NAME" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>ENTER PRICE</Form.Label>
    <Form.Control type="text" placeholder="ENTER PRICE" />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
    <Form.Label>ENTER DESCRIPTION</Form.Label>
    <Form.Control type="text" placeholder="ENTER DESCRIPTION" />
    </Form.Group>
  
  

  <Link to="ss" >
    <Button   variant="primary" >SELL
    
  </Button>
  </Link>

</Form>
</center>
</div>

        )
}
}
export default Sellingpage;