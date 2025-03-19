import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProductImageUpload from "@/components/admin-view/Image-Upload";
import CommonForm from "@/components/common/form";
import { addFormElements } from "@/Config";
import {
  addNewDoctor,
  editDoctor,
  fetchAlldoctors,
} from "@/store/Admin/Doctor-Slice";
import { toast } from "react-toastify";

const initialFormData = {
  image: null,
  name: "",
  email: "",
  password: "",
  experience: "1",
  fees: 0,
  aboutDoctor: "",
  speciality: "Gynecologist",
  degree: "",
};

const AddDoctor = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  const dispatch = useDispatch();

  // Fetch editDoctorData from localStorage and set form state
  useEffect(() => {
    const storedDoctorData = JSON.parse(localStorage.getItem("editDoctorData"));
    console.log("storedDoctorData", storedDoctorData);

    if (storedDoctorData) {
      setFormData({
        image: storedDoctorData.image,
        name: storedDoctorData.name,
        email: storedDoctorData.email,
        password: storedDoctorData.password,
        experience: storedDoctorData.experience,
        fees: storedDoctorData.fees,
        aboutDoctor: storedDoctorData.aboutDoctor,
        speciality: storedDoctorData.speciality,
        degree: storedDoctorData.degree,
      });
      setUploadedImageUrl(storedDoctorData.image);
      setCurrentEditedId(storedDoctorData._id);
      localStorage.removeItem("editDoctorData");
    } else {
      setFormData(initialFormData);
      setUploadedImageUrl("");
      setCurrentEditedId(null);
    }
    setIsLoading(false); // Set loading to false after setting the form data
  }, []);

  const handleSuccessToast = () => {
    toast.success("Doctor added successfully", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const handleSuccessToastForUpdate = () => {
    toast.success("Doctor's Data Update successfully", {
      position: "top-center",
      autoClose: 1000,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (currentEditedId) {
      dispatch(editDoctor({ id: currentEditedId, formData })).then((data) => {
        if (data?.payload?.success) {
          dispatch(fetchAlldoctors());
          setFormData(initialFormData);
          setCurrentEditedId(null);
          handleSuccessToastForUpdate();
        }
      });
    } else {
      dispatch(
        addNewDoctor({
          ...formData,
          image: uploadedImageUrl,
        })
      ).then((data) => {
        if (data?.payload?.success) {
          dispatch(fetchAlldoctors());
          setImageFile(null);
          setFormData(initialFormData);
          handleSuccessToast();
        }
      });
    }
  };

  console.log("Updated formData:", formData); // Debugging

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading spinner or message
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {currentEditedId ? "Edit Doctor" : "Add New Doctor"}
        </h1>

        {/* Image Upload Section */}
        <div className="">
          <div className="w-full flex item-center justify-center mb-5">
            <ProductImageUpload
              imageFile={imageFile}
              setImageFile={setImageFile}
              imageLoadingState={imageLoadingState}
              uploadedImageUrl={uploadedImageUrl}
              setUploadedImageUrl={setUploadedImageUrl}
              setImageLoadingState={setImageLoadingState}
              isEditMode={currentEditedId !== null} // Enable edit mode if currentEditedId exists
              isCustomStyling={true}
            />
          </div>
          <h1 className="w-full text-center">Upload doctor picture</h1>
        </div>

        {/* Form Section */}
        <div className="flex w-full justify-center">
          <CommonForm
            onSubmit={onSubmit}
            formData={formData}
            setFormData={setFormData}
            buttonText={currentEditedId ? "Update" : "Add"}
            formControls={addFormElements}
            formClassName="space-y-4 w-full md:w-3/4 mt-8"
            inputClassName="text-black rounded-sm bg-white outline-slate-400"
            textareaClassName="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 border-slate-400 border-2"
            selectClassName="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-400 border-slate-400 border-2"
            buttonClassName="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold"
            labelClassName="block text-sm font-medium text-gray-700 mb-2"
          />
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
