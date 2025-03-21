import { specialityData } from '@/Config';
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SpeialityMenu = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSpecialityClick = (speciality) => {
    // Navigate to the Doctors page with the selected specialty as a query parameter
    navigate(`/doctorslist?speciality=${speciality}`);
  };

  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of specialities to find the right doctor for you.
      </p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {specialityData.map((item, index) => (
          <div
            className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'
            key={index}
            onClick={() => handleSpecialityClick(item.speciality)} // Handle click
          >
            <img className='w-16 sm:w-24 mb-2' src={item.image} alt={item.speciality} />
            <p>{item.speciality}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeialityMenu;