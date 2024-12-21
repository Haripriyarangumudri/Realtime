
import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
   
      const newItem = { 
        ...action.payload, 
        uniqueId: `${action.payload.id}-${new Date().getTime()}`  
      };
      return { ...state, items: [...state.items, newItem] };
      
    case 'REMOVE_ITEM':

      return { 
        ...state, 
        items: state.items.filter(item => item.uniqueId !== action.payload.uniqueId) 
      };
      
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
