import React from "react";

const TextArea = ({
  input,
  type,
  id,
  placeholder,
  label,
  onChange,
  defaultValue,
  min,
  value,
  name,
  disabled,
  spanTxt,
  meta: { asyncValidating, touched, error },
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor="small-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
          {<span className="text-esm">{spanTxt}</span>}
          {touched && error && (
            <span className="error text-danger">{error}</span>
          )}
        </label>
      )}
      <textarea
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        id={id}
        name={name}
        min={min}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

export default TextArea;
