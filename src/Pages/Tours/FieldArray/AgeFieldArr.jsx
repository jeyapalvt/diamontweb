import React from "react";
import { Field, change } from "redux-form";
import { TextField } from "../../../Components/ReduxField";
const AgeFieldArr = (props) => {
  const { fields, numFields, fieldName, setFieldValue, label } = props;

  return (
    <div className="px-5">
      <div className="flex space-x-2">
        {Array.from({ length: numFields }).map((_, index) => (
          <div key={index}>
            <Field
              label={`${label} ${index + 1}`}
              name={`${fields.name}.${index}.${fieldName}`} // Update the name to include index and fieldName
              component={TextField}
              // onChange={(e) => handleChange(index, e)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgeFieldArr;
