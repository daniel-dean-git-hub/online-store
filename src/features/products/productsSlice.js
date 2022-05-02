import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productsApi'

const initialState = {
  details: {},
  loading: true,
  error: false,
};

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => await fetchProducts()
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
        action.payload.forEach(item => state.details[item.id] = item)
        state.loading = false;
        state.error = false;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
  }
});

export const selectAllProducts = (state) => state.products.details;
export const selectLoadingStatus = (state) => state.products.loading;
export const selectProduct = (state, id) => state.products.details[id];

export const selectFilteredProducts = (state, ids) => {
  const arr = []
  ids.forEach(id => {
    arr.push(state.allProducts.products.find(product => product.id === id))
  })
  return arr
}


export const selectAllProductsFromCategory = (state, category) => Object.values(state.products.details).filter(item => item.category === category)



export const selectAllCategories = (state) => Object.values(state.products.details)

export default productsSlice.reducer;