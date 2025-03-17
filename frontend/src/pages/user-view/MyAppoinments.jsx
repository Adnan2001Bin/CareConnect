import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppointments } from "@/store/Paitent/patient-slice/bookingDoctor";

const MyAppointments = () => {
  const dispatch = useDispatch();
  const { appointments, isLoading } = useSelector(
    (state) => state.appointments
  );
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user?._id) {
      dispatch(fetchAppointments(user._id));
    }
  }, [dispatch, user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">My Appointments</h1>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div
              key={appointment._id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={appointment.doctorId.image}
                  alt={appointment.doctorId.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold">
                    Dr. {appointment.doctorId.name}
                  </h2>
                  <p className="text-gray-600">
                    {appointment.doctorId.speciality}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p>
                  <span className="font-medium">Date:</span>{" "}
                  {new Date(appointment.date).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-medium">Time:</span> {appointment.time}
                </p>
                <p>
                  <span className="font-medium">Status:</span> {appointment.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAppointments;