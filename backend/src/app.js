import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth/auth.route.js";
import addDoctorRouter from './routes/admin/addDoctor.routes.js'
import patientViewDoctorRouter from './routes/paitent/doctors.routes.js'
const app = express();

app.use(express.urlencoded({ extended: true }));


app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", " POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
    optionsSuccessStatus: 204

  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth" , authRouter)
app.use("/api/admin/doctors" , addDoctorRouter)
app.use("/api/patient/doctors" , patientViewDoctorRouter)


export default app;
