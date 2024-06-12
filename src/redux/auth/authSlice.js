import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/'
})

export const setToken = (token) => {
instance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const clearToken = () => {
instance.defaults.headers.common.Authorization = ''
}

export const apiRegistor = createAsyncThunk(
  "auth/register",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/users/signup", formData);
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
); 

const INITIAL_STATE = {
   isSignedIn: false,
   userData: null,
   token: null,
   isLoading: false,
   isError: false
  };

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
});

export  const authReducer = authSlice.reducer;