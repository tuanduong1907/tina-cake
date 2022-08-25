import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./admin/auth/authSlice";
import categoriesReducer from "./admin/categories/categoriesSlice";
import commonReducer from "./admin/common/commonSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    common: commonReducer,
  },
});

export default store;
