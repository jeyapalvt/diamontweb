import React, { useState } from "react";
import { reduxForm, Field } from "redux-form";
import {
  TextField,
  SelectField,
  DateField,
} from "../../../../Components/ReduxField";
const AddVisa = (props) => {
  const { qutationId, onCloseModal } = props;
  const [childCost, setchildCost] = useState(0);
  const [adultCost, setadultCost] = useState(0);
  const visatype = [
    { value: "Thailand E Visa", label: "Thailand E Visa" },
    { value: "Dubai Single Visa", label: "Dubai Single Visa" },
  ];
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-8/12 mx-auto my-6">
          {/*content*/}
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
              <h3 className="text-3xl font-semibold">Add Visa</h3>
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
                <div className="items-center text-center">
                  <table class="table-auto w-full border border-collapse">
                    <thead>
                      <tr className="font-thin text-white bg-gray-700">
                        <th className="w-1/12 p-2 border">Visa</th>
                        <th className="w-1/12 p-2 border">Currency</th>
                        <th className="w-1/12 p-2 border">Adult</th>
                        <th className="w-1/12 p-2 border">Adult Cost</th>
                        <th className="w-1/12 p-2 border">Child</th>
                        <th className="w-1/12 p-2 border">Child Cost</th>
                        <th className="w-1/12 p-2 border"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="w-1/12 p-2 ">
                          <Field
                            name="visatype"
                            options={visatype}
                            //isSearchable={true}
                            // isMultiple={true}
                            component={SelectField}
                          />
                        </td>
                        <td className="w-1/12 p-2 "></td>
                        <td className="w-1/12 p-2 ">
                          <Field name="Adult" component={TextField} />
                        </td>
                        <td className="w-1/12 p-2 ">{adultCost}</td>
                        <td className="w-1/12 p-2 ">
                          <Field name="Adult" component={TextField} />
                        </td>
                        <td className="w-1/12 p-2 ">{childCost}</td>
                        <td className="w-1/12 p-2 "></td>
                      </tr>
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
  form: "AddVisa",
})(AddVisa);
