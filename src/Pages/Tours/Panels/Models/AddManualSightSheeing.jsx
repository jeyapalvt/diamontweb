import React, { useEffect, useState } from "react";
import {
  TextField,
  SelectField,
  DateField,
} from "../../../../Components/ReduxField";
import { reduxForm, Field } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addSightSeeingManual,
  updateSightSeeingManual,
} from "../../../../Reducers/mainQuerySlice";
import { editSightSeeingManual } from "../../../../Reducers/updateMainQuery";
import { useParams } from "react-router-dom";
const AddManualSightSheeing = (props) => {
  const dispatch = useDispatch();
  const { id, qid } = useParams();
  const { handleSubmit, qutationId, onCloseModal, dateRange } = props;
  const initialDate = useSelector((state) => state.allModelState.date);

  const initialSightSheeinglManual = useSelector(
    (state) => state.updateMQuery.sightSeeingeditManual
  );

  const initialSightUpdateManual = useSelector(
    (state) => state.mainQuery.sightSeeingManual
  );
  console.log("initialDate:", initialDate);
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
    { value: "TICKET ONLY", label: "TICKET ONLY" },
  ];
  const currency = [
    { value: "AED", label: "AED" },
    { value: "INR", label: "INR" },
    { value: "EUR", label: "EUR" },
  ];
  const [slectedBookType, setslectedBookType] = useState(bookType[0].value);

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

  useEffect(() => {
    console.log("initialSightSheeinglManual----->", initialSightSheeinglManual);
    // if (initialSightSheeinglManual) {
    //   props.initialize({
    //     type: initialSightSheeinglManual.slectedBookType,
    //     ssName: initialSightSheeinglManual.ssName,
    //     // cOut: new Date(initialSightSheeinglManual.initialDate),
    //   });
    // } else {

    // }
    props.initialize({
      type: slectedBookType,
      visitDate: new Date(initialDate),
    });
  }, []);

  const sumbitForm = (values) => {
    const submitObjects = [];
    const newsubmitObjects = [];
    const tempsubmitObject = [];
    if (initialSightSheeinglManual) {
      for (let i = 0; i < initialSightUpdateManual.length; i++) {
        if (initialSightSheeinglManual.id == i) {
          for (let j = 0; j < initialSightUpdateManual[i].length; j++) {
            console.log("condition true");
            console.log(",,,ka0ixja9jxj", initialSightUpdateManual[i][j]);
            tempsubmitObject.push({
              sightSeeingId: "",
              quotationId: qid,
              dayItenary: "",
              addedType: 1, // 1 - Manual, 2 - From list
              activityId: "",
              sightSeeingName: values.sightSeeingName,
              currencyCode: values.currencyCode,
              destination: values.destination,
              supplier: values.supplier,
              supplierName: "",
              visitDate: values.visitDate,
              type: values.type,
              adultCost: values.adultCost,
              childCost: values.childCost,
              infantCost: values.infantCost,
              timings: values.timings,
            });
          }
          newsubmitObjects.push(tempsubmitObject);
        } else {
          newsubmitObjects.push(initialSightUpdateManual[i]);
        }
      }

      console.log("final obect", newsubmitObjects);
      dispatch(editSightSeeingManual(null));
      dispatch(updateSightSeeingManual(newsubmitObjects));
    } else {
      console.log("values", values);

      const tempObject = {
        sightSeeingId: "",
        quotationId: qid,
        dayItenary: "",
        addedType: 1, // 1 - Manual, 2 - From list
        activityId: "",
        sightSeeingName: values.sightSeeingName,
        currencyCode: values.currencyCode,
        destination: values.destination,
        supplier: values.supplier,
        supplierName: "",
        visitDate: values.visitDate,
        type: values.type,
        adultCost: values.adultCost,
        childCost: values.childCost,
        infantCost: values.infantCost,
        timings: values.timings,
      };
      submitObjects.push(tempObject);
      dispatch(addSightSeeingManual(submitObjects));
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
              <h3 className="text-3xl font-semibold">
                Add Manual Sight Sheeing
              </h3>
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
                      name="sightSeeingName"
                      label="Sight Sheeing Name"
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
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <Field
                      name="destination"
                      label="Destination"
                      options={destinations}
                      isSearchable={true}
                      // initialValue={destinations[0].value}
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
                    <Field
                      name="visitDate"
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
                  <div className="grid grid-cols-4 gap-4">
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
                    <div>
                      <Field
                        name="timings"
                        label="Timings"
                        component={TextField}
                      />
                    </div>
                  </div>
                )}
                {slectedBookType === "PVT" && (
                  <>
                    <div className="grid grid-cols-4 gap-4">
                      <div>
                        <Field
                          name="adultcost"
                          label="Adult Ticket Cost"
                          component={TextField}
                        />
                      </div>{" "}
                      <div>
                        <Field
                          name="childcost"
                          label="Child Ticket Cost"
                          component={TextField}
                        />
                      </div>{" "}
                      <div>
                        <Field
                          name="infantCost"
                          label="Infant Ticket Cost"
                          component={TextField}
                        />
                      </div>{" "}
                      <div>
                        <Field
                          name="guideCost"
                          label="Guide Cost"
                          component={TextField}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      <div>
                        <Field
                          name="Vehicle"
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
                          name="No Of Vehicle"
                          label="noOfVechile"
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
                  </>
                )}
                {slectedBookType === "SIC" && (
                  <div className="grid grid-cols-4 gap-4">
                    <div>
                      <Field
                        name="adulxstcost"
                        label="Adult Ticket Cost"
                        component={TextField}
                      />
                    </div>{" "}
                    <div>
                      <Field
                        name="childsdscost"
                        label="Child Ticket Cost"
                        component={TextField}
                      />
                    </div>{" "}
                    <div>
                      <Field
                        name="infantaxsCost"
                        label="Infant Ticket Cost"
                        component={TextField}
                      />
                    </div>{" "}
                    <div></div>
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
  form: "AddManualSightSheeing",
})(AddManualSightSheeing);
