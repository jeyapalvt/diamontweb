import React from "react";
import { reduxForm, Field } from "redux-form";
import {
  DateField,
  SelectField,
  TextField,
} from "../../../../Components/ReduxField";
import { Button } from "../../../../Components";
const AddHotel = (props) => {
  const { qutationId, onCloseModal } = props;
  const destinations = [
    { value: "dubai", label: "Dubai" },
    { value: "adbudahabi", label: "Abu Dhabi" },
    { value: "Sigapore", label: "Singapore" },
  ];
  const catList = [
    { value: "All", label: "All" },
    { value: "1star", label: "1 Star" },
    { value: "2star", label: "2 Star" },
    { value: "3star", label: "3 Star" },
    { value: "4star", label: "4 Star" },
    { value: "5star", label: "5 Star" },
    { value: "6star", label: "6 Star" },
    { value: "7star", label: "7 Star" },
  ];
  const location = [
    { value: "dubai", label: "Dubai" },
    { value: "Bazzar", label: "Bazzar" },
  ];
  const mealplan = [
    { value: "All", label: "All" },
    { value: "AP", label: "AP" },
    { value: "Break Fast", label: "Break Fast" },
  ];
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-10/12 mx-auto my-6">
          {/*content*/}
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
              <h3 className="text-3xl font-semibold">Add Hotel</h3>
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
                <div class="grid grid-cols-8 gap-4">
                  <div>
                    <Field
                      name="destination"
                      label="Destinatioon"
                      options={destinations}
                      component={SelectField}
                    />
                  </div>
                  <div>
                    <Field
                      name="StarCat"
                      label="Star Cat"
                      options={catList}
                      component={SelectField}
                    />
                  </div>
                  <div>
                    <Field
                      name="location"
                      label="Location"
                      options={location}
                      component={SelectField}
                    />
                  </div>
                  <div>
                    <Field
                      name="mealplan"
                      label="Meal Plan"
                      options={mealplan}
                      component={SelectField}
                    />
                  </div>
                  <div>
                    <Field
                      name="cOut"
                      label="Check Out"
                      component={DateField}
                    />
                  </div>
                  <div>
                    <Field name="cIn" label="Check In" component={DateField} />
                  </div>
                  <div>
                    <Field name="hotel" label="Hotel" component={TextField} />
                  </div>
                  <div className="mt-6">
                    <Button name="Search" />
                  </div>
                </div>
                <div class="grid grid-cols-8 gap-4">
                  <div>
                    <Field
                      name="sglroom"
                      label="SGL Room"
                      component={TextField}
                    />
                  </div>
                  <div>
                    <Field
                      name="dblroom"
                      label="DBL Room"
                      component={TextField}
                    />
                  </div>
                  <div>
                    <Field
                      name="trplroom"
                      label="TRPL Room"
                      component={TextField}
                    />
                  </div>
                  <div>
                    <Field
                      name="cwbroom"
                      label="CWB Room"
                      component={TextField}
                    />
                  </div>
                  <div>
                    <Field
                      name="cnbroom"
                      label="CNB Room"
                      component={TextField}
                    />
                  </div>
                  <div>
                    <Field
                      name="cnb2room"
                      label="CNB Room"
                      component={TextField}
                    />
                  </div>
                  <div>
                    <Field
                      name="infroom"
                      label="INF Room"
                      component={TextField}
                    />
                  </div>
                  <div className="mt-6"></div>
                </div>
                <div className="mt-5">
                  <table className="w-full border border-collapse table-auto">
                    <thead className="text-sm font-bold text-gray-800 bg-slate-300">
                      <tr>
                        <th className="w-1/12 p-2 border">Hotel</th>
                        <th className="w-1/12 p-2 border">Location</th>
                        <th className="w-2/12 p-2 border">Room Type</th>
                        <th className="w-1/12 p-2 border">Meal Type</th>
                        <th className="w-0.5/12 p-2 border">CUR</th>
                        <th className="w-0.5/12 p-2 border">SGL</th>
                        <th className="w-0.5/12 p-2 border">DBL</th>
                        <th className="w-0.5/12 p-2 border">TRPL</th>
                        <th className="w-0.5/12 p-2 border">CWB</th>
                        <th className="w-2/12 p-2 border">
                          CNB<span className="text-esm">(AB 05 yr)</span>
                        </th>
                        <th className="w-2/12 p-2 border">
                          CNB<span className="text-esm">(BL 05 yr)</span>
                        </th>
                        <th className="w-2/12 p-2 border">
                          INFANT<span className="text-esm">(BL 03 yr)</span>
                        </th>
                        <th className="w-2/12 p-2 border"></th>
                      </tr>
                    </thead>
                    <tbody className="text-md">
                      <tr></tr>
                    </tbody>
                  </table>
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
  form: "AddHotel",
})(AddHotel);
