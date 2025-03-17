import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: [],
  isLoading: false,
  error: null,
};

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



// Fetch appointments for a user
export const fetchAppointments = createAsyncThunk(
  "appointments/fetchAppointments",
  async (userId) => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/patient/appointments/${userId}`
    );
    return response.data.data;
  }
);

const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
      });
  },
});

export default appointmentSlice.reducer;