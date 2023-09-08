import React, { useEffect, useState } from "react";
import {
  TextField,
  SelectField,
  DateField,
} from "../../../../Components/ReduxField";
import { reduxForm, Field } from "redux-form";
import {
  addtransferManual,
  updatetransferManual,
} from "../../../../Reducers/mainQuerySlice";
import { editTransferManual } from "../../../../Reducers/updateMainQuery";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
const EditTransfer = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { handleSubmit, qutationId, onCloseModal, dateRange } = props;
  const initialDate = useSelector((state) => state.allModelState.date);
  const initialTransferlManual = useSelector(
    (state) => state.updateMQuery.transferManual
  );
  console.log("initial date manual", initialDate);
  const initialTransUpdateManual = useSelector(
    (state) => state.mainQuery.transferManul
  );
  const destinations = [
    { value: "dubai", label: "Dubai" },
    { value: "adbudahabi", label: "Abu Dhabi" },
    { value: "Sigapore", label: "Singapore" },
  ];
  const supplier = [
    { value: "1", label: "Hotel Bed" },
    { value: "2", label: "Hotel Duke" },
  ];
  const bookType = [
    { value: "SIC", label: "SIC" },
    { value: "PVT", label: "PVT" },
  ];
  const currency = [
    { value: "AED", label: "AED" },
    { value: "INR", label: "INR" },
    { value: "EUR", label: "EUR" },
  ];
  const [slectedBookType, setslectedBookType] = useState(bookType[0].value);

  useEffect(() => {
    if (initialTransferlManual) {
      props.initialize({
        quoteTransferId: initialTransferlManual.quoteTransferId,
        quotationId: initialTransferlManual.quotationId,
        dayItenary: initialTransferlManual.dayItenary,
        addedType: initialTransferlManual.addedType, // 1 - Manual,  2 - From LIst
        transferListId: initialTransferlManual.transferListId,
        transferName: initialTransferlManual.transferName,
        currencyCode: initialTransferlManual.currencyCode,
        destination: initialTransferlManual.destination,
        supplierId: initialTransferlManual.supplierId,
        supplierName: "",
        checkInDate: initialTransferlManual.checkInDate,
        type: initialTransferlManual.type,
        adultCost: initialTransferlManual.adultCost,
        childCost: initialTransferlManual.childCost,
        infantCost: initialTransferlManual.infantCost,
      });
      setslectedBookType(initialTransferlManual.type);
    } else {
      // props.initialize({
      //   type: slectedBookType,
      //   checkInDate: new Date(initialDate),
      // });
    }
  }, []);

  const getDatesBetweenRange = (startDate, endDate) => {
    const dates = [];
    const currentDate = new Date(startDate);

    while (currentDate <= new Date(endDate)) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };
  const dateRange1 = dateRange;

  const from = dateRange1[0].fromDate;
  const nthRow = dateRange1.length - 1; // Replace with the desired row index
  let to = "";
  if (dateRange1[nthRow]) {
    to = dateRange1[nthRow].toDate;
  } else {
    to = dateRange1[0].toDate;
  }

  const datesBetween = getDatesBetweenRange(from, to);

  const sumbitForm = (values) => {
    const submitObjects = [];
    const newsubmitObjects = [];
    const tempsubmitObject = [];
    if (initialTransferlManual) {
      for (let i = 0; i < initialTransUpdateManual.length; i++) {
        if (initialTransferlManual.id == i) {
          for (let j = 0; j < initialTransUpdateManual[i].length; j++) {
            console.log("condition true");
            console.log(",,,ka0ixja9jxj", initialTransUpdateManual[i][j]);
            tempsubmitObject.push({
              quoteTransferId: "",
              quotationId: id,
              dayItenary: "",
              addedType: initialTransferlManual.addedType, // 1 - Manual,  2 - From LIst
              transferListId: "",
              transferName: initialTransferlManual.transferName,
              currencyCode: initialTransferlManual.currencyCode,
              destination: initialTransferlManual.destination,
              supplierId: initialTransferlManual.supplierId,
              supplierName: "",
              checkInDate: values.checkInDate,
              type: initialTransferlManual.type,
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
      // dispatch(editTransferManual(null));
      dispatch(updatetransferManual(newsubmitObjects));
    } else {
      // submitObjects.push(values);
    }

    onCloseModal();
  };
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-2/3 max-w-3xl mx-auto my-6">
          {/*content*/}
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
              <h3 className="text-3xl font-semibold">Edit Transfer</h3>
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
                <div class="grid grid-cols-4 gap-4">
                  <div>
                    <Field
                      name="checkInDate"
                      label="Date"
                      selected={new Date(initialDate)}
                      datesBetween={datesBetween}
                      component={DateField}
                    />
                  </div>{" "}
                </div>
                {slectedBookType === "SIC" && (
                  <div class="grid grid-cols-4 gap-4">
                    <div>
                      <Field
                        name="adultCost"
                        label="Adult Cost"
                        component={TextField}
                      />
                    </div>{" "}
                    <div>
                      <Field
                        name="childCost"
                        label="Child Cost"
                        component={TextField}
                      />
                    </div>{" "}
                    <div>
                      <Field
                        name="infantCost"
                        label="Infant Cost"
                        component={TextField}
                      />
                    </div>{" "}
                    <div></div>
                  </div>
                )}
                {slectedBookType === "PVT" && (
                  <div class="grid grid-cols-4 gap-4">
                    <div>
                      <Field
                        name="vechile"
                        label="Vehicle"
                        component={TextField}
                      />
                    </div>{" "}
                    <div>
                      <Field
                        name="Capacity"
                        label="Capacity"
                        component={TextField}
                      />
                    </div>{" "}
                    <div>
                      <Field
                        name="NoOfVehicle"
                        label="No Of Vehicle"
                        component={TextField}
                      />
                    </div>{" "}
                    <div>
                      <Field
                        name="VehicleCost"
                        label="Vehicle Cost"
                        component={TextField}
                      />
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
  form: "EditTransfer",
})(EditTransfer);
