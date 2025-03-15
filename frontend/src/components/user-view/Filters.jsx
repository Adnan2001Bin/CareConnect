import React, { Fragment, useState, useEffect } from "react";
import { Label } from "../ui/label";
import { filterOptions } from "@/Config";

const Filters = ({ filters, handleFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  // Retrieve the selected filter from sessionStorage when the component mounts
  useEffect(() => {
    const storedFilter = sessionStorage.getItem("selectedFilter");
    if (storedFilter) {
      setSelectedFilter(JSON.parse(storedFilter));
    }
  }, []);

  const handleFilterClick = (keyItem, optionId) => {
    const newFilter = { keyItem, optionId };
    setSelectedFilter(newFilter);
    handleFilter(keyItem, optionId);

    // Save the selected filter to sessionStorage
    sessionStorage.setItem("selectedFilter", JSON.stringify(newFilter));
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
                      selectedFilter?.keyItem === keyItem &&
                      selectedFilter?.optionId === option.id
                        ? "bg-blue-100 text-blue-800 border-l-4 border-blue-500 shadow-md"
                        : "hover:bg-gray-50 hover:text-blue-600"
                    }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      selectedFilter?.keyItem === keyItem &&
                      selectedFilter?.optionId === option.id
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