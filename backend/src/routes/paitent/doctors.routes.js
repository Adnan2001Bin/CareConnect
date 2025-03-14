import express from "express";
import { getFilterDoctors } from "../../controllers/patient/doctor.controller.js";

const router = express.Router();

router.get("/get", getFilterDoctors);

export default router;
