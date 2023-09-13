import React from "react";

const InputComp = ({
  type,
  id,
  placeholder,
  label,
  onChange,
  defaultValue,
  min,
  value,
  name,
  width,
}) => {
  return (
    <div>
      <div>
        {label && (
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {label}
          </label>
        )}

        <input
          type={type}
          id={id}
          name={name}
          min={min}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          defaultValue={defaultValue}
          className={`${
            width ? width : "w-full"
          } block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        />
      </div>
    </div>
  );
};

export default InputComp;
