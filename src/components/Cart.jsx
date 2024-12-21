import React from 'react';
import { useCart } from '../context/cartContext';

const Cart = () => {
  const { state, dispatch } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {state.items.length === 0 ? (
          <li>No items in the cart</li>
        ) : (
          state.items.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })}>
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cart;
