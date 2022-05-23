import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../styles/components/Checkout.css';

//import context
import { AppContext } from '../context/AppContext';

export const Checkout = () => {
  const {
    state: { cart },
    RemoveFromCart,
  } = useContext(AppContext);

  const handleSumTotal = () => {
    const reducer = (acumulator, currentValue) =>
      acumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <>
      {cart.length === 0 ? (
        <Navigate to="/" />
      ) : (
        <>
          <div className="Checkout">
            <div className="Checkout-content">
              <h3>Lista de Pedidos:</h3>
              {cart.map((item) => (
                <div key={item.id} className="Checkout-item">
                  <div className="Checkout-element">
                    <h4>{item.title}</h4>
                    <span>{item.price}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      RemoveFromCart(item);
                    }}
                  >
                    <i className="fas fa-trash-alt" title="Eliminar" />
                  </button>
                </div>
              ))}
            </div>
            <div className="Checkout-sidebar">
              <h3>Precio Total: ${handleSumTotal()}</h3>
              <Link to="/checkout/Information">
                <button type="button">Continuar pedido</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};
