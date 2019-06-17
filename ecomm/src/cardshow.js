import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FormControl from "react-bootstrap/FormControl";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
//import ReactBootstrap, {Jumbotron,  Col, Grid, Panel, FormGroup} from 'react-bootstrap';
import "./first/loginpagecss.css";
import products from "./cardarray";
//import "./resister.css";
//import Register from "./registerpage";
class Cards extends React.Component
{


render()
{
const cards=products.map(data=>(
<Cards data={data}></Cards>
)
)
return(<div>
    {cards}
</div>

)
}
}
export default Cards;