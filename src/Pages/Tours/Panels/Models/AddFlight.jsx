import React, { useState } from "react";
import { reduxForm, Field } from "redux-form";
import {
  TextField,
  SelectField,
  DateField,
  TextArea,
} from "../../../../Components/ReduxField";
const AddFlight = (props) => {
  const { qutationId, onCloseModal } = props;
  const [tripType, settripType] = useState();
  const transfer = [
    { value: "1", label: "One Way" },
    { value: "2", label: "Round Trip" },
  ];
  const supplier = [
    { value: "1", label: "Hotel Bed" },
    { value: "2", label: "Hotel Duke" },
  ];
  const deoDes = [
    { value: "1", label: "Pattaya" },
    { value: "2", label: "Bangkok" },
    { value: "3", label: "phuket" },
  ];
  const flight = [
    { value: "1", label: "Air India" },
    { value: "2", label: "Visthara" },
    { value: "3", label: "Indigo" },
    { value: "4", label: "Air Aisia" },
    { value: "5", label: "Kingfisher" },
  ];
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-7/12 mx-auto my-6">
          {/*content*/}
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
              <h3 className="text-3xl font-semibold">Flight</h3>
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
            <div className="relative flex-auto p-6 overflow-y-auto max-h-80vh">
              <div>
                <div class="grid grid-cols-3 gap-4">
                  <div>
                    <Field
                      name="tripType"
                      label="Trip Type"
                      options={transfer}
                      // isSearchable={true}
                      // isMultiple={true}
                      component={SelectField}
                      onChange={(value) => {
                        // Handle the onChange event here
                        settripType(value);
                        // You can perform any necessary actions or update the Redux Form's field value
                      }}
                    />
                  </div>
                  <div>
                    <Field
                      name="supplier"
                      label="Supplier"
                      options={supplier}
                      isSearchable={true}
                      component={SelectField}
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <div className="p-1 font-bold text-center text-white bg-gray-600">
                      One Way Flight
                    </div>
                  </div>

                  <div class="grid grid-cols-4 gap-4">
                    <div>
                      <Field
                        name="depatureDes"
                        label="Departure Destination"
                        options={deoDes}
                        isSearchable={true}
                        // isMultiple={true}
                        component={SelectField}
                      />
                    </div>
                    <div>
                      <Field
                        name="ArvDes"
                        label="Arrival Destination"
                        options={deoDes}
                        isSearchable={true}
                        component={SelectField}
                      />
                    </div>
                    <div>
                      <Field name="tdate" label="Date" component={DateField} />
                    </div>
                    <div>
                      <Field
                        name="flight"
                        label="FLight"
                        options={flight}
                        isSearchable={true}
                        component={SelectField}
                      />
                    </div>
                  </div>
                  <div class="grid grid-cols-4 gap-4">
                    <div>
                      <Field
                        name="fc"
                        label="Flight Code"
                        component={TextField}
                      />
                    </div>
                    <div>
                      <Field
                        name="Dt"
                        label="Departure Time"
                        component={TextField}
                      />
                    </div>
                    <div>
                      <Field
                        name="at"
                        label="Arrival Time"
                        component={TextField}
                      />
                    </div>
                    <div>
                      <Field
                        name="fd"
                        label="Flight Duration"
                        component={TextField}
                      />
                    </div>
                  </div>
                  <div class="grid grid-cols-4 gap-4">
                    <div>
                      <Field
                        name="ac"
                        label="Adult Cost"
                        component={TextField}
                      />
                    </div>
                    <div>
                      <Field
                        name="cc"
                        label="Child Cost"
                        component={TextField}
                      />
                    </div>
                    <div className="col-span-2">
                      <Field name="rmark" label="Remark" component={TextArea} />
                    </div>
                  </div>
                </div>
                {tripType === "2" && (
                  <div>
                    <div className="mt-2">
                      <div className="p-1 font-bold text-center text-white bg-gray-600">
                        One Way Flight
                      </div>
                    </div>

                    <div class="grid grid-cols-4 gap-4">
                      <div>
                        <Field
                          name="depatureDes"
                          label="Departure Destination"
                          options={deoDes}
                          isSearchable={true}
                          // isMultiple={true}
                          component={SelectField}
                        />
                      </div>
                      <div>
                        <Field
                          name="ArvDes"
                          label="Arrival Destination"
                          options={deoDes}
                          isSearchable={true}
                          component={SelectField}
                        />
                      </div>
                      <div>
                        <Field
                          name="tdate"
                          label="Date"
                          component={DateField}
                        />
                      </div>
                      <div>
                        <Field
                          name="flight"
                          label="FLight"
                          options={flight}
                          isSearchable={true}
                          component={SelectField}
                        />
                      </div>
                    </div>
                    <div class="grid grid-cols-4 gap-4">
                      <div>
                        <Field
                          name="fc"
                          label="Flight Code"
                          component={TextField}
                        />
                      </div>
                      <div>
                        <Field
                          name="Dt"
                          label="Departure Time"
                          component={TextField}
                        />
                      </div>
                      <div>
                        <Field
                          name="at"
                          label="Arrival Time"
                          component={TextField}
                        />
                      </div>
                      <div>
                        <Field
                          name="fd"
                          label="Flight Duration"
                          component={TextField}
                        />
                      </div>
                    </div>
                    <div class="grid grid-cols-4 gap-4">
                      <div>
                        <Field
                          name="ac"
                          label="Adult Cost"
                          component={TextField}
                        />
                      </div>
                      <div>
                        <Field
                          name="cc"
                          label="Child Cost"
                          component={TextField}
                        />
                      </div>
                      <div className="col-span-2">
                        <Field
                          name="rmark"
                          label="Remark"
                          component={TextArea}
                        />
                      </div>
                    </div>
                  </div>
                )}
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
  form: "AddFlight",
})(AddFlight);
