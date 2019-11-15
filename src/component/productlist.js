import React from 'react';
import Product from '../component/product';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.products.map(product => (
            <Product
              key={product.id}
              product={product} />
          ))
        }
      </div>
    );
  }
}


export default ProductList;