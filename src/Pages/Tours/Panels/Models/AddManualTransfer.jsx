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
const AddManualTransfer = (props) => {
  const dispatch = useDispatch();
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
    } else {
      props.initialize({
        type: slectedBookType,
        checkInDate: new Date(initialDate),
      });
    }
  }, []);

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
              quotationId: "",
              dayItenary: "",
              addedType: "1", // 1 - Manual,  2 - From LIst
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
        quotationId: "",
        dayItenary: "",
        addedType: "1", // 1 - Manual,  2 - From LIst
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
        <div className="relative w-2/3 max-w-3xl mx-auto my-6">
          {/*content*/}
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
              <h3 className="text-3xl font-semibold">Add Manual Transfer</h3>
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
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-3">
                    <Field
                      name="transferName"
                      label="Transfer Name"
                      component={TextField}
                    />
                  </div>
                  <div>
                    <Field
                      name="currencyCode"
                      label="Currency"
                      options={currency}
                      component={SelectField}
                    />
                  </div>
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
                      name="supplierId"
                      label="Supplier"
                      options={supplier}
                      //isSearchable={true}
                      // isMultiple={true}
                      component={SelectField}
                    />
                  </div>{" "}
                  <div>
                    <Field
                      name="checkInDate"
                      label="Date"
                      selected={new Date(initialDate)}
                      datesBetween={datesBetween}
                      component={DateField}
                    />
                  </div>{" "}
                  <div>
                    <Field
                      name="type"
                      label="Type"
                      options={bookType}
                      //isSearchable={true}
                      // isMultiple={true}
                      component={SelectField}
                      onChange={(value) => {
                        // Handle the onChange event here
                        setslectedBookType(value);
                        // You can perform any necessary actions or update the Redux Form's field value
                      }}
                    />
                  </div>
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
  form: "AddManualTransfer",
})(AddManualTransfer);
