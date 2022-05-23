import React, { useContext } from 'react';
//import context
import { AppContext } from '../context/AppContext';

const Product = ({ product }) => {
  const { addToCard } = useContext(AppContext);

  const AddProduct = () => {
    addToCard(product);
  };
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title} loading="Lazy" />
      <div className="Product-item-info">
        <h2>
          {product.title}
          <span>${product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={AddProduct}>
        Comprar
      </button>
    </div>
  );
};

export default Product;
