import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CountUp from 'react-countup';
import ScrollEvent from 'react-onscroll';
class Autoincrmnt extends Component {
    render() {
        return (
            <div>
                <Container style={{backgroundColor:"green", width:'100%',marginTop:'20px', marginBottom:'15px'}}>
    <Row className="justify-content-md-center">
      <Col style={{backgroundColor:"green"}}>
        <h2 style={{color:'white'}}> Book</h2>
        <CountUp style={{color:'white'}} start={0} end={10000}>
  {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
      
      <ScrollEvent handleScrollCallback={start} />
    </div>
  )}
</CountUp>
      </Col>
      <Col style={{backgroundColor:"green"}}>
      <h2 style={{color:'white'}}> Sell</h2>
        <CountUp style={{color:'white'}} start={0} end={10000}>
  {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
      
      <ScrollEvent handleScrollCallback={start} />
    </div>
  )}
</CountUp>
      </Col>
      <Col  style={{backgroundColor:"green"}}>
          <Row className="justify-content-md-center">
              <Col>
              <h2 style={{color:'white'}}>Publishers</h2>
        <CountUp style={{textcolor:'white'}} start={0} end={10000}>
  {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
      
      <ScrollEvent handleScrollCallback={start} />
    </div>
  )}
</CountUp>
              </Col>
          </Row>
     
      </Col>
    </Row>
  </Container> 
            </div>
        );
    }
}

export default Autoincrmnt;