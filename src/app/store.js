import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import basketReducer from '../features/basket/basketSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    basket: basketReducer
  },
});
