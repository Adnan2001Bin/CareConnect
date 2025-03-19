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



export const getPatientAppointments = async (req, res) => {
  try {
    const { userId } = req.params;

    // Validate userId
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required.",
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

    // Fetch appointments for the patient and populate doctor details
    const appointments = await BookAppoinment.find({ userId })
      .populate("doctorId", "name email speciality fees image") // Populate doctor details
      .sort({ date: -1 }); // Sort by date (most recent first)

    if (!appointments || appointments.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No appointments found for this patient.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Appointments retrieved successfully.",
      data: appointments,
    });
  } catch (error) {
    console.error("Error fetching patient appointments:", error);
    res.status(500).json({
      success: false,
      message: error.message || "An error occurred while fetching appointments.",
    });
  }
};


export const getDoctorAppointments = async (req, res) => {
  try {
    const { doctorId } = req.params;

    // Validate doctorId
    if (!doctorId) {
      return res.status(400).json({
        success: false,
        message: "Doctor ID is required.",
      });
    }

    // Check if the doctor exists in AddDoctor collection
    const doctor = await AddDoctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found.",
      });
    }

    // Fetch appointments for the doctor and populate patient (user) details
    const appointments = await BookAppoinment.find({ doctorId })
      .populate("userId", "userName email")
      .sort({ date: -1 });

    if (!appointments || appointments.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No appointments found for this doctor.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Appointments retrieved successfully.",
      data: appointments,
    });
  } catch (error) {
    console.error("Error fetching doctor appointments:", error);
    res.status(500).json({
      success: false,
      message: error.message || "An error occurred while fetching appointments.",
    });
  }
};