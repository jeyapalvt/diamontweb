import React, { useEffect, useState } from "react";
import { Field } from "redux-form";
import {
  DateField,
  TextField,
  SelectField,
} from "../../../Components/ReduxField";
const DestinationFieldArr = ({ fields }) => {
  useEffect(() => {
    fields.push();
  }, []);
  const [formData, setFormData] = useState({
    fromDate: "",
    toDate: "",
  });

  useEffect(() => {}, [formData]);

  const handleFromDateChange = (index, selectedDate) => {
    // Update the formData with the selected "fromDate"
    setFormData((prevData) => ({
      ...prevData,
      [index]: { fromDate: selectedDate, toDate: prevData[index]?.toDate },
    }));
  };

  const handleToDateChange = (index, selectedDate) => {
    // Update the formData with the selected "toDate"
    setFormData((prevData) => ({
      ...prevData,
      [index]: { fromDate: prevData[index]?.fromDate, toDate: selectedDate },
    }));
  };

  // const handleFromDateChange = (index, selectedDate) => {
  //   const newFormData = [...formData]; // Clone the formData array
  //   newFormData[index] = {
  //     ...newFormData[index],
  //     fromDate: selectedDate,
  //     toDate: selectedDate, // Reset toDate to match fromDate
  //   };
  //   setFormData(newFormData);
  // };

  const destinations = [
    { value: "dubai", label: "Dubai" },
    { value: "adbudahabi", label: "Abu Dhabi" },
    { value: "Sigapore", label: "Singapore" },
  ];
  const handleAdd = () => {
    fields.push();
  };
  const handleRemove = (index) => {
    fields.remove(index);
  };
  return (
    <>
      {fields.map((item, index) => (
        <div className="flex items-center space-x-2" key={index}>
          <Field
            name={`${item}.destination`}
            label="Destination"
            options={destinations}
            isSearchable={true}
            component={SelectField}
          />{" "}
          <Field
            name={`${item}.fromDate`}
            label="Start Date"
            minDate={new Date()}
            component={DateField}
            onChange={(selectedDate) =>
              handleFromDateChange(index, selectedDate)
            }
          />{" "}
          <Field
            name={`${item}.toDate`}
            label="End Date"
            minDate={formData[index]?.fromDate}
            component={DateField}
            onChange={(selectedDate) => handleToDateChange(index, selectedDate)}
          />
          <button
            className="px-2 py-1 mt-10 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded shadow outline-none active:bg-red-600 hover:shadow-lg focus:outline-none"
            type="button"
            onClick={() => handleRemove(index)}
          >
            Remove
          </button>
          {index === fields.length - 1 && (
            <button
              className="px-2 py-1 mt-10 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
              type="button"
              onClick={() => handleAdd()}
            >
              Add More
            </button>
          )}
        </div>
      ))}
    </>
  );
};

export default DestinationFieldArr;
