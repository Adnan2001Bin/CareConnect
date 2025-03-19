// ./pages/doctor-view/DoctorAppointments.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorAppointments } from "../../store/Paitent/patient-slice/bookingDoctor";
import Loader from "../../components/Loader/Loader";
import axios from "axios";
import './DoctorAppointments.css'

const DoctorAppointments = () => {
  const dispatch = useDispatch();
  const { doctorAppointments, isLoading, error } = useSelector((state) => state.appointments);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user && user.role === "doctor") {
      // Fetch the doctor's AddDoctor ID based on email
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
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Appointments</h1>
      {doctorAppointments.length === 0 ? (
        <p className="text-gray-500">No appointments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b">Patient Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Time</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {doctorAppointments.map((appointment) => (
                <tr key={appointment._id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{appointment.userId.userName}</td>
                  <td className="py-2 px-4 border-b">{appointment.userId.email}</td>
                  <td className="py-2 px-4 border-b">
                    {new Date(appointment.date).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 border-b">{appointment.time}</td>
                  <td className="py-2 px-4 border-b">{appointment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DoctorAppointments;