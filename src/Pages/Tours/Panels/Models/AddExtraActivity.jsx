import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  TextField,
  SelectField,
  DateField,
} from "../../../../Components/ReduxField";
const AddExtraActivity = (props) => {
  const { qutationId, onCloseModal } = props;
  const destinations = [
    { value: "dubai", label: "Dubai" },
    { value: "adbudahabi", label: "Abu Dhabi" },
    { value: "Sigapore", label: "Singapore" },
  ];
  const actType = [
    { value: "sic", label: "SIC" },
    { value: "pvt", label: "PVT" },
    { value: "no", label: "No Transfer" },
  ];
  const currency = [
    { value: "INR", label: "INR" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "AED", label: "AED" },
  ];
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-4/12 max-w-3xl mx-auto my-6">
          {/*content*/}
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
              <h3 className="text-3xl font-semibold">Add Extra Activity</h3>
              <button
                className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                onClick={onCloseModal}
              >
                <span className="block w-6 h-6 text-2xl text-black bg-white outline-none opacity-5 focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative flex-auto p-6">
              <div>
                <div>
                  <Field
                    name="multiDate"
                    label="Multiple Date"
                    component={DateField}
                  />
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <Field
                      name="activityname"
                      label="Activity Name"
                      component={TextField}
                    />
                  </div>
                  <div>
                    <Field
                      name="destination"
                      label="Destination"
                      options={destinations}
                      isSearchable={true}
                      // isMultiple={true}
                      component={SelectField}
                      onChange={(value) => {
                        // Handle the onChange event here
                        console.log("Selected value:", value);
                        // You can perform any necessary actions or update the Redux Form's field value
                      }}
                    />
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <Field
                      name="activitytype"
                      label="Activity Type"
                      options={actType}
                      // isSearchable={true}
                      // isMultiple={true}
                      component={SelectField}
                      onChange={(value) => {
                        // Handle the onChange event here
                        console.log("Selected value:", value);
                        // You can perform any necessary actions or update the Redux Form's field value
                      }}
                    />
                  </div>
                  <div>
                    <Field
                      name="currency"
                      label="Currency"
                      options={currency}
                      //isSearchable={true}
                      // isMultiple={true}
                      component={SelectField}
                      onChange={(value) => {
                        // Handle the onChange event here
                        console.log("Selected value:", value);
                        // You can perform any necessary actions or update the Redux Form's field value
                      }}
                    />
                  </div>
                </div>
                <div class="grid grid-cols-3 gap-4">
                  <div>
                    <Field
                      name="noOfAdult"
                      label="No Of Adult"
                      component={TextField}
                    />
                  </div>
                  <div>
                    <Field
                      name="adultcost"
                      label="Adult Cost"
                      component={TextField}
                    />
                  </div>
                  <div>
                    <Field
                      name="adultmarkup"
                      label="Adult Markup"
                      component={TextField}
                    />
                  </div>
                </div>
                <div class="grid grid-cols-3 gap-4">
                  <div>
                    <Field
                      name="noOfChild"
                      label="No Of Child"
                      component={TextField}
                    />
                  </div>
                  <div>
                    <Field
                      name="childcost"
                      label="Child Cost"
                      component={TextField}
                    />
                  </div>
                  <div>
                    <Field
                      name="childtmarkup"
                      label="Child Markup"
                      component={TextField}
                    />
                  </div>
                </div>
                <div className="p-1 mt-5 text-sm text-white bg-blue-600">
                  Car On Disposible
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <Field
                      name="vechileCost"
                      label="Vehicle Cost"
                      component={TextField}
                    />
                  </div>
                  <div>
                    <Field
                      name="VehicleMarkup"
                      label="Vehicle Markup"
                      component={TextField}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
              <button
                className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                type="button"
                onClick={onCloseModal}
              >
                Close
              </button>
              <button
                className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                type="button"
                onClick={onCloseModal}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </div>
  );
};

export default reduxForm({
  form: "AddExtraActivity",
})(AddExtraActivity);
