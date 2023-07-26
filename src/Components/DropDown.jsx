import React from "react";

const DropDown = ({
  type,
  id,
  placeholder,
  label,
  onChange,
  defaultValue,
  min,
  value,
  name,
  options,
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor="small-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id={id}
        name={name}
        onChange={onChange}
      >
        {options?.map((item, index) => (
          <option value={item.value}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
