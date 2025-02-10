import mongoose, { Schema } from "mongoose";

const AddDoctorSchema = new Schema(
  {
    image: String,
    name: String,
    email: String,
    password: String,
    experience: Number,
    fees: Number,
    aboutDoctor: String,
    speciality: String,
    degree: String,
  },
  { timestamps: true }
);

export const AddDoctor = mongoose.model("AddDoctor", AddDoctorSchema);
