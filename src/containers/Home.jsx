import React from 'react';
import '../styles/components/Home.css';

import initialState from '../initialState';
import Products  from '../components/Products';

export const Home = () => {
  return <Products products={initialState.products} />;
};
