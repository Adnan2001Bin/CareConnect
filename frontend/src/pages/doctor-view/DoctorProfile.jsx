import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFilterDoctors } from "@/store/Paitent/patient-slice";

const DoctorProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth); // Get the logged-in user
  const { doctorList, loading } = useSelector((state) => state.paitentViewDoctor); // Get the list of doctors

  // Fetch all doctors when the component mounts
  useEffect(() => {
    dispatch(fetchAllFilterDoctors({}));
  }, [dispatch]);

  const loggedInDoctor = doctorList.find((doctor) => doctor.id === user?.id);

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-xl font-semibold text-gray-600 animate-pulse">
          Loading Profile...
        </div>
      </div>
    );
  }

  // If no matching doctor is found or user is not logged in
  if (!user || !loggedInDoctor) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-xl font-semibold text-red-600">
          No doctor profile found for the logged-in user.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-10 animate-fade-in">
          Doctor Profile
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:shadow-xl duration-300">
          {/* Doctor Image */}
          <div className="flex justify-center mb-6">
            <img
              src={loggedInDoctor.image || "https://via.placeholder.com/150"} // Fallback image
              alt={loggedInDoctor.name}
              className="w-40 h-40 rounded-full object-cover border-4 border-blue-200 shadow-md transform transition-transform hover:scale-105 duration-300"
            />
          </div>

          {/* Doctor Name and Speciality */}
          <h2 className="text-3xl font-semibold text-gray-900 text-center">
            Dr. {loggedInDoctor.name}
          </h2>
          <p className="text-lg text-blue-600 text-center mb-6">
            {loggedInDoctor.speciality}
          </p>

          {/* Doctor Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-28 font-medium text-gray-700">Email:</span>
              <span className="text-gray-900">{loggedInDoctor.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-28 font-medium text-gray-700">Experience:</span>
              <span className="text-gray-900">{loggedInDoctor.experience} years</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-28 font-medium text-gray-700">Fees:</span>
              <span className="text-gray-900">${loggedInDoctor.fees}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-28 font-medium text-gray-700">About:</span>
              <span className="text-gray-900 flex-1">{loggedInDoctor.aboutDoctor}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-28 font-medium text-gray-700">Degree:</span>
              <span className="text-gray-900">{loggedInDoctor.degree}</span>
            </div>
          </div>

          {/* Edit Profile Button */}
          <div className="mt-8 text-center">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;

