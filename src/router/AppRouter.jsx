
import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Home from '../pages/Home';
import CartPage from '../pages/CartPage';
import OrderPage from '../pages/OrderPage';


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/order" element={<OrderPage />} />
    </Routes>
  );
};

export default AppRouter;
