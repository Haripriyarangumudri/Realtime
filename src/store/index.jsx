

import { configureStore } from '@reduxjs/toolkit';
import productReducer from './ProductSlice'
import orderReducer from './orderSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    orders: orderReducer,
  },
});

export default store;
