// ./pages/admin-view/AdminDashboard.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlldoctors } from "@/store/Admin/Doctor-Slice";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { doctorList, isLoading } = useSelector((state) => state.adminSlice);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchAlldoctors());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, {user?.userName || "Admin"}
        </h1>
        <p className="text-gray-600 mt-1">
          Manage doctors, appointments, and system settings from here.
        </p>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Doctors Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700">Total Doctors</h2>
          <p className="text-4xl font-bold text-blue-600 mt-2">{doctorList.length}</p>
          <p className="text-gray-500 mt-1">Registered doctors in the system</p>
          <Link to="/admin/doctorList">
            <button className="mt-4 text-blue-500 hover:text-blue-700 font-medium">
              View All
            </button>
          </Link>
        </div>

        {/* Total Appointments Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700">Total Appointments</h2>
          <p className="text-4xl font-bold text-green-600 mt-2">42</p> {/* Placeholder */}
          <p className="text-gray-500 mt-1">Appointments scheduled this month</p>
          <Link to="/admin/appointments">
            <button className="mt-4 text-blue-500 hover:text-blue-700 font-medium">
              View Details
            </button>
          </Link>
        </div>

        {/* Pending Actions Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700">Pending Actions</h2>
          <p className="text-4xl font-bold text-yellow-600 mt-2">3</p> {/* Placeholder */}
          <p className="text-gray-500 mt-1">Actions requiring your attention</p>
          <button className="mt-4 text-blue-500 hover:text-blue-700 font-medium">
            Review Now
          </button>
        </div>
      </div>

      {/* Recent Doctors Section */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recently Added Doctors</h2>
        {doctorList.length === 0 ? (
          <p className="text-gray-500">No doctors added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {doctorList.slice(0, 3).map((doctor) => (
              <div
                key={doctor._id}
                className="flex items-center p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-300"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="text-lg font-medium text-gray-800">{doctor.name}</p>
                  <p className="text-sm text-gray-500">{doctor.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <Link to="/admin/addDoctor">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
            Add New Doctor
          </button>
        </Link>
        <Link to="/admin/appointments">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300">
            Manage Appointments
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;