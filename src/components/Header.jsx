import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

//import context
import { AppContext } from '../context/AppContext';

export const Header = () => {
  const {
    state: { cart },
  } = useContext(AppContext);

  return (
    <div className="Header">
      <Link to="/">
        <h1 className="Header-title">PlatziConf Merch</h1>
      </Link>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" title="Checkout" />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
};
