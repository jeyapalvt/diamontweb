import React, { useEffect } from "react";
import { Field } from "redux-form";
import { DateField, SelectField } from "../../../../Components/ReduxField";
const DestinationListArr = ({ fields }) => {
  useEffect(() => {
    fields.push();
  }, []);
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
            label="From Date"
            component={DateField}
          />{" "}
          <Field
            name={`${item}.toDate`}
            label="To Date"
            component={DateField}
          />
          <button
            className="px-2 py-1 mt-10 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
            type="button"
            onClick={() => handleAdd()}
          >
            Add More
          </button>
          {index === fields.length - 1 && (
            <button
              className="px-2 py-1 mt-10 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded shadow outline-none active:bg-red-600 hover:shadow-lg focus:outline-none"
              type="button"
              onClick={() => handleRemove(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}
    </>
  );
};

export default DestinationListArr;
