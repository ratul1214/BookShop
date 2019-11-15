import Container from 'react-bootstrap/Container'
import React, { Component } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import ScrollMenu from "react-horizontal-scrolling-menu";


import Image from 'react-bootstrap/Image'
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import './style.css'

class Footer extends Component{
  
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.handleScrollCallback = this.handleScrollCallback.bind(this);
  }
  handleScrollCallback() {
    console.log("A scroll event occurred!");
}
 
  render() {

    return (
<div style={{backgroundColor:'grey', paddingTop:'10px'}}>
 
    <Container style={{ width:"100%" }} >
      <Row>
        <Col>
        
        <img src={require('./provatilogo.png')} style={{height:'70px',width:'100px', marginTop:'10px'}} alt='icon' ></img>
        <Row style={{marginTop:'10px'}}>
          <img style={{ height:"20px" ,width:'20px'}} src={require('./phoneicon.png')}></img>
          <p style={{fontSize:'15px' , marginLeft:'5px'}}>  01884323303</p>  
        </Row>
        <Row style={{marginTop:'0px'}}>
          <img style={{ height:"20px" ,width:'20px'}} src={require('./mailicon.png')}></img>
          <p style={{fontSize:'15px' , marginLeft:'5px'}}>  alamalsaud@gmail.com</p>  
        </Row>
        <Row style={{marginTop:'0px'}}>
          <img style={{ height:"20px" ,width:'20px'}} src={require('./locationicon.jpg')}></img>
          <p style={{fontSize:'15px' , marginLeft:'5px'}}>  Nilkhet, Dhaka, Bangladesh</p>  
        </Row>
        </Col>
        <Col style={{marginTop:'30px' , marginLeft:'50px'}}>
       
     <Row> <h2 style={{fontSize:'20px'}}>INFORMATION</h2></Row>
      <Row> <a href="#" style={{fontSize:'15px', color:'white',marginTop:'10px'}}>Privacy & Policy</a></Row>
      <Row><a href="#" style={{fontSize:'15px', color:'white',marginTop:'10px'}}>Terms & Condition</a></Row>
      <Row><a href="#" style={{fontSize:'15px', color:'white',marginTop:'10px'}}>Exchange Book </a></Row>
      <Row><a href="#" style={{fontSize:'15px', color:'white',marginTop:'10px'}}>Oldbook Buy Policy</a></Row>
        </Col>
        <Col>
        <FacebookProvider appId="1296392807233958">
        <EmbeddedPost href="https://www.facebook.com/provatilibrary/" width="500" />
      </FacebookProvider>
        </Col>
        
      </Row>
      <Container>

      </Container>
 
     </Container>
</div>
    );
  }
}
export default Footer;