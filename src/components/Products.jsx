import React, { useContext } from 'react';
import Product from './Product';
import '../styles/components/Products.css';

//import context
import { AppContext } from '../context/AppContext';

const Products = () => {
  const {
    state: { products },
  } = useContext(AppContext);

  return (
    <div className="Products">
      <div className="Products-items">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
