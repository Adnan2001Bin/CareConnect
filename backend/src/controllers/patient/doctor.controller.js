import { AddDoctor } from "../../models/addDoctors.js";

export const getFilterDoctors = async (req, res) => {
  try {
    const { speciality } = req.query;
    let filters = {};
    if (speciality) {
      filters.speciality = speciality;
    }
    const doctors = await AddDoctor.find(filters);
    res.status(200).json({
      success: true,
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};

export const getDoctorDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const doctor = await AddDoctor.findById(id);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found!",
      });
    }

    res.status(200).json({
      success: true,
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};