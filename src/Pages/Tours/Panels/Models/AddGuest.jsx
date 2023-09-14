import React from "react";
import { reduxForm, Field } from "redux-form";
import {
  DateField,
  SelectField,
  TextField,
} from "../../../../Components/ReduxField";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../../../Components";
import { addguestList } from "../../../../Reducers/guestSlice";
const AddGuest = (props) => {
  const dispatch = useDispatch();
  const { qutationId, onCloseModal, handleSubmit } = props;
  const guestQuery = useSelector((state) => state.guestQuery.guestList);
  const salutatonOpt = [
    { value: "NA", label: "NA" },
    { value: "Mr", label: "Mr" },
    { value: "Mrs", label: "Mrs" },
    { value: "Miss", label: "Miss" },
  ];
  const genderOpt = [
    { value: "Male", label: "Male" },
    { value: "Fmale", label: "Fmale" },
    { value: "Others", label: "Others" },
  ];
  console.log("iabxiabixabxa", guestQuery);
  const handledeGuestAdd = (values) => {
    console.log(values);
    dispatch(addguestList(values));
  };
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-10/12 mx-auto my-6">
          {/*content*/}
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
              <h3 className="text-3xl font-semibold">Add Guest</h3>
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
                <div class="flex space-x-1">
                  <div className="w-1/12">
                    <Field
                      name="salutation"
                      label="Salutation"
                      options={salutatonOpt}
                      component={SelectField}
                    />
                  </div>
                  <div>
                    <Field
                      name="firstName"
                      label="First Name"
                      component={TextField}
                    />
                  </div>
                  <div>
                    <Field
                      name="lastName"
                      label="Last Name"
                      component={TextField}
                    />
                  </div>
                  <div>
                    <Field
                      name="eMail"
                      type="email"
                      label=" Email"
                      component={TextField}
                    />
                  </div>
                  <div className="w-1/12">
                    <Field name="code" label="Code" component={TextField} />
                  </div>
                  <div>
                    <Field
                      name="phone"
                      type="number"
                      label="Phone"
                      component={TextField}
                    />
                  </div>
                  <div className="w-1/12">
                    <Field
                      name="gender"
                      label="Gender"
                      options={genderOpt}
                      component={SelectField}
                    />
                  </div>
                  <div>
                    <Field
                      name="passportNo"
                      label="Passport No"
                      component={TextField}
                    />
                  </div>
                  <div>
                    <Field
                      name="natinality"
                      label="Nationality"
                      component={TextField}
                    />
                  </div>
                  <div className="mt-6">
                    <Button
                      name="Add"
                      onClick={handleSubmit((values) =>
                        handledeGuestAdd({
                          ...values,
                        })
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <table className="w-full border border-collapse table-auto">
                  <thead className="text-sm font-bold text-white bg-slate-700">
                    <tr>
                      <th className="w-2/12 p-2 border">Name</th>
                      <th className="w-2/12 p-2 border">Email</th>
                      <th className="w-2/12 p-2 border">Phone</th>
                      <th className="w-1/12 p-2 border">Gender</th>
                      <th className="w-1/12 p-2 border">Lead Passenger</th>
                      <th className="w-1/12 p-2 border"></th>
                    </tr>
                  </thead>
                  <tbody className="text-md">
                    {guestQuery?.map((item, index) => (
                      <tr key={index}>{index}</tr>
                    ))}
                  </tbody>
                </table>
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
  form: "AddGuest",
})(AddGuest);
