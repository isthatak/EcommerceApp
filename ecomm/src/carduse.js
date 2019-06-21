import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";

import Navbar from "react-bootstrap/Navbar";

import FormControl from "react-bootstrap/FormControl";
import Segment from "semantic-ui-react";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
//import ReactBootstrap, {Jumbotron,  Col, Grid, Panel, FormGroup} from 'react-bootstrap';
import "./first/loginpagecss.css";
import products from "./cardarray";
//import "./resister.css";
//import Register from "./registerpage";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
class Carduse extends React.Component{



getList1=(e)=>
{
    this.image=e.target.value;
}
setList=()=>

{
    let object={ id:this.Newid,image:this.image,name:this.name,price:this.price,description:this.description,button:this.button}
    products.push(object);

}
render()
{

return(
    <div>
    <Form>
    <Form.Input fluid name="name" icon="namecard" iconPosition="left"
         placeholder="ID" type="text" onChange={this.getlist1}/>
         </Form>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.getList1} />
  <Card.Body>
    <Card.Title>REALME 2  -10,000</Card.Title>
    <Card.Text>
    THIS IS A GREAT BUDGET SMART PHONE WITH 4GB RAM AND 64 GB INTERNAL MEMORY.
      THIS IS A SMART BUY.
    </Card.Text>
    <Button variant="primary">BUY NOW</Button>
  </Card.Body>
</Card>
</div>
)
}}
export default Carduse;