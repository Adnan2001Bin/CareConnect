import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth-Slice";
import adminSlice from "./Admin/Doctor-Slice"
import paitentViewDoctorSlice from "./Paitent/patient-slice"
import appointmentSlice from "./Paitent/patient-slice/bookingDoctor.js";

const store = configureStore({
  reducer: {
    auth:authReducer,
    adminSlice: adminSlice,
    paitentViewDoctor:paitentViewDoctorSlice,
    appointments: appointmentSlice,
  },
});

export default store;
