import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
class Courasol extends Component {
    render() {
        return (
            <div>
                <Container>
<Row className="justify-content-md-center"   >
<Carousel  style={{margin:"10px", maxHeight:"250px" , maxWidth:"600px"}}>
  <Carousel.Item  style={{maxHeight:"250px" , maxWidth:"600px"}}>
    <img 
     
     className="d-block w-100"
      src="c1.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
     style={{maxHeight:"500px" , maxWidth:"700px"}}
      className="d-block w-100"
      src="c2.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
     style={{maxHeight:"500px" , maxWidth:"700px"}}
     
      className="d-block w-100"
      src="c1.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
</Row>
</Container>
            </div>
        );
    }
}

export default Courasol;