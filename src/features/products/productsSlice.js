import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts, fetchCategories } from './productsApi'

const initialState = {
  loading: true,
  error: false,
};

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => await fetchProducts()
)

export const getCategories = createAsyncThunk(
  'products/getCategories',
  async () => await fetchCategories()
)

export const productsSlice = createSlice({
  name: 'allProcucts',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        action.payload.forEach(item => state[item.id] = item)
        state.loading = false;
        state.error = false;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })





      .addCase(getCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = 'idle';
        state.category = action.payload;
      });

  }
});

export const selectAllProducts = (state) => state.products;
export const selectProduct = (state, id) => state.allProducts.products.find(product => product.id === id);

export const selectFilteredProducts = (state, ids) => {
  const arr = []
  ids.forEach(id => {
    arr.push(state.allProducts.products.find(product => product.id === id))
  })
  return arr
}

export const selectCategory = (state) => state.allProducts.category;

export default productsSlice.reducer;