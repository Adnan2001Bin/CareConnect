import express from "express";
import { registerUser } from "../../controllers/auth/controllers.js";


const authRouter = express.Router()

// Public routes
authRouter.post("/register" , registerUser)

export default authRouter;
