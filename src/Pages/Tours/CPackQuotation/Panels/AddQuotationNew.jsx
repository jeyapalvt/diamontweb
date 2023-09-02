import React from "react";
import { Field, reduxForm, FieldArray } from "redux-form";
import {
  TextField,
  DateField,
  SelectField,
} from "../../../../Components/ReduxField";
import DestinationListArr from "./DestinationListArr";
import axios from "axios";
import { BaseUrl } from "../../../../Reducers/Api";
const AddQuotationNew = (props) => {
  const {
    qutationId,
    onCloseModal,
    handleSubmit,
    pristine,
    submitting,
    reset,
  } = props;
  const servicetype = [
    { value: "1", label: "Complete Package" },
    { value: "2", label: "Extra Service" },
    { value: "3", label: "Flight Only" },
    { value: "4", label: "Hotel Only" },
    { value: "5", label: "Land Part" },
    { value: "6", label: "Transfer only" },
    { value: "7", label: "Visa only" },
  ];

  const sumbitForm = async (values) => {
    await axios
      .post(BaseUrl + "setTemplateQuotation", values)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
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
                  name="quoteTitle"
                  label="Qutation Title"
                  component={TextField}
                />
                <div className="flex space-x-5">
                  <div className="w-full">
                    <Field
                      name="nofAdult"
                      label="Adult"
                      component={TextField}
                    />{" "}
                  </div>
                  <div className="w-full">
                    <Field
                      name="nofChild"
                      label="Child"
                      component={TextField}
                    />{" "}
                  </div>
                  <div className="w-full">
                    <Field
                      name="nofInfant"
                      label="Infant"
                      component={TextField}
                    />{" "}
                  </div>
                  <div className="w-full">
                    <Field
                      name="serviceType"
                      label="Service Type"
                      options={servicetype}
                      isSearchable={true}
                      component={SelectField}
                      onChange={(value) => {
                        console.log("Selected value:", value);
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-col space-x-5">
                  <FieldArray
                    name="destinationlist"
                    component={DestinationListArr}
                  />
                </div>
                <div className="flex space-x-5 justify-stretch">
                  <div className="w-full">
                    <Field
                      name="sglRoom"
                      label="SGL Room"
                      component={TextField}
                    />{" "}
                  </div>
                  <div className="w-full">
                    <Field
                      name="dblRoom"
                      label="DBl Room"
                      component={TextField}
                    />{" "}
                  </div>
                  <div className="w-full">
                    <Field
                      name="trplRoom"
                      label="TRPL Room"
                      component={TextField}
                    />{" "}
                  </div>
                  <div className="w-full">
                    <Field
                      name="quadRoom"
                      label="Quad Room"
                      component={TextField}
                    />{" "}
                  </div>
                </div>
                <div className="flex space-x-5 justify-stretch">
                  <div className="w-full">
                    <Field
                      name="cwbRoom"
                      label="CWB Room"
                      component={TextField}
                    />{" "}
                  </div>
                  <div className="w-full">
                    <Field
                      name="cnbRoomAbove05"
                      label="CNB Room "
                      spanTxt="(Below 5 yrs)"
                      component={TextField}
                    />{" "}
                  </div>
                  <div className="w-full">
                    <Field
                      name="cnbRoomBelow05"
                      label="CNB Room"
                      spanTxt="(Above 5 yrs)"
                      component={TextField}
                    />{" "}
                  </div>
                  <div className="w-full">
                    <Field
                      name="infRoom"
                      label="CNB Room"
                      component={TextField}
                    />{" "}
                  </div>
                </div>
                <div className="flex space-x-5 justify-stretch">
                  <div className="w-full"></div>
                  <div className="w-full">
                    {/* <Field
                    name="destination"
                    label="Destination"
                    options={destinations}
                    isSearchable={true}
                    isMultiple={true}
                    component={SelectField}
                    onChange={(value) => {
                     
                      console.log("Selected value:", value);
                      
                    }}
                  />{" "} */}
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
                  onClick={handleSubmit((values) =>
                    sumbitForm({
                      ...values,
                    })
                  )}
                  // onClick={onCloseModal}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "AddQuotationNew",
})(AddQuotationNew);
