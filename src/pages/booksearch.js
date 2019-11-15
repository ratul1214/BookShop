import React, { Component } from 'react';
import Header from '../header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import products from '../Products.json';
import ProductList from '../component/productlist'


class Booksearch extends Component {
  
    render() {
      var Columns = require('react-columns');
function Component(){
  return (
  <Columns columns="5">
    <img src="http://placehold.it/800x1200?text=1" alt="" />
    <img src="http://placehold.it/800x600?text=2" alt="" />
    <img src="http://placehold.it/800x800?text=3" alt="" />
    <img src="http://placehold.it/800x600?text=4" alt="" />
    <img src="http://placehold.it/800x1200?text=5" alt="" />
    <img src="http://placehold.it/800x600?text=6" alt="" />
    <img src="http://placehold.it/800x400?text=7" alt="" />
    <img src="http://placehold.it/800x400?text=8" alt="" />
    <img src="http://placehold.it/800x400?text=9" alt="" />
    <img src="http://placehold.it/800x800?text=10" alt="" />
  </Columns>
  );
}
        return (
            <div>
             <Container>
                 <Row>
                     <Col sm={4}>
                     </Col>
                     <Col sm={8}>
                     <Row>
                         <Col sm={4}>
                         <Image src="holder.js/171x180" thumbnail /> 
                         </Col>
                         <Col sm={8}>
                            <Row>
                              <h2>name of authore</h2>
                            </Row>
                            <Row>
                              <h5>description</h5>
                            </Row>
                         </Col>
                     </Row>
                     <Row>
                     <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
                     </Row>
                     <Row>
                         <h2>Books Of Authors</h2>
                     </Row>
                     <Row>
                         <h5>100 books showing</h5>
                     </Row>
                     <Container style={{width:'500px'}} >
                     
          <ProductList
            products={products} />
        
                     </Container>
                     <Row>
                         
                     </Row>
                     </Col>
                     
                 </Row>
             </Container>
            </div>
        );
    }
}

export default Booksearch;