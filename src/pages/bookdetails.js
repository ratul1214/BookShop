import React, { Component } from 'react';
import Header from '../header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import StarRatings from 'react-star-ratings';



import '../style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlagCheckered, faCheckCircle, faMoneyBillAlt, faUndo, faTruckLoading } from '@fortawesome/free-solid-svg-icons';
import Footer from '../footer';
import Booklist from '../booklist';
class Bookdetails extends Component {
    render() {
        return (
            <div>
                <Container  style={{marginTop:'20px',marginBottom:'20px'}}>
                 <Row>
                     <Col>
                     <Image src="provatibook1.jpg"style={{height:'300px',width:'220px',marginRight:'20px'}}  /> 
                     </Col>
                     <Col xs={6} style={{marginTop:'15px'}}>
                     <Row>
                     <h4 className='btext1'> বই এর নাম</h4> 
                     </Row>
                     <Row>
                        <h4 className='btext1' style={{fontSize:'15px'}}>by লেখকের এর নাম</h4>
                     </Row>
                     <Row>
                     <StarRatings
        rating={2.403}
        starDimension="10px"
        starSpacing="1px"
        
      /><h4 className='btext1' style={{fontSize:'15px',marginTop:'7px'}}>103 Ratings / 95 Reviews</h4>
                     </Row>
                     <Row>
                     <h4 className='btext1'>TK 205</h4>
                     </Row>
                     <Row>
                   <FontAwesomeIcon icon={faFlagCheckered} style={{color:'green' , marginTop:'0px',marginRight:'7px'}}/>  <h4 style={{fontSize:'15px'}} className='btext1'>বিকাশ পেমেন্টে ১০% ক্যাশব্যাক ও ১০১০+ ৳ অর্ডারে নিশ্চিত ফ্রি শিপিং।*</h4>
                     </Row>
                     <Row>
                     
                     </Row>
                     <Row>
                     <h4 className='btext1'style={{fontSize:'15px'}}>Catagory:</h4>
                     </Row>
                     <Row>
                     <FontAwesomeIcon  icon={faCheckCircle} style={{color:'green' , marginTop:'5px',marginRight:'7px'}}/><h4 className='btext1'>In Stock</h4>
                     </Row>
                     <Row>
                     <Button style={{marginRight:'10px'}} variant="outline-success">পড়ে দেখুন</Button>  <Button variant="outline-success">Add to Chart</Button> 
                     </Row>
                     </Col>
                     <Col style={{marginTop:'30px'}}>
                     <Row  style={{marginTop:'10px',marginBottom:'10px'}}>
                     <FontAwesomeIcon  icon={faMoneyBillAlt} style={{color:'green' , marginTop:'3px',marginRight:'7px'}}/>
                     <h4 className='btext1'style={{fontSize:'15px'}}>Cash on Delivery</h4>
                     </Row>
                     <Row style={{marginTop:'10px',marginBottom:'10px'}}>
                     <FontAwesomeIcon  icon={faUndo} style={{color:'green' , marginTop:'3px',marginRight:'7px'}}/>
                     <h4 className='btext1'style={{fontSize:'15px'}}>3 Days Happy Return</h4>
                     </Row>
                     <Row style={{marginTop:'10px',marginBottom:'10px'}}>
                     <FontAwesomeIcon  icon={faTruckLoading} style={{color:'green' , marginTop:'3px',marginRight:'7px'}}/>
                     <h4 className='btext1'style={{fontSize:'15px'}}>Order Delivery Tk. 40 

</h4>
                     </Row>
                     <Row style={{marginTop:'10px',marginBottom:'10px'}}>
                     <FontAwesomeIcon  icon={faMoneyBillAlt} style={{color:'green' , marginTop:'3px',marginRight:'7px'}}/>
                     <h4 className='btext1'style={{fontSize:'15px'}}>Cash on Delivery</h4>
                     </Row>
                     <Row>
                     
                     </Row>
                     </Col>
                     
                     
                 </Row>
             </Container>
             <Container  style={{marginTop:'30px',marginBottom:'20px'}}>
             <Tabs defaultActiveKey="spec" id="uncontrolled-tab-example">
  <Tab eventKey="spec" title="Specification">
  <Table responsive>
  
  <tbody>
    <tr>
      <td>1</td>
      <td>Table cell</td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>Table cell</td>
      
    </tr>
   
  </tbody>
</Table>
  </Tab>
  <Tab eventKey="author" title="Author">
  O! call not me to justify the wrong That thy unkindness lays upon my heart; 
  Wound me not with thine eye, but with thy tongue: Use power with power, and slay me not by art,
   Tell me thou lov'st elsewhere; but in my sight, Dear heart, forbear to glance thine eye aside:
    What need'st thou wound with cunning, when thy might Is more than my o'erpress'd defence can bide?
     Let me excuse thee: ah! my love well knows Her pretty looks have been mine enemies;
  </Tab>
  <Tab eventKey="contact" title="Contact" >
  O! call not me to justify the wrong That thy unkindness lays upon my heart; 
  Wound me not with thine eye, but with thy tongue: Use power with power, and slay me not by art,
   Tell me thou lov'st elsewhere; but in my sight, Dear heart, forbear to glance thine eye aside:
    What need'st thou wound with cunning, when thy might Is more than my o'erpress'd defence can bide?
     Let me excuse thee: ah! my love well knows Her pretty looks have been mine enemies;
  </Tab>
</Tabs>
             </Container>
             <Booklist/>
             <Footer/>
            </div>
        );
    }
}

export default Bookdetails;