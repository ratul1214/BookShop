import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import '../style.css'
function Product(props) {
  let {
    product
  } = props;

  return (
    
    <Container style={{width:'80px',height:'80px'}}>
      <Container className="product">
        <div className="product-img-wrapper">
          <a href="#">
            <img
              alt={product.name}
              className="img-responsive product-img"
              src={product.picture} />
          </a>
        </div>

        <h4
          className="ellipsis"
          title={product.name}>
          <a href="#">
            {product.name}
          </a>
        </h4>

        <h5
          className="ellipsis product-brand-name"
          title={product.brand_name}>
          {`by ${product.brand_name}`}
        </h5>

        <div className="pull-right h4 product-price">
          {`${product.price}$`}
        </div>
      </Container>
    </Container>
    
  );
}



export default Product;