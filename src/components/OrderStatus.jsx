import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderStatus, updateOrderStatus } from '../store/orderSlice';

const OrderStatus = ({ orderId }) => {
  const dispatch = useDispatch();
  const { orders, status, error } = useSelector((state) => state.orders);


  useEffect(() => {
    dispatch(fetchOrderStatus(orderId));
  }, [dispatch, orderId]);

  const handleUpdateStatus = (newStatus) => {
    dispatch(updateOrderStatus({ orderId, newStatus }));
  };


  const order = orders.find(order => order.id === orderId);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>{error || 'Failed to fetch order status.'}</div>;

  return (
    <div>
      <h2>Order Status</h2>
      {order ? (
        <div>
          <p>Order ID: {order.id}</p>
          <p>Status: {order.status}</p>
      
          <button onClick={() => handleUpdateStatus('shipped')}>Mark as Shipped</button>
          <button onClick={() => handleUpdateStatus('delivered')}>Mark as Delivered</button>
        </div>
      ) : (
        <p>No order found</p>
      )}
    </div>
  );
};

export default OrderStatus;

