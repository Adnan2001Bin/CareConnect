import express from "express";
import { bookAppointment, getAppointments } from "../../controllers/patient/bookAppointment.js";

const router = express.Router()

router.post("/book", bookAppointment);
router.get("/:userId", getAppointments); 
export default router;
