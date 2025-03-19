import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorAppointments } from "../../store/Paitent/patient-slice/bookingDoctor";
import Loader from "../../components/Loader/Loader";
import axios from "axios";

const DoctorAppointments = () => {
  const dispatch = useDispatch();
  const { doctorAppointments, isLoading, error } = useSelector((state) => state.appointments);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user && user.role === "doctor") {
      axios
        .get(`${import.meta.env.VITE_API_BASE_URL}/api/admin/doctors/get`)
        .then((response) => {
          const doctor = response.data.data.find((d) => d.email === user.email);
          if (doctor) {
            console.log("Doctor ID from AddDoctor:", doctor._id);
            dispatch(fetchDoctorAppointments(doctor._id));
          }
        })
        .catch((error) => console.error("Error fetching doctor ID:", error));
    }
  }, [dispatch, user]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-md">
          <p className="font-semibold">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
          My Appointments
        </h1>
        
        {doctorAppointments.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No appointments scheduled yet.</p>
            <p className="text-gray-400 mt-2">Appointments will appear here when booked.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <tr>
                  <th className="py-3 px-6 text-left rounded-tl-lg">Patient Name</th>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 text-left">Date</th>
                  <th className="py-3 px-6 text-left">Time</th>
                  <th className="py-3 px-6 text-left rounded-tr-lg">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {doctorAppointments.map((appointment) => (
                  <tr 
                    key={appointment._id} 
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="py-4 px-6">
                      <span className="font-medium text-gray-800">
                        {appointment.userId.userName}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      {appointment.userId.email}
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-700">
                        {new Date(appointment.date).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                        {appointment.time}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span 
                        className={`inline-flex px-2.5 py-1 rounded-full text-sm font-medium ${
                          appointment.status === 'Confirmed' 
                            ? 'bg-green-100 text-green-800'
                            : appointment.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorAppointments;