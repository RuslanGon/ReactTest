import { createSlice } from "@reduxjs/toolkit";
import { apiGetProducts, apiReguestProductDetailsById } from "./operation";

const INITIAL_STATE = {
  productDetails: null,
  isLoader: false,
  isError: false,
  products: null,
  };

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(apiReguestProductDetailsById.pending, (state) => {
        state.isLoader = true;
        state.isError = false;
      })
      .addCase(apiReguestProductDetailsById.fulfilled, (state, action) => {
        state.isLoader = false;
        state.productDetails = action.payload;
      })
      .addCase(apiReguestProductDetailsById.rejected, (state) => {
        state.isLoader = false;
        state.isError = true;
      })
      .addCase(apiGetProducts.pending, (state) => {
        state.isLoader = true;
        state.isError = false;
      })
      .addCase(apiGetProducts.fulfilled, (state, action) => {
        state.isLoader = false;
        state.products = action.payload.products;
      })
      .addCase(apiGetProducts.rejected, (state) => {
        state.isLoader = false;
        state.isError = true;
      }),
});

export  const productDetailsReducer = productDetailsSlice.reducer;