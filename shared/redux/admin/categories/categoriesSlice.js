import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoriesService from "./categoriesService";

const initialState = {
  data: [],
  isStatus: false,
  isError: false,
  isLoading: false,
  message: "",
};

const isMessage = (error) =>
  (error.response && error.response.data && error.response.data.message) ||
  error.message ||
  error.toString();

// Create Category
export const createCategory = createAsyncThunk(
  "categories/create",
  async (reqData, thunkAPI) => {
    try {
      return await categoriesService.createCategory(reqData);
    } catch (error) {
      const message = isMessage(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get Categories
export const getCategories = createAsyncThunk(
  "categories/get",
  async (reqData, thunkAPI) => {
    try {
      return await categoriesService.getCategories();
    } catch (error) {
      const message = isMessage(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update Category
export const updateCategory = createAsyncThunk(
  "categories/update",
  async ({idItem, reqData}, thunkAPI) => {
    try {
      return await categoriesService.updateCategory(idItem, reqData);
    } catch (error) {
      const message = isMessage(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete Category
export const deleteCategory = createAsyncThunk(
  "categories/delete",
  async (id, thunkAPI) => {
    try {
      return await categoriesService.deleteCategory(id);
    } catch (error) {
      const message = isMessage(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Auth
export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    reset: (state) => {
      (state.isStatus = false),
        (state.isError = false),
        (state.isLoading = false),
        (state.message = "");
    },
  },
  extraReducers: (builder) => {
    builder
      // Create Category
      .addCase(createCategory.fulfilled, (state, action) => {
        const status = action.payload.status;
        state.isLoading = false;
        status.Code === 1 && state.data.unshift(action.payload.data);
        state.isStatus = status.Code;
        state.message = status.Message;
      })
      // Get Categories
      .addCase(getCategories.fulfilled, (state, action) => {
        const status = action.payload.status;
        state.isLoading = false;
        status.Code === 1
          ? (state.data = action.payload.data.reverse())
          : (state.isStatus = status.Code);
        state.message = status.Message;
      })
      // Update Categories
      .addCase(updateCategory.fulfilled, (state, action) => {
        const status = action.payload.status;
        const resData = action.payload.data;
        state.isLoading = false;
        status.Code === 1 &&
          (state.data = state.data.map((item) =>
            item._id === resData._id ? resData : item
          ));
        state.isStatus = status.Code;
        state.message = status.Message;
      })
      // Delete Category
      .addCase(deleteCategory.fulfilled, (state, action) => {
        const status = action.payload.status;
        state.isLoading = false;
        status.Code === 1 &&
          (state.data = state.data.filter(
            (item) => item._id !== action.payload.data._id
          ));
        state.isStatus = status.Code;
        state.message = status.Message;
      });
    builder.addMatcher(
      (action) => action.type.endsWith("/pending"),
      (state, action) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith("/rejected"),
      (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      }
    );
  },
});

export const { reducer, actions } = categoriesSlice;
export const { reset } = actions;
export default reducer;
