import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FormControl from "react-bootstrap/FormControl";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
//import ReactBootstrap, {Jumbotron,  Col, Grid, Panel, FormGroup} from 'react-bootstrap';
//import "./first/loginpagecss.css";
import "./mainpagecss.css";
//import Register from "./registerpage";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
function Mainpage()
{
    return(
    
        <div className="body" >
           
            <center>

            
       <h1> JASON AND JASON</h1>
       </center>
  <Navbar bg="primary" variant="dark">
  <Dropdown className="dropclass" >
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    =
    
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">PROFILE</Dropdown.Item>
    <br>
    </br>
    <Dropdown.Item href="#/action-2">YOUR ORDERS</Dropdown.Item>
    <br>
    </br>
    <Dropdown.Item href="#/action-3">JASON PAY</Dropdown.Item>
    <br>
    </br>
    <Dropdown.Item href="www.facebook.com">SELL HERE</Dropdown.Item>
    <br>
    </br>
    <Dropdown.Item href="#/action-3">LOGOUT</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    <Navbar.Brand href="#home">  ECOMM</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       SORT BY:
    
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="www.google.com">PRICE</Dropdown.Item>
    <br>
    </br>
    <Dropdown.Item href="#/action-2">DATE</Dropdown.Item>
    <br>
    </br>
    <Dropdown.Item href="#/action-3">RATING</Dropdown.Item>
    </Dropdown.Menu>
      
      </Dropdown>
      <Nav.Link href="#pricing">YOUR CART</Nav.Link>
    
    <Nav.Link href="#pricing">CUSTOMER SERVICE</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
    
  </Navbar>
  <table>

  <tr>
      <td>

      </td>
      </tr>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://pocketnow.com/wp-content/uploads/2019/03/gsmarena_005.jpg" />
  <Card.Body>
    <Card.Title>REALME 1 -10,000</Card.Title>
    <Card.Text>
    THIS IS A GREAT BUDGET SMART PHONE WITH 4GB RAM AND 64 GB INTERNAL MEMORY.
      THIS IS A SMART BUY.
    </Card.Text>
    <Button variant="primary">BUY NOW</Button>
  </Card.Body>
</Card>
<td>
    </td>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://pocketnow.com/wp-content/uploads/2019/03/gsmarena_005.jpg" />
  <Card.Body>
    <Card.Title>REALME 2  -10,000</Card.Title>
    <Card.Text>
    THIS IS A GREAT BUDGET SMART PHONE WITH 4GB RAM AND 64 GB INTERNAL MEMORY.
      THIS IS A SMART BUY.
    </Card.Text>
    <Button variant="primary">BUY NOW</Button>
  </Card.Body>
</Card>
<td>
    </td>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://pocketnow.com/wp-content/uploads/2019/03/gsmarena_005.jpg" />
  <Card.Body>
    <Card.Title>REALME 3   -10,000</Card.Title>
    <Card.Text>
    THIS IS A GREAT BUDGET SMART PHONE WITH 4GB RAM AND 64 GB INTERNAL MEMORY.
      THIS IS A SMART BUY.
    </Card.Text>
    <Button variant="primary">BUY NOW</Button>
  </Card.Body>
</Card>
<td>
    </td>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://pocketnow.com/wp-content/uploads/2019/03/gsmarena_005.jpg" />
  <Card.Body>
    <Card.Title>REALME 4  -10,000</Card.Title>
    <Card.Text>
    THIS IS A GREAT BUDGET SMART PHONE WITH 4GB RAM AND 64 GB INTERNAL MEMORY.
      THIS IS A SMART BUY.
    </Card.Text>
    <Button variant="primary">BUY NOW</Button>
  </Card.Body>
</Card>
<td>
    </td>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://pocketnow.com/wp-content/uploads/2019/03/gsmarena_005.jpg" />
  <Card.Body>
    <Card.Title>REALME 5   -10,000</Card.Title>
    <Card.Text>
      THIS IS A GREAT BUDGET SMART PHONE WITH 4GB RAM AND 64 GB INTERNAL MEMORY.
      THIS IS A SMART BUY.
    </Card.Text>
    <Button variant="primary">BUY NOW</Button>
  </Card.Body>
</Card>


  </table>
  
  

  <footer>
      <center>
  <table>
    <h5> ABOUT US: </h5> 
      <tr></tr>  
      
          
      <a href="https://www.facebook.com">
<img border="0" alt="facebook" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Facebook_F_icon.svg/1200px-Facebook_F_icon.svg.png" width="50" height="50">
</img></a>
<td></td> <td></td>
<a href="https://www.instagram.com">
<img border="0" alt="facebook" src="data:image/jpeg;base64,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" width="50" height="50">
</img></a>
</table>
</center>
  </footer>
  
  </div>
    )
}
export default Mainpage;