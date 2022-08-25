import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalForm: false,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    openModalForm: (state, action) => {
      state.isModalForm = action.payload;
    },
    closeModalForm: (state) => {
      state.isModalForm = false;
    },
  },
});

export const { reducer, actions } = commonSlice;
export const { openModalForm, closeModalForm } = actions;
export default reducer;
