import React, { Fragment } from "react";
import { Label } from "../ui/label";
import { filterOptions } from "@/Config";
import { useSearchParams } from "react-router-dom";

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSpeciality = searchParams.get("speciality");

  const handleFilterClick = (keyItem, optionId) => {
    setSearchParams({ speciality: optionId });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 max-w-[250px] border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Filter by Specialty
      </h3>
      <div className="space-y-3">
        {Object.keys(filterOptions).map((keyItem) => (
          <Fragment key={keyItem}>
            <div className="space-y-2">
              {filterOptions[keyItem].map((option) => (
                <Label
                  key={option.id}
                  onClick={() => handleFilterClick(keyItem, option.id)}
                  className={`flex items-center gap-3 p-3 rounded-lg text-sm font-medium text-gray-700 cursor-pointer transition-all duration-300 ease-in-out 
                    ${
                      selectedSpeciality === option.id
                        ? "bg-blue-100 text-blue-800 border-l-4 border-blue-500 shadow-md"
                        : "hover:bg-gray-50 hover:text-blue-600"
                    }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      selectedSpeciality === option.id
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    }`}
                  ></span>
                  {option.label}
                </Label>
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Filters;