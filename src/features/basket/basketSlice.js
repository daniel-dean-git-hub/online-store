import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}
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
      state.items[id].quantity === 0 
        ? delete state.items[id] 
        : state.items[id].total = state.items[id].quantity * state.items[id].price
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
