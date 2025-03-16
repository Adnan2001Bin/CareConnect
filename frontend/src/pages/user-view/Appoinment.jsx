import { fetchDoctorDetails } from "@/store/Paitent/patient-slice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Appoinment = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { doctorDetails, isLoading } = useSelector(
    (state) => state.paitentViewDoctor
  );

  // State to track the selected slot
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    dispatch(fetchDoctorDetails(id));
  }, [dispatch, id]);

 

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!doctorDetails) {
    return <div className="text-center text-red-500 text-xl mt-10">Doctor not found!</div>;
  }

  // Sample booking slots
  const bookingSlots = [
    { day: "SUN", date: 16, time: "10:00 am" },
    { day: "MON", date: 17, time: "11:00 am" },
    { day: "TUE", date: 18, time: "12:00 pm" },
    { day: "WED", date: 19, time: "12:30 pm" },
    { day: "THU", date: 20, time: "01:00 pm" },
    { day: "FRI", date: 21, time: "01:30 pm" },
    { day: "SAT", date: 22, time: "02:00 pm" },
  ];

  // Fallback image in case doctorDetails.image fails
  const fallbackImage = "https://via.placeholder.com/160x160.png?text=Doctor+Image";

  return (
    <div className="p-8 min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Doctor Image with Fallback */}
          <img
            src={doctorDetails.image || fallbackImage}
            alt={doctorDetails.name || "Doctor"}
            className="w-40 h-40 rounded-lg object-cover border-4 border-blue-500"
            onError={(e) => {
              e.target.src = fallbackImage; // Replace with fallback if image fails to load
              console.log("Image failed to load, using fallback");
            }}
          />

          {/* Doctor Details */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-blue-600">
              Dr. {doctorDetails.name || "N/A"}
            </h2>
            <p className="text-gray-600 text-lg">
              {doctorDetails.speciality || "N/A"}
            </p>
            <div className="space-y-2 mt-4 text-gray-700">
              <p>
                <span className="font-medium">Degree:</span>{" "}
                {doctorDetails.degree || "N/A"}
              </p>
              <p>
                <span className="font-medium">Experience:</span>{" "}
                {doctorDetails.experience || "N/A"}
              </p>
              <p>
                <span className="font-medium">About:</span>{" "}
                {doctorDetails.aboutDoctor || "N/A"}
              </p>
              <p>
                <span className="font-medium">Fees:</span> $
                {doctorDetails.fees || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Booking Slots Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Booking Slots</h3>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {bookingSlots.map((slot, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-4 rounded-lg cursor-pointer ${
                  selectedSlot === index
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setSelectedSlot(index)} // Set the selected slot on click
              >
                <span className="text-sm font-medium">{slot.day}</span>
                <span className="text-lg font-bold">{slot.date}</span>
                <span className="text-sm">{slot.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Book Appointment Button */}
        <button
          className="mt-6 w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition-colors"
          onClick={() => {
            if (selectedSlot !== null) {
              alert(
                `Appointment booked for ${bookingSlots[selectedSlot].day}, ${bookingSlots[selectedSlot].date} at ${bookingSlots[selectedSlot].time}`
              );
            } else {
              alert("Please select a slot to book an appointment!");
            }
          }}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Appoinment;