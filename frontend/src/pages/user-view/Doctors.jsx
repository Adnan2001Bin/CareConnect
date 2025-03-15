import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFilterDoctors } from "@/store/Paitent/patient-slice";
import DoctorCard from "@/components/user-view/DoctorCard";
import Filters from "@/components/user-view/Filters";

const Doctors = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({});
  const { doctorList, loading } = useSelector(
    (state) => state.paitentViewDoctor
  );

  const handleFilter = (getSectionId, getCurrentOption) => {
    // Create the new filters object
    const newFilters = { speciality: getCurrentOption };

    // Save the selected filter to sessionStorage
    sessionStorage.setItem("selectedFilter", JSON.stringify(newFilters));

    // Update the state with the new filters
    setFilters(newFilters);

    // Dispatch the action to fetch filtered doctors
    dispatch(fetchAllFilterDoctors({ filterParams: newFilters }));
  };

  useEffect(() => {
    // Check if a filter is stored in sessionStorage
    const storedFilter = sessionStorage.getItem("selectedFilter");

    if (storedFilter) {
      // Parse the stored filter
      const parsedFilter = JSON.parse(storedFilter);

      // Update the state with the stored filter
      setFilters(parsedFilter);

      // Dispatch the action to fetch doctors based on the stored filter
      dispatch(fetchAllFilterDoctors({ filterParams: parsedFilter }));
    } else {
      // If no filter is stored, fetch all doctors
      dispatch(fetchAllFilterDoctors({ filterParams: {} }));
    }
  }, [dispatch]);

  return (
    <div>
      {/* Header Section */}
      <div className="text-center mb-5 mt-5 animate-slideDown">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Our Expert Doctors
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet our team of highly qualified medical professionals ready to
          provide you with the best care.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[250px_1fr] lg:grid-cols-[280px_1fr] gap-6 bg-gray-100 py-12 px-4 sm:px-6 lg:px-14">
        <div>
          <Filters filters={filters} handleFilter={handleFilter} />
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          </div>
        )}

        {/* Doctors Grid */}
        {!loading && doctorList && (
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctorList.map((doctor, index) => (
              <div key={doctor.id} className={`animation-delay-${index * 100}`}>
                <DoctorCard doctor={doctor} />
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && doctorList?.length === 0 && (
          <div className="text-center py-12 animate-fadeIn">
            <p className="text-gray-600 text-lg">
              No doctors found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;