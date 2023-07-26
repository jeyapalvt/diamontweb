import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DateField = ({
  input,
  placeholder,
  minDate,
  maxDate,
  label,
  icon,
  holydays,
  meta: { touched, error },
}) => {
  const CustomeInputField = ({ date, value, onChange, onClick }) => (
    <div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onClick={onClick}
      />
      <span className="input-group-addon">
        <span className="glyphicon glyphicon-calendar" />
      </span>
    </div>
  );

  return (
    <div>
      {label && (
        <label
          htmlFor="small-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}{" "}
          {touched && error && (
            <span className="error text-danger">{error}</span>
          )}
        </label>
      )}
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={input.value || null}
        onChange={input.onChange}
        minDate={minDate}
        maxDate={maxDate}
        excludeDates={holydays}
        disabledKeyboardNavigation
        placeholderText={placeholder}
        customInput={<CustomeInputField />}
        multiple // Enable multiple date selection
        showPopperArrow={false} // Hide the popper arrow to fit multiple dates
      />
      <div className="err-msg">{touched && error && <span>{error}</span>}</div>
    </div>
  );
};

export default DateField;
