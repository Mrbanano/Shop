import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../containers/Home';
import { Checkout } from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import { Layout } from '../components/Layout';

//import Provider
import { AppProvider } from '../context/AppProvider';

export const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/checkout/Information" element={<Information />} />
            <Route path="/checkout/payment" element={<Payment />} />
            <Route path="/checkout/success" element={<Success />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppProvider>
  );
};

/**
 *
 */
