import { createAsyncThunk } from "@reduxjs/toolkit";
import { reguestProductDetailsById } from "../../services/api";

export const apiReguestProductDetailsById = createAsyncThunk(
  "productDetails/get",
  async (productId, thunkApi) => {
    try {
      const data = await reguestProductDetailsById.get(productId);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
