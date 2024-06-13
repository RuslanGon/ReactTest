import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../auth/authSlice";

export const apiGetContacts = createAsyncThunk(
  "contacts/getAll",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("contacts");
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
); 

const INITIAL_STATE = {
   contacts: null,
   isLoading: false,
   isError: false
  };

const contactsSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(apiGetContacts.pending, (state) => {
        (state.isLoading = true), 
        (state.isError = false);
      })
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        (state.isLoading = false), 
        (state.isSignedIn = true);
        state.userData = action.payload.user;
        state.token = action.payload.token
      })
      .addCase(apiGetContacts.rejected, state => {
        (state.isLoading = false), 
        (state.isError = true);
      })

});

export  const contactsReducer = contactsSlice.reducer;