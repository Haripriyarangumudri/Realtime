import React from 'react';
import OrderStatus from '../components/OrderStatus';

const OrderPage = () => {

  const orderId = 1; 
  

  return (
    <div>
      <h1>Order Page</h1>
      <OrderStatus orderId={orderId} />
  
    </div>
  );
};

export default OrderPage;
