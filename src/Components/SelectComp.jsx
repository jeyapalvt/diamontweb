import React from "react";
import Select from "react-tailwindcss-select";

const SelectComp = ({
  value,
  onChange,
  options,
  label,
  id,
  isSearchable,
  placeholder,
  isMultiple,
  name,
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}

      <Select
        id={id}
        name={name}
        isMultiple={isMultiple}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        options={options}
        isSearchable={isSearchable}
        className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

export default SelectComp;
