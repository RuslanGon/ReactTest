import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
    // headers: {
    //   "Authorization" : `Bearer ${localStorage.getItem('token')}`
    // }
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

export const apiLogin = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/users/login", formData);
      console.log(data);
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
); 

export const apiRefrashUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState
      const token = state.auth.token
      setToken(token);

      const { data } = await instance.get("/users/current");
      console.log(data);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
); 


export const apiLogOut = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await instance.post("/users/logout");
      clearToken()
      return
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
  extraReducers: (builder) =>
    builder
      .addCase(apiRegistor.pending, (state) => {
        (state.isLoading = true), 
        (state.isError = false);
      })
      .addCase(apiRegistor.fulfilled, (state, action) => {
        (state.isLoading = false), 
        (state.isSignedIn = true);
        state.userData = action.payload.user;
        state.token = action.payload.token
      })
      .addCase(apiRegistor.rejected, state => {
        (state.isLoading = false), 
        (state.isError = true);
      })


      .addCase(apiLogin.pending, (state) => {
        (state.isLoading = true), 
        (state.isError = false);
      })
      .addCase(apiLogin.fulfilled, (state, action) => {
        (state.isLoading = false), 
        (state.isSignedIn = true);
        state.userData = action.payload.user;
        state.token = action.payload.token
      })
      .addCase(apiLogin.rejected, state => {
        (state.isLoading = false), 
        (state.isError = true);
      })


      .addCase(apiRefrashUser.pending, (state) => {
        (state.isLoading = true), 
        (state.isError = false);
      })
      .addCase(apiRefrashUser.fulfilled, (state, action) => {
        (state.isLoading = false), 
        (state.isSignedIn = true);
        state.userData = action.payload;
      })
      .addCase(apiRefrashUser.rejected, state => {
        (state.isLoading = false), 
        (state.isError = true);
      })

      .addCase(apiLogOut.pending, (state) => {
        (state.isLoading = true), 
        (state.isError = false);
      })
      .addCase(apiLogOut.fulfilled, () => {
        return INITIAL_STATE
      })
      .addCase(apiLogOut.rejected, state => {
        (state.isLoading = false), 
        (state.isError = true);
      })
});

export  const authReducer = authSlice.reducer;