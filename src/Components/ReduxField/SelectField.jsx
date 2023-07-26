import React from "react";
import Select from "react-tailwindcss-select";
const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#f9fafb",
    // Overwrittes the different states of border
    borderColor: state.isFocused ? "#3482F6" : "#3482F6",
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#3482F6" : "#3482F6",
    },
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    height: "28px",
    padding: "0 6px",
  }),
  input: (provided, state) => ({
    ...provided,
    margin: "0px",
  }),
  indicatorSeparator: (state) => ({
    display: "none",
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: "30px",
  }),
};
const SelectField = ({
  input,
  isDisabled,
  options,
  label,
  id,
  isSearchable,
  placeholder,
  isMultiple,
  name,
  meta: { asyncValidating, touched, error },
}) => {
  const handleChange = (selectedValue) => {
    const newValue = isMultiple
      ? selectedValue.map((option) => option.value)
      : selectedValue
      ? selectedValue.value
      : null;
    input.onChange(newValue); // Call Redux Form's onChange with the new value
  };

  const selectedOption = isMultiple
    ? options.filter((option) => input.value.includes(option.value))
    : options.find((option) => option.value === input.value);

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
        theme={(theme) => ({
          ...theme,
          borderRadius: 8,
          colors: {
            ...theme.colors,
            primary25: "",
            primary: "#3482F6",
          },
        })}
        styles={customStyles}
        //className="selectpicker"
        {...input}
        value={selectedOption}
        onChange={handleChange}
        onBlur={() => input.onBlur(input.value)}
        options={options}
        isDisabled={isDisabled}
        id={id}
        name={name}
        isMultiple={isMultiple} // Use "isMulti" instead of "isMultiple"
        placeholder={placeholder}
        isSearchable={isSearchable}
      />
    </div>
  );
};
export default SelectField;
