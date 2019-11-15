import Container from 'react-bootstrap/Container'
import React, { Component } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import ScrollMenu from "react-horizontal-scrolling-menu";
import {faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'react-bootstrap/Image'
import './style.css'
const list = [
  { name: 'দ্য ২১ সাকসেস সিকরেট',
  id:1,
  link:'./provatibook1.jpg',
 },
  { name:'ডি. পি. এড সহায়িকা ',
  id:2,
  link:'./provatibook2.jpg', },
  { name: 'জেণ্ডার স্টাডিজ',
  id:3,
  link:'./provatibook3.jpg', },
  { name: 'দ্য ২১ সাকসেস সিকরেট' ,
  id:4,
  link:'./provatibook4.jpg',},
  { name: ' প্রাথমিক শিক্ষক - শিক্ষা',
  id:5,
  link:'./provatibook1.jpg', },
  { name:'দ্য ২১ সাকসেস সিকরেট ',
  id:6,
  link:'./provatibook1.jpg', },
  
];
 
// One item component
// selected prop will be passed
const MenuItem = ({text,link, selected}) => {
  
  var link1 = './provatibook1.jpg';
  var link2 = link.toString;
  console.log(link.toString());
  console.log(link1);
  return <div 
    

    className={`menu-item ${selected ? 'active' : ''}`}>
    
     <Container  >
  <Row className="justify-content-md-center"  >
  
  <div className='imgc'>
  <img style={{ height:"200px"}} src={process.env.PUBLIC_URL + link.toString()} />
  </div>
    
    </Row>
    <Row className="justify-content-md-center"  >
  <h5 className="btext1" style={{maxWidth:"200px"}}>{text}</h5>
    </Row>
    <Row className="justify-content-md-center"  >
  <h5 className="btext1">লেখকের নাম</h5>
    </Row>
    </Container>
    </div>;
};
 
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map((el,id1,link1) => {
    const {name} = el;
    const {link} = el;
    const{ id} =id1;
    
    return <MenuItem text={name} key={id1} link={link} selected={selected} />;
  });
 
 
const Arrow = ({ text, className }) => {
  console.log(text);
  if(text==='<')
  {
    return (
      <div
        className={className}
        style={{marginLeft:'7px',marginRight:'7px'}}
      ><FontAwesomeIcon icon={faArrowLeft} /></div>
    );
  }
  else
  {
    return (
      <div
        className={className}
        style={{marginLeft:'7px',marginRight:'7px'}}
      ><FontAwesomeIcon icon={faArrowRight} /></div>
    );
  }
 
};
 
 
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
 
const selected = 'item1';
class Booklist extends Component{
  
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }
 
  state = {
    selected
  };
 
  onSelect = key => {
    this.setState({ selected: key });
  }
 
 
  render() {

    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;
    var style = {
      float:"right" ,
      margin:"10px"
    };
    return (
      
 

<div>
   
    <Container style={{ width:"1400px"}} >
    <div className="card card-2" >
    <Container>
      <Row className="justify-content-md-center" >
      <Col></Col>
    <Col><h1 class="btext"   >প্রকাশিত বই সমু্হ </h1></Col>
    <Col><Button style={style} href="#" variant="outline-success">View All</Button></Col>
        </Row>
    
    
             </Container>
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        
        />
        </div>
      </Container>
      </div>
   
    );
  }

}
export default Booklist;