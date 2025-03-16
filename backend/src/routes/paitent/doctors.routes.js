import express from "express";
import { getDoctorDetails, getFilterDoctors } from "../../controllers/patient/doctor.controller.js";

const router = express.Router();

router.get("/get", getFilterDoctors);
router.get("/get/:id" , getDoctorDetails)

export default router;
