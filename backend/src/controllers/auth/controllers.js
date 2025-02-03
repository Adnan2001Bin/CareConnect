import jwt from "jsonwebtoken";
import { User } from "../../models/user.model.js";
import bcrypt from "bcryptjs";
import transporter from "../../config/nodemailer.js";
import ms from "ms"
// Utility: Create JWT
const createToken = (user) => {
  const { _id, role, email, userName } = user;

  return jwt.sign(
    { id: _id, role, email, userName },
    process.env.JWT_TOKEN_SECRET || "default_secret",
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "1h" }
  );
};

// Utility: Validate Request Body
const validateFields = (fields, body) => {
  for (const field of fields) {
    if (!body[field]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }
};

// Utility: Send Email
const sendEmail = async (options) => {
  try {
    await transporter.sendMail(options);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

// Register User
export const registerUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    validateFields(["userName", "email", "password"], req.body);

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email. Please log in.",
      });
    }

    // Hash password and create user
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ userName, email, password: hashPassword });
    await newUser.save();

    // Generate token
    const token = createToken(newUser);
    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: ms(process.env.ACCESS_TOKEN_EXPIRY || "1h"),
    });
    // Send welcome email
    await sendEmail({
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Welcome to AB-TECH",
      text: `Welcome to AB-TECH! Your account has been created with email: ${email}`,
    });

    res.status(201).json({
      success: true,
      message: "Registration successful",
      token,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({
      success: false,
      message: error.message || "An error occurred while registering the user.",
    });
  }
};
