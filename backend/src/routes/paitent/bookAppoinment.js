import express from "express";
import { bookAppointment, getDoctorAppointments, getPatientAppointments } from "../../controllers/patient/bookAppointment.js";

const router = express.Router()

router.post("/book", bookAppointment);
router.get("/get-patient-appointments/:userId", getPatientAppointments);
router.get("/get-doctor-appointments/:doctorId", getDoctorAppointments);

export default router;
