import React from 'react';
import { AppContext } from './AppContext';
import { useInitialState } from '../hook/useInitialState';

export const AppProvider = ({ children }) => {
  const { addToCard, RemoveFromCart, state } = useInitialState();
  return (
    <AppContext.Provider value={{ addToCard, RemoveFromCart, state }}>
      {children}
    </AppContext.Provider>
  );
};
