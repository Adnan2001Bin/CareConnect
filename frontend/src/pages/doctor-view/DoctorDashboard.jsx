// ./pages/doctor-view/DoctorDashboard.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorAppointments } from "../../store/Paitent/patient-slice/bookingDoctor";
import Loader from "../../components/Loader/Loader";

const DoctorDashboard = () => {
  const dispatch = useDispatch();
  const { user, isLoading: authLoading } = useSelector((state) => state.auth);
  const { doctorAppointments, isLoading: appointmentsLoading } = useSelector((state) => state.appointments);

  useEffect(() => {
    if (user && user.role === "doctor" && user.id) {
      dispatch(fetchDoctorAppointments(user.id));
    }
  }, [dispatch, user]);

  if (authLoading || appointmentsLoading) {
    return <Loader />;
  }

  // Calculate today's appointments
  const today = new Date().toISOString().split("T")[0];
  const todayAppointments = doctorAppointments.filter(
    (appt) => new Date(appt.date).toISOString().split("T")[0] === today
  );
  const pendingAppointments = doctorAppointments.filter((appt) => appt.status === "Pending");
  const totalPatients = new Set(doctorAppointments.map((appt) => appt.userId._id)).size;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, Dr. {user?.userName || "Doctor"}
        </h1>
        <p className="text-gray-600 mt-1">
          Your dashboard to manage appointments and patient care.
        </p>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Appointment Summary Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700">Appointments Today</h2>
          <p className="text-4xl font-bold text-blue-600 mt-2">{todayAppointments.length}</p>
          <p className="text-gray-500 mt-1">Total scheduled for {new Date().toLocaleDateString()}</p>
          <button className="mt-4 text-blue-500 hover:text-blue-700 font-medium">
            View Details
          </button>
        </div>

        {/* Pending Appointments Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700">Pending Approvals</h2>
          <p className="text-4xl font-bold text-yellow-600 mt-2">{pendingAppointments.length}</p>
          <p className="text-gray-500 mt-1">Appointments awaiting confirmation</p>
          <button className="mt-4 text-blue-500 hover:text-blue-700 font-medium">
            Review Now
          </button>
        </div>

        {/* Total Patients Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-gray-700">Total Patients</h2>
          <p className="text-4xl font-bold text-green-600 mt-2">{totalPatients}</p>
          <p className="text-gray-500 mt-1">Patients under your care</p>
          <button className="mt-4 text-blue-500 hover:text-blue-700 font-medium">
            See List
          </button>
        </div>
      </div>

      {/* Upcoming Appointments Section */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Upcoming Appointments</h2>
        {doctorAppointments.length === 0 ? (
          <p className="text-gray-500">No upcoming appointments.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {doctorAppointments.slice(0, 5).map((appointment) => ( // Show only first 5
                  <tr key={appointment._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {appointment.userId.userName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(appointment.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {appointment.time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`${
                          appointment.status === "Pending"
                            ? "text-yellow-600"
                            : "text-green-600"
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

      {/* Quick Actions */}
      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
          View All Appointments
        </button>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default DoctorDashboard;