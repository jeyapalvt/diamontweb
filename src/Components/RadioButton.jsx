import React from "react";

const RadioButton = ({ name, label, id, onChange, value, txtColor }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        id={id}
        type="radio"
        value={value}
        onChange={onChange}
        name={name}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={id}
        className={`ml-2 text-sm font-medium dark:text-gray-300 ${
          txtColor ? "text-white" : "text-gray-900"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
