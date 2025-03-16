import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  doctorList: [],
  doctorDetails: null,
};

export const fetchAllFilterDoctors = createAsyncThunk(
  "/doctors/fetchAllDoctors",
  async ({ filterParams }) => {
    const query = new URLSearchParams(filterParams);
    const result = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/patient/doctors/get?${query}`
    );
    return result?.data;
  }
);

export const fetchDoctorDetails = createAsyncThunk(
  "/doctors/fetchDoctorDetails",
  async (id) => {
    const result = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/patient/doctors/get/${id}`
    );
    return result?.data;
  }
);

const patientViewDoctorSlice = createSlice({
  name: "patientViewDoctor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilterDoctors.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAllFilterDoctors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.doctorList = action.payload.data;
      })
      .addCase(fetchAllFilterDoctors.rejected, (state, action) => {
        state.isLoading = false;
        state.doctorList = [];
      })
      .addCase(fetchDoctorDetails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchDoctorDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.doctorDetails = action.payload.data;
      })
      .addCase(fetchDoctorDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.doctorDetails = null;
      });
  },
});

export default patientViewDoctorSlice.reducer;
