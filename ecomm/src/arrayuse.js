import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";

import Navbar from "react-bootstrap/Navbar";

import FormControl from "react-bootstrap/FormControl";
// import Segment from "semantic-ui-react";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
//import ReactBootstrap, {Jumbotron,  Col, Grid, Panel, FormGroup} from 'react-bootstrap';
import "./first/loginpagecss.css";
import products from "./cardarray";
//import "./resister.css";
//import Register from "./registerpage";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
 class Arrayuse extends React.Component{
     getList=(e)=>
     {
         this.Newid=e.target.value;
     }
     getList1=(e)=>
     {
         this.image=e.target.value;
     }
     getList2=(e)=>
     {
         this.name=e.target.value;
     }
     getList3=(e)=>
     {
         this.price=e.target.value;
     }
     getList4=(e)=>
     {
         this.description=e.target.value;
     }
     getList5=(e)=>
     {
         this.button=e.target.value;
     }
     setList=()=>

     {
         let object={ id:this.Newid,image:this.image,name:this.name,price:this.price,description:this.description,button:this.button}
         products.push(object);

     }
     render()
     {
         
         return(
             <Form size="large">
    <Form.Input fluid name="image" icon="imagecard" iconPosition="left"
        type="text" onChange={this.getlist1}/>
       <Form.Input fluid name="name" icon="namecard" iconPosition="left"
       placeholder="ID" type="text" onChange={this.getlist2}/>
       <Form.Input fluid name="price" icon="pricecard" iconPosition="left"
       placeholder="ID" type="text" onChange={this.getlist3}/>
       <Form.Input fluid name="description" icon="descriptioncard" iconPosition="left"
       placeholder="ID" type="text" onChange={this.getlist4}/>
       <Form.Input fluid name="button" icon="buttoncard" iconPosition="left"
       placeholder="ID" type="button" onChange={this.getlist5}/>
       <Link to="/cardshow"><Button color="blue" onClick={this.setList}>SUBMIT</Button></Link>
       </Form>
)
    
    
     }
          
     
 }
 export default Arrayuse;