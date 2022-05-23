import { useState } from 'react';
import initialState from '../initialState';

export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCard = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const RemoveFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  return {
    addToCard,
    RemoveFromCart,
    state,
  };
};
