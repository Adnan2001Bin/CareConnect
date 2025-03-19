import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  doctorList: [],
};

export const addNewDoctor = createAsyncThunk(
  "/doctors/add",
  async (formdata) => {
    const result = await axios.post(
       `${import.meta.env.VITE_API_BASE_URL}/api/admin/doctors/add`,
      formdata,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return result?.data;
  }
);

export const fetchAlldoctors = createAsyncThunk(
  "/doctors/fetchAlldoctors",
  async () => {
    const result = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/admin/doctors/get`
    );

    return result?.data;
  }
);

export const editDoctor = createAsyncThunk(
  "/doctors/editDoctor",
  async ({ id, formData }) => {
    const result = await axios.put(
      `${import.meta.env.VITE_API_BASE_URL}/api/admin/doctors/edit/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return result?.data;
  }
);

export const deleteDoctor = createAsyncThunk(
  "/doctors/deletedoctor",
  async (id) => {
    const result = await axios.delete(
      `${import.meta.env.VITE_API_BASE_URL}/api/admin/doctors/delete/${id}`
    );

    return result?.data;
  }
);
//slice
const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlldoctors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAlldoctors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.doctorList = action.payload.data;
      })
      .addCase(fetchAlldoctors.rejected, (state, action) => {
        state.isLoading = false;
        state.doctorList = [];
      });
  },
});

export default AdminSlice.reducer;
