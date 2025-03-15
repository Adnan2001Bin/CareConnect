// components/DoctorCard.jsx
import { specialityOptionsMap } from "@/Config";
import React from "react";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm mx-auto border border-gray-200 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-bounceIn">
      {/* Doctor Image Section */}
      <div className="relative group">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-70 object-cover rounded-t-xl transition-opacity duration-300 group-hover:opacity-90"
        />
        {/* Overlay with availability */}
        <div className="absolute bottom-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center transform transition-transform duration-300 animate-scaleIn group-hover:scale-110">
          <span className="mr-1 animate-pulse">✔</span> Available
        </div>
      </div>

      {/* Doctor Information */}
      <div className="p-4 bg-blue-50 rounded-b-xl transition-all duration-300 group-hover:bg-blue-100">
        <h3 className="text-xl font-bold text-gray-800 transform transition-transform duration-300 group-hover:scale-105">
          Dr. {doctor.name}
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          {specialityOptionsMap[doctor?.speciality]}
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;