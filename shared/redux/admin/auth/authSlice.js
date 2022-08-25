import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// const user = JSON.parse(localStorage.getItem("user"));
const user = "";

const initialState = {
  user: user ? user : null,
  isSuccess: false,
  isStatus: false,
  isError: false,
  isLoading: false,
  message: "",
};

// Login
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Auth
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      (state.isSuccess = false),
        (state.isStatus = false),
        (state.isError = false),
        (state.isLoading = false),
        (state.message = "");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        const status = action.payload.ResultStatus;
        state.isLoading = false;
        status.Code === 1
          ? (state.isSuccess = true)
          : (
            state.isStatus = status.Code,
            state.message = status.Message);
        state.user = action.payload.Data;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reducer, actions } = authSlice;
export const { reset } = actions;
export default reducer;
