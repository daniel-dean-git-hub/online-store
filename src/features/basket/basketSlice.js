import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {
    '4': {
      quantity: 1,
      price: 15.99,
      total: 15.99
    },
    '5': {
      quantity: 1,
      price: 695,
      total: 695
    },
    '6': {
      quantity: 2,
      price: 168,
      total: 336
    },
    '7': {
      quantity: 3,
      price: 9.99,
      total: 29.97
    },
    '8': {
      quantity: 2,
      price: 10.99,
      total: 21.98
    },
    '13': {
      quantity: 1,
      price: 599,
      total: 599
    },
    '15': {
      quantity: 1,
      price: 56.99,
      total: 56.99
    },
    '16': {
      quantity: 2,
      price: 29.95,
      total: 59.9
    },
    '18': {
      quantity: 2,
      price: 9.85,
      total: 19.7
    }
  }
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem: (state, {payload}) => {
      const { id, quantity, price} = payload
      state.items[id] = {
        quantity: quantity,
        price: price,
        total: quantity * price
      }
    },
    deleteItem: (state, {payload}) => {
      const { id } = payload
      delete state.items[id]
    },
    updateItemQuantityByAmount: (state, {payload}) => {
      const { id, quantity } = payload
      state.items[id].quantity += quantity
      state.items[id].total = state.items[id].quantity * state.items[id].price
    },
    increaseItemQuantity: (state, {payload}) => {
      const { id } = payload
      state.items[id].quantity += 1
      state.items[id].total = state.items[id].quantity * state.items[id].price
    },
    decreaseItemQuantity: (state, {payload}) => {
      const { id } = payload
      if (state.items[id].quantity !== 0) state.items[id].quantity -= 1
      state.items[id].total = state.items[id].quantity * state.items[id].price
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
export const selectAllBasketItems = state => state.basket.items

export default basketSlice.reducer;
