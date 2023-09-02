// CheckBox.js
import React from "react";

const CheckBox = ({ id, label, checked, onChange }) => {
  return (
    <div className="flex items-center ">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        defaultValue
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
        htmlFor={id}
        className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
