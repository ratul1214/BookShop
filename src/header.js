
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container'
import React, { Component } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Carousel from 'react-bootstrap/Carousel'
import ScrollMenu from "react-horizontal-scrolling-menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import {Link} from 'react-router-dom'

 
// All items component
// Important! add unique key
class CustomToggle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.onClick(e);
  }

  render() {
    return (
      <a href="" onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}
 
const selected = 'item1';
class Header extends Component{
  
  constructor(props) {
    super(props);
    // call it again if items count changes
    
    

    this.state = { value: '' };
    
  }
 
  handleChange(e) {
    this.setState({ value: e.target.value.toLowerCase().trim() });
  }
 
  onSelect = key => {
    this.setState({ selected: key });
  }
 
  
  render() {

    

    const { value } = this.state;
 
    return (
      <div>
      <div>
        <Container>
  <Row className="justify-content-md-center"  >
  <Navbar fixed="top" bg="light" expand="lg">
  <Col xs lg="4" className = "hh" >
  <div> <Image src="provatilogo.png"style={{height:'100px',width:'100px'}} roundedCircle /></div>
     
    </Col>
    <Col xs md="4" className = "hh1">
    <div >
       <InputGroup className="mb-3" >
       <input type="text" name="name" style={{maxHeight:"40px", width:"85%"}}/>
    <InputGroup.Append>
      <Button variant="outline-secondary" style={{backgroundColor: "green" , color :"white"}}><FontAwesomeIcon icon={faSearch} /></Button>
    </InputGroup.Append>
  </InputGroup>
    </div>
    
    </Col>
    <Col xs lg="3" className = "hh">
    <div className = "chart">
    
    <Button href="#" variant="outline-success"><FontAwesomeIcon icon={faCartArrowDown} /></Button>
    <Button href="#" variant="outline-success" style={{marginLeft:"15px"}}>Sign</Button>
    </div>
     
    </Col>
  
    </Navbar>
    
  </Row>
  <Container style={{marginTop:'100px'}}>
    <Row className="justify-content-md-center">
    <ButtonGroup aria-label="Basic example" style={{marginTop:'10px'}}>
  <Link to="/" style={{backgroundColor:'white',color:'black', borderColor:'white',marginLeft:'5px',marginRight:'5px'}} variant="secondary">Home</Link>
  <Link to="/bookdetails" style={{backgroundColor:'white',color:'black', borderColor:'white',marginLeft:'5px',marginRight:'5px'}} variant="secondary">Bookdetails</Link>
  <Link to="/booksearch" style={{backgroundColor:'white',color:'black', borderColor:'white',marginLeft:'5px',marginRight:'5px'}} variant="secondary">Booksearch</Link>
  
  
</ButtonGroup>
    </Row>
  </Container>

</Container>


    </div>
    
      </div>
    );
  }

}
export default Header;