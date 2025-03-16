import { imageUploadUtil } from "../../helpers/cloudinary.js";
import { AddDoctor } from "../../models/addDoctors.js";
import { User } from "../../models/user.model.js"
import bcrypt from "bcryptjs";


export const handleImageUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded.",
      });
    }

    const result = await imageUploadUtil(req.file.buffer, req.file.mimetype);

    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Add a new Doctor
export const addDoctor = async (req, res) => {
  try {
    const {
      image,
      name,
      email,
      password,
      experience,
      fees,
      aboutDoctor,
      speciality,
      degree,
    } = req.body;

    // Validate required fields
    const missingFields = [];
    if (!name) missingFields.push("name");
    if (!email) missingFields.push("email");
    if (!password) missingFields.push("password");
    if (!experience) missingFields.push("experience");
    if (!fees) missingFields.push("fees");
    if (!aboutDoctor) missingFields.push("aboutDoctor");
    if (!speciality) missingFields.push("speciality");
    if (!degree) missingFields.push("degree");

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    const hashPassword = await bcrypt.hash(password, 12);
    const addNewDoctor = new AddDoctor({
      image,
      name,
      email,
      password,
      experience,
      fees,
      aboutDoctor,
      speciality,
      degree,
    });

    await addNewDoctor.save();

    // Save the doctor's credentials in the User collection
    const newUser = new User({
      userName: name,
      email,
      password:hashPassword,
      role: "doctor",
    })

    await newUser.save();

    res.status(201).json({
      success: true,
      data: addNewDoctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Fetch all doctors
export const fetchAllDoctors = async (req, res) => {
  try {
    const doctors = await AddDoctor.find({});
    res.status(200).json({
      success: true,
      data: doctors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const editDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    const updates = req.body;

    const doctor = await AddDoctor.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: doctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Delete a doctor
export const deleteDoctor = async (req, res) => {
    try {
      const { id } = req.params;
  
      const doctor = await AddDoctor.findByIdAndDelete(id);
  
      if (!doctor) {
        return res.status(404).json({
          success: false,
          message: "Doctor not found.",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Doctor Information deleted successfully.",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
  