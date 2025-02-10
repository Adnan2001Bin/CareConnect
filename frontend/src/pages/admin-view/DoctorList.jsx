import AdminDoctorTile from '@/components/admin-view/AdminDoctorTile';
import { fetchAlldoctors } from '@/store/Admin/Doctor-Slice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const DoctorList = () => {
  const { doctorList } = useSelector((state) => state.adminSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlldoctors());
  }, [dispatch]);
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {doctorList && doctorList.length > 0 ? (
        doctorList.map((doctor) => (
          <AdminDoctorTile key={doctor._id} doctor={doctor} />
        ))
      ) : (
        <p>No Doctor Added</p>
      )}
    </div>
  )
}

export default DoctorList
