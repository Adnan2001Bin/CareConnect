import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth-Slice";
import adminSlice from "./Admin/Doctor-Slice"
const store = configureStore({
  reducer: {
    auth:authReducer,
    adminSlice: adminSlice
  },
});

export default store;
