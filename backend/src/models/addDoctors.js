import mongoose, { Schema } from "mongoose";

const AddDoctorSchema = new Schema(
  {
    image: String,
    name: String,
    email: { type: String, unique: true },
    password: String,
    experience: Number,
    fees: Number,
    aboutDoctor: String,
    speciality: String,
    degree: String,
    role: { type: String, default: "doctor" }, 
  },
  { timestamps: true }
);

export const AddDoctor = mongoose.model("AddDoctor", AddDoctorSchema);