import React from "react";
import { reduxForm, Field } from "redux-form";
import {
  TextField,
  SelectField,
  DateField,
} from "../../../../Components/ReduxField";
const AddManualHotel = (props) => {
  const { handleSubmit, qutationId, onCloseModal } = props;
  const destinations = [
    { value: "dubai", label: "Dubai" },
    { value: "adbudahabi", label: "Abu Dhabi" },
    { value: "Sigapore", label: "Singapore" },
  ];
  const supplier = [
    { value: "hotelbed", label: "Hotel Bed" },
    { value: "hotelduke", label: "Hotel Duke" },
  ];
  const catogery = [
    { value: "all", label: "All" },
    { value: "1star", label: "1 star" },
    { value: "2star", label: "2 star" },
    { value: "3star", label: "3 star" },
    { value: "4star", label: "4 star" },
    { value: "5star", label: "5 star" },
    { value: "6star", label: "6 star" },
    { value: "7star", label: "7 star" },
  ];

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-2/3 max-w-3xl mx-auto my-6">
          {/*content*/}
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
              <h3 className="text-3xl font-semibold">Add Manual Hotel</h3>
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
                    name="hotelName"
                    label="Hotel Name"
                    component={TextField}
                  />
                </div>
                <div class="grid grid-cols-4 gap-4">
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
                    />{" "}
                  </div>{" "}
                  <div>
                    <Field
                      name="supplier"
                      label="Supplier"
                      options={supplier}
                      //isSearchable={true}
                      // isMultiple={true}
                      component={SelectField}
                    />
                  </div>{" "}
                  <div>
                    <Field name="cOut" label="Check In" component={DateField} />
                  </div>{" "}
                  <div>
                    <Field name="cIn" label="Check Out" component={DateField} />
                  </div>
                </div>
                <div class="grid grid-cols-4 gap-4">
                  <div>
                    <Field
                      name="catogery"
                      label="Catogery"
                      options={catogery}
                      //isSearchable={true}
                      // isMultiple={true}
                      component={SelectField}
                    />
                  </div>{" "}
                  <div>
                    <Field
                      name="roomType"
                      label="Room Type"
                      component={TextField}
                    />
                  </div>{" "}
                  <div>
                    <Field
                      name="mealplan"
                      label="Meal Plan"
                      component={TextField}
                    />
                  </div>{" "}
                  <div>
                    <Field name="sgl" label="SGL" component={TextField} />
                  </div>
                </div>
                <div class="grid grid-cols-4 gap-4">
                  <div>
                    <Field name="dbl" label="DBL" component={TextField} />
                  </div>{" "}
                  <div>
                    <Field name="trpl" label="TRBL" component={TextField} />
                  </div>{" "}
                  <div>
                    <Field name="cwb" label="CWB" component={TextField} />
                  </div>{" "}
                  <div>
                    <Field
                      name="cnb"
                      label="CNB"
                      spanTxt="(Above 05 yrs)"
                      component={TextField}
                    />
                  </div>
                </div>
                <div class="grid grid-cols-4 gap-4">
                  <div>
                    <Field
                      name="cnb1"
                      label="CNB"
                      spanTxt="(Below 05 yrs)"
                      component={TextField}
                    />
                  </div>{" "}
                  <div>
                    <Field
                      name="inf"
                      label="INF"
                      spanTxt="(Below 03 yrs)"
                      component={TextField}
                    />
                  </div>{" "}
                  <div></div> <div></div>
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
  form: "AddManualHotel",
})(AddManualHotel);
