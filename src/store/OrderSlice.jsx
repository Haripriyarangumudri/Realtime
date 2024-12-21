
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchOrderStatus = createAsyncThunk(
  'orders/fetchStatus',
  async (orderId) => {
    const response = await axios.get(`http://localhost:5000/orders/${orderId}`);
    return response.data;
  }
);


export const updateOrderStatus = createAsyncThunk(
  'orders/updateStatus',
  async ({ orderId, newStatus }) => {
    const response = await axios.put(`http://localhost:5000/orders/${orderId}`, {
      status: newStatus
    });
    return response.data; 
  }
);

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [], 
    status: 'null',
  },
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderStatus.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOrderStatus.fulfilled, (state, action) => {
        state.status = 'succeeded';
 
        const existingOrderIndex = state.orders.findIndex(order => order.id === action.payload.id);
        if (existingOrderIndex !== -1) {
          state.orders[existingOrderIndex] = action.payload; 
        } else {
          state.orders.push(action.payload);
        }
      })
      .addCase(fetchOrderStatus.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(updateOrderStatus.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        state.status = 'succeeded';
       
        const existingOrderIndex = state.orders.findIndex(order => order.id === action.payload.id);
        if (existingOrderIndex !== -1) {
          state.orders[existingOrderIndex] = action.payload; 
        }
      })
      .addCase(updateOrderStatus.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export default orderSlice.reducer;
