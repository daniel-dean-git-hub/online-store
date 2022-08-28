import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem: (state, {payload}) => {
      const { id, quantity } = payload
      state.items[id] = {
        quantity: quantity
      }
    },
    deleteItem: (state, {payload}) => {
      const { id } = payload
      delete state.items[id]
    },
    updateItemQuantityByAmount: (state, {payload}) => {
      const { id, quantity } = payload
      state.items[id].quantity += quantity
    },
    increaseItemQuantity: (state, {payload}) => {
      const { id } = payload
      state.items[id].quantity += 1
    },
    decreaseItemQuantity: (state, {payload}) => {
      const { id } = payload
      state.items[id].quantity -= 1
    }
  }
});

export const { 
  addItem,
  deleteItem, 
  updateItemQuantityByAmount,
  increaseItemQuantity,
  decreaseItemQuantity
} = basketSlice.actions;

export const selectBasketItem = (state, id) => state.basket.items[id]

export default basketSlice.reducer;
