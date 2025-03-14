import { AddDoctor } from "../../models/addDoctors.js";

export const getFilterDoctors = async (req, res) => {
  try {
    const { speciality = [] } = req.query;

    let filters = {};

    if (speciality.length) {
      filters.category = { $in: category.split(",") };
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
      message: "Some error occured",
    });
  }
};
