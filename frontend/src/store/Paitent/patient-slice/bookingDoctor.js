// ./store/Paitent/patient-slice/bookingDoctor.js
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: [], // For patient appointments
  doctorAppointments: [], // For doctor appointments
  isLoading: false,
  error: null,
};

// Async function to book an appointment
export const bookAppointment = async (appointmentData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/patient/appointments/book`,
      appointmentData
    );
    return response.data;
  } catch (error) {
    console.error("Error booking appointment:", error);
    throw error;
  }
};

// Fetch appointments for a user (patient)
export const fetchAppointments = createAsyncThunk(
  "appointments/fetchAppointments",
  async (userId) => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/patient/appointments/get-patient-appointments/${userId}`
    );
    return response.data.data;
  }
);

// Fetch appointments for a doctor
export const fetchDoctorAppointments = createAsyncThunk(
  "appointments/fetchDoctorAppointments",
  async (doctorId) => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/patient/appointments/get-doctor-appointments/${doctorId}`
    );
    return response.data.data;
  }
);

const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch patient appointments
    builder
      .addCase(fetchAppointments.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.appointments = action.payload;
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // Fetch doctor appointments
      .addCase(fetchDoctorAppointments.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDoctorAppointments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.doctorAppointments = action.payload;
      })
      .addCase(fetchDoctorAppointments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default appointmentSlice.reducer;