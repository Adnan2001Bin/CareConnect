import mongoose from "mongoose";

const bookAppoinmentSchema = new mongoose.Schema(
  {
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AddDoctor",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    status: { type: String, default: "Pending" }, // e.g., Pending, Confirmed, Cancelled
  },
  { timestamps: true }
);

export const BookAppoinment = mongoose.model(
  "BookAppoinment",
  bookAppoinmentSchema
);
