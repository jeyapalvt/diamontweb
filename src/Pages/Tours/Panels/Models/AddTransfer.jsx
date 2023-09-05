import React, { useEffect } from "react";
import { reduxForm, Field } from "redux-form";
import {
  TextField,
  SelectField,
  DateField,
} from "../../../../Components/ReduxField";
import { Button } from "../../../../Components";
import { useDispatch, useSelector } from "react-redux";
import { editTransferManual } from "../../../../Reducers/updateMainQuery";
import {
  addtransferManual,
  updatetransferManual,
} from "../../../../Reducers/mainQuerySlice";
import { useParams } from "react-router-dom";
const AddTransfer = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { handleSubmit, qutationId, onCloseModal, datesBetween } = props;
  const initialDate = useSelector((state) => state.allModelState.date);
  const initialTransferlManual = useSelector(
    (state) => state.updateMQuery.transferManual
  );

  const initialTransUpdateManual = useSelector(
    (state) => state.mainQuery.transferManul
  );
  const destinations = [
    { value: "dubai", label: "Dubai" },
    { value: "adbudahabi", label: "Abu Dhabi" },
    { value: "Sigapore", label: "Singapore" },
  ];
  const transType = [
    { value: "sic", label: "SIC" },
    { value: "pvt", label: "PVT" },

    { value: "tktonly", label: "Ticket Only" },
  ];

  useEffect(() => {
    props.initialize({
      checkInDate: new Date(initialDate),
    });
  }, []);
  const sumbitForm = (values) => {
    const submitObjects = [];
    const newsubmitObjects = [];
    const tempsubmitObject = [];
    if (initialTransferlManual) {
      for (let i = 0; i < initialTransUpdateManual.length; i++) {
        if (initialTransferlManual.id == i) {
          for (let j = 0; j < initialTransUpdateManual[i].length; j++) {
            tempsubmitObject.push({
              quoteTransferId: "",
              quotationId: id,
              dayItenary: "",
              addedType: 2, // 1 - Manual,  2 - From LIst
              transferListId: "",
              transferName: values.transferName,
              currencyCode: values.currencyCode,
              destination: values.destination,
              supplierId: values.supplierId,
              supplierName: "",
              checkInDate: values.checkInDate,
              type: values.type,
              adultCost: values.adultCost,
              childCost: values.childCost,
              infantCost: values.infantCost,
            });
          }
          newsubmitObjects.push(tempsubmitObject);
        } else {
          newsubmitObjects.push(initialTransUpdateManual[i]);
        }
      }

      console.log("final obect", newsubmitObjects);
      dispatch(editTransferManual(null));
      dispatch(updatetransferManual(newsubmitObjects));
    } else {
      // submitObjects.push(values);

      const tempObject = {
        quoteTransferId: "",
        quotationId: id,
        dayItenary: "",
        addedType: 2, // 1 - Manual,  2 - From LIst
        transferListId: "",
        transferName: values.transferName,
        currencyCode: values.currencyCode,
        destination: values.destination,
        supplierId: values.supplierId,
        supplierName: "",
        checkInDate: values.checkInDate,
        type: values.type,
        adultCost: values.adultCost,
        childCost: values.childCost,
        infantCost: values.infantCost,
      };
      submitObjects.push(tempObject);
      dispatch(addtransferManual(submitObjects));
    }

    onCloseModal();
  };
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-8/12 mx-auto my-6">
          {/*content*/}
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
              <h3 className="text-3xl font-semibold">Add Transfer</h3>
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
              <div className="relative flex-auto p-6">
                <div className="flex justify-between">
                  <div>
                    <Field
                      name="destination"
                      label="Destination"
                      options={destinations}
                      isSearchable={true}
                      // isMultiple={true}
                      component={SelectField}
                    />
                  </div>
                  <div>
                    <Field
                      name="checkInDate"
                      label="Date"
                      component={DateField}
                    />
                  </div>{" "}
                  <div>
                    <Field
                      name="sightSheeing"
                      label="Sightseeing Type"
                      options={transType}
                      //isSearchable={true}
                      // isMultiple={true}
                      component={SelectField}
                    />
                  </div>{" "}
                  <div>
                    <Field
                      name="Transfer"
                      label="Transfer"
                      component={TextField}
                    />
                  </div>{" "}
                  <div className="mt-6">
                    <Button name="Search" />
                  </div>
                </div>
                <div className="mt-5">
                  <table className="w-full border border-collapse table-auto">
                    <thead className="text-sm font-bold text-gray-800 bg-slate-300">
                      <tr>
                        <th className="w-2/12 p-2 border">Transfer</th>
                        <th className="w-2/12 p-2 border">Type</th>
                        <th className="w-2/12 p-2 border">CUR</th>
                        <th className="w-2/12 p-2 border">ADULT</th>
                        <th className="w-2/12 p-2 border">CHILD</th>
                        <th className="w-2/12 p-2 border">INFANT</th>
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
                onClick={handleSubmit((values) =>
                  sumbitForm({
                    ...values,
                  })
                )}
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
  form: "AddTransfer",
})(AddTransfer);
