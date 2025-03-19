import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth/auth.route.js";
import addDoctorRouter from './routes/admin/addDoctor.routes.js'
import patientViewDoctorRouter from './routes/paitent/doctors.routes.js'
import appointmentRouter from "./routes/paitent/bookAppoinment.js"; 

const app = express();

app.use(express.urlencoded({ extended: true }));


app.use(
  cors({
    origin: process.env.CORS_ORIGIN.split(",") || [
      "http://localhost:5300",
      "https://care-connect-cc-self.vercel.app/",
    ],
    methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
      "X-Requested-With"
    ],
    credentials: true,
    optionsSuccessStatus: 204
  })
);

app.use(express.json());
app.use(cookieParser());
app.options("*", cors());

app.use("/api/auth" , authRouter)
app.use("/api/admin/doctors" , addDoctorRouter)
app.use("/api/patient/doctors" , patientViewDoctorRouter)
app.use("/api/patient/appointments", appointmentRouter); 

export default app;
