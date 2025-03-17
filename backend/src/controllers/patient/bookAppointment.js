import { BookAppoinment } from "../../models/bookAppoinment.js";
import { AddDoctor } from "../../models/addDoctors.js";
import { User } from "../../models/user.model.js";

// Book an appointment
export const bookAppointment = async (req, res) => {
  try {
    const { doctorId, userId, date, time } = req.body;

    // Validate required fields
    if (!doctorId || !userId || !date || !time) {
      return res.status(400).json({
        success: false,
        message: "Doctor ID, User ID, date, and time are required.",
      });
    }

    // Check if the doctor exists
    const doctor = await AddDoctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found.",
      });
    }

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // Check if the user already has an appointment with this doctor
    const existingAppointment = await BookAppoinment.findOne({
      doctorId,
      userId,
    });

    if (existingAppointment) {
      return res.status(400).json({
        success: false,
        message: "You already have an appointment with this doctor.",
      });
    }

    // Create a new appointment
    const newAppointment = new BookAppoinment({
      doctorId,
      userId,
      date,
      time,
    });

    await newAppointment.save();

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully.",
      data: newAppointment,
    });
  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({
      success: false,
      message: error.message || "An error occurred while booking the appointment.",
    });
  }
};



export const getAppointments = async (req, res) => {
  try {
    const { userId } = req.params;

    // Validate userId
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required.",
      });
    }

    // Fetch appointments for the user and populate doctor details
    const appointments = await BookAppoinment.find({ userId }).populate(
      "doctorId",
      "name speciality degree experience image"
    );

    res.status(200).json({
      success: true,
      message: "Appointments fetched successfully.",
      data: appointments,
    });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({
      success: false,
      message: error.message || "An error occurred while fetching appointments.",
    });
  }
};
