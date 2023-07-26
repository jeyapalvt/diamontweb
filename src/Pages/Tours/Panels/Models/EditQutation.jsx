import React from "react";
import { reduxForm, Field } from "redux-form";
import {
  TextField,
  DateField,
  SelectField,
} from "../../../../Components/ReduxField";

const EditQutation = (props) => {
  const { qutationId, onCloseModal } = props;
  const servicetype = [
    { value: "completepackate", label: "Complete Package" },
    { value: "extraservice", label: "Extra Service" },
    { value: "FlightOnly", label: "Flight Only" },
    { value: "hotelservice", label: "Hotel Service" },
    { value: "Land Part", label: "Land Part" },
    { value: "Transfer Only", label: "Transfer only" },
  ];
  const destinations = [
    { value: "dubai", label: "Dubai" },
    { value: "adbudahabi", label: "Abu Dhabi" },
    { value: "Sigapore", label: "Singapore" },
  ];
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-2/3 max-w-3xl mx-auto my-6">
          {/*content*/}
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
              <h3 className="text-3xl font-semibold">Edit Qutation</h3>
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
              <Field
                name="qutationtitle"
                label="Qutation Title"
                component={TextField}
              />
              <div className="flex space-x-5">
                <div className="w-full">
                  <Field name="adult" label="Adult" component={TextField} />{" "}
                </div>
                <div className="w-full">
                  <Field name="child" label="Child" component={TextField} />{" "}
                </div>
                <div className="w-full">
                  <Field name="infant" label="Infant" component={TextField} />{" "}
                </div>
              </div>
              <div className="flex space-x-5 justify-stretch">
                <div className="w-full">
                  <Field
                    className="w-full"
                    name="sDate"
                    label="Travel Start Date"
                    component={DateField}
                  />{" "}
                </div>
                <div className="w-full">
                  <Field
                    name="eDate"
                    label="Travel End Date"
                    component={DateField}
                  />{" "}
                </div>
                <div className="w-full">
                  <Field
                    name="totalNight"
                    label="Total Night"
                    component={TextField}
                  />{" "}
                </div>
              </div>
              <div className="flex space-x-5 justify-stretch">
                <div className="w-full">
                  <Field
                    name="serviceType"
                    label="Service Type"
                    options={servicetype}
                    isSearchable={true}
                    component={SelectField}
                    onChange={(value) => {
                      // Handle the onChange event here
                      console.log("Selected value:", value);
                      // You can perform any necessary actions or update the Redux Form's field value
                    }}
                  />
                </div>
                <div className="w-full">
                  <Field
                    name="destination"
                    label="Destination"
                    options={destinations}
                    isSearchable={true}
                    isMultiple={true}
                    component={SelectField}
                    onChange={(value) => {
                      // Handle the onChange event here
                      console.log("Selected value:", value);
                      // You can perform any necessary actions or update the Redux Form's field value
                    }}
                  />{" "}
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
  form: "EditQutation",
})(EditQutation);
