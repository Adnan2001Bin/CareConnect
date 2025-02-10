import { deleteDoctor, fetchAlldoctors } from '@/store/Admin/Doctor-Slice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { toast } from 'react-toastify';
import { Edit, Trash } from 'lucide-react'; // Import icons from Lucide React

const AdminDoctorTile = ({ doctor }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  

  const handleEdit = () => {
    localStorage.setItem("editDoctorData", JSON.stringify(doctor));
    navigate('/admin/addDoctor');
  };

  const handleSuccessToast = () => {
    toast.success('Doctor deleted successfully', {
      position: 'top-center',
    });
  };

  const handleDeleteDoctor = (getCurrentDoctorId) => {
    dispatch(deleteDoctor(getCurrentDoctorId)).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAlldoctors());
        handleSuccessToast();
      } else {
        console.log('ERROR');
      }
    });
  };

  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 rounded-lg">
      <div className="relative group">
        {/* Doctor Image */}
        <img
          src={doctor?.image}
          alt={doctor?.name}
          className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay for Edit and Delete Buttons */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end justify-end p-3">
          <div className="flex gap-2">
            <Button
              onClick={handleEdit}
              className="bg-white text-gray-800 hover:bg-gray-100 p-2 rounded-full shadow-md"
              size="sm"
            >
              <Edit className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => handleDeleteDoctor(doctor?._id)}
              className="bg-white text-red-600 hover:bg-gray-100 p-2 rounded-full shadow-md"
              size="sm"
            >
              <Trash className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Doctor Details */}
      <CardContent className="p-4 bg-gradient-to-r from-blue-100 to-blue-400">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{doctor?.name}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{doctor?.aboutDoctor}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-gray-500">Experience: {doctor?.experience} years</span>
          <span className="text-sm text-gray-500">Fees: ${doctor?.fees}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminDoctorTile;