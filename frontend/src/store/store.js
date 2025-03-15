import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth-Slice";
import adminSlice from "./Admin/Doctor-Slice"
import paitentViewDoctorSlice from "./Paitent/patient-slice"

const store = configureStore({
  reducer: {
    auth:authReducer,
    adminSlice: adminSlice,
    paitentViewDoctor:paitentViewDoctorSlice,
  },
});

export default store;
