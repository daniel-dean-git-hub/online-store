import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {
    '1': {
      quantity: 2,
      price: 109.95,
      total: 219.9
    },
    '2': {
      quantity: 1,
      price: 22.3,
      total: 22.3
    },
    '3': {
      quantity: 1,
      price: 55.99,
      total: 55.99
    },
    '4': {
      quantity: 2,
      price: 15.99,
      total: 31.98
    },
    '5': {
      quantity: 2,
      price: 695,
      total: 1390
    },
    '6': {
      quantity: 3,
      price: 168,
      total: 504
    },
    '7': {
      quantity: 4,
      price: 9.99,
      total: 39.96
    },
    '8': {
      quantity: 3,
      price: 10.99,
      total: 32.97
    },
    '9': {
      quantity: 1,
      price: 64,
      total: 64
    },
    '10': {
      quantity: 1,
      price: 109,
      total: 109
    },
    '11': {
      quantity: 1,
      price: 109,
      total: 109
    },
    '12': {
      quantity: 1,
      price: 114,
      total: 114
    },
    '13': {
      quantity: 2,
      price: 599,
      total: 1198
    },
    '14': {
      quantity: 1,
      price: 999.99,
      total: 999.99
    },
    '15': {
      quantity: 2,
      price: 56.99,
      total: 113.98
    },
    '16': {
      quantity: 3,
      price: 29.95,
      total: 89.85
    },
    '17': {
      quantity: 1,
      price: 39.99,
      total: 39.99
    },
    '18': {
      quantity: 3,
      price: 9.85,
      total: 29.549999999999997
    },
    '19': {
      quantity: 1,
      price: 7.95,
      total: 7.95
    },
    '20': {
      quantity: 1,
      price: 12.99,
      total: 12.99
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
      state.items[id].quantity = quantity
      state.items[id].total = state.items[id].quantity * state.items[id].price
    },
    increaseItemQuantity: (state, {payload}) => {
      const { id } = payload
      if (state.items[id].quantity < 100) state.items[id].quantity += 1
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
export const selectAllItemQuantity = state => Object.values(state.basket.items).reduce((previousValue, currentValue) => {
  const { quantity } = currentValue
  return previousValue += quantity
}, 0);
export const selectBasketTotal = state => Object.values(state.basket.items).reduce((previousValue, currentValue) => {
  const { quantity, price } = currentValue
  return previousValue += quantity*price
}, 0);

export default basketSlice.reducer;
