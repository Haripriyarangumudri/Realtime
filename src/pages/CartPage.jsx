
import React from 'react';
import { useCart } from '../context/cartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { state, dispatch } = useCart();

  const handleRemoveItem = (item) => {

    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {state.items.map((item) => (
            <li key={item.uniqueId}> 
              {item.name} - ${item.price}
              <button onClick={() => handleRemoveItem(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/order">
        <button>Proceed to Order</button>
      </Link>
    </div>
  );
};

export default CartPage;
