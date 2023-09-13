import React, { useEffect, useState } from "react";
import { reduxForm, Field } from "redux-form";
import {
  DateField,
  SelectField,
  TextField,
} from "../../../../Components/ReduxField";
import { Button } from "../../../../Components";
import { useSelector, useDispatch } from "react-redux";
import { fetchActivityList } from "../../../../Reducers/activitySlice";
import {
  addSightSeeingManual,
  updateSightSeeingManual,
} from "../../../../Reducers/mainQuerySlice";
import { editSightSeeingManual } from "../../../../Reducers/updateMainQuery";
import { useParams } from "react-router-dom";
const AddSightSheeing = (props) => {
  const { handleSubmit, qutationId, onCloseModal, dateRange } = props;
  const { id, qid } = useParams();
  const dispatch = useDispatch();
  const activityList = useSelector((state) => state.allactivity.data);
  const isLoading = useSelector((state) => state.allactivity.isLoading);

  const initialDate = useSelector((state) => state.allModelState.date);

  const initialSightSheeinglManual = useSelector(
    (state) => state.updateMQuery.sightSeeingeditManual
  );

  const initialSightUpdateManual = useSelector(
    (state) => state.mainQuery.sightSeeingManual
  );
  useEffect(() => {
    dispatch(
      fetchActivityList({
        attractionId: 1,
        agencyId: 0,
        agencyUserId: 0,
        currencyCode: "AED",
        platformId: 1,
      })
    );
  }, [dispatch]);

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
    // if (initialSightSheeinglManual) {
    //   props.initialize({
    //     type: initialSightSheeinglManual.slectedBookType,
    //     ssName: initialSightSheeinglManual.ssName,
    //     // cOut: new Date(initialSightSheeinglManual.initialDate),
    //   });
    // } else {

    // }
    props.initialize({
      visitDate: new Date(initialDate),
    });
  }, []);

  // Function to handle the "Select" button click
  const handleSelectClick = (values) => {
    const targetIndex = values.index;
    if (values.hasOwnProperty(targetIndex.toString())) {
      const foundItem = values[targetIndex.toString()];

      const submitObjects = [];
      const newsubmitObjects = [];
      const tempsubmitObject = [];
      if (initialSightSheeinglManual) {
        for (let i = 0; i < initialSightUpdateManual.length; i++) {
          if (initialSightSheeinglManual.id == i) {
            for (let j = 0; j < initialSightUpdateManual[i].length; j++) {
              tempsubmitObject.push({
                sightSeeingId: "",
                quotationId: qid,
                dayItenary: "",
                addedType: 2, // 1 - Manual, 2 - From list
                activityId: "",
                sightSeeingName: values.sightSeeingName,
                currencyCode: values.currencyCode,
                destination: values.destination,
                supplier: values.supplier,
                supplierName: "",
                visitDate: values.visitDate,
                type: values.type,
                adultCost: foundItem.adultCost,
                childCost: foundItem.childCost,
                infantCost: foundItem.infantCost,
                timings: values.timings,
              });
            }
            newsubmitObjects.push(tempsubmitObject);
          } else {
            newsubmitObjects.push(initialSightUpdateManual[i]);
          }
        }

        dispatch(editSightSeeingManual(null));
        dispatch(updateSightSeeingManual(newsubmitObjects));
      } else {
        const tempObject = {
          sightSeeingId: "",
          quotationId: qid,
          dayItenary: "",
          addedType: 2, // 1 - Manual, 2 - From list
          activityId: "",
          sightSeeingName: values.sightSeeingName,
          currencyCode: values.currencyCode,
          destination: values.destination,
          supplier: values.supplier,
          supplierName: "",
          visitDate: values.visitDate,
          type: "SIC",
          adultCost: foundItem.adultCost,
          childCost: foundItem.childCost,
          infantCost: foundItem.infantCost,
          timings: values.timings,
        };
        submitObjects.push(tempObject);
        dispatch(addSightSeeingManual(submitObjects));
      }
    } else {
      const submitObjects = [];
      const newsubmitObjects = [];
      const tempsubmitObject = [];
      if (initialSightSheeinglManual) {
        for (let i = 0; i < initialSightUpdateManual.length; i++) {
          if (initialSightSheeinglManual.id == i) {
            for (let j = 0; j < initialSightUpdateManual[i].length; j++) {
              tempsubmitObject.push({
                sightSeeingId: "",
                quotationId: qid,
                dayItenary: "",
                addedType: 2, // 1 - Manual, 2 - From list
                activityId: "",
                sightSeeingName: values.sightSeeingName,
                currencyCode: values.currencyCode,
                destination: values.destination,
                supplier: values.supplier,
                supplierName: "",
                visitDate: values.visitDate,
                type: "SIC",
                adultCost: "",
                childCost: "",
                infantCost: "",
                timings: values.timings,
              });
            }
            newsubmitObjects.push(tempsubmitObject);
          } else {
            newsubmitObjects.push(initialSightUpdateManual[i]);
          }
        }

        dispatch(editSightSeeingManual(null));
        dispatch(updateSightSeeingManual(newsubmitObjects));
      } else {
        const tempObject = {
          sightSeeingId: "",
          quotationId: id,
          dayItenary: "",
          addedType: 2, // 1 - Manual, 2 - From list
          activityId: "",
          sightSeeingName: values.sightSeeingName,
          currencyCode: values.currencyCode,
          destination: values.destination,
          supplier: values.supplier,
          supplierName: "",
          visitDate: values.visitDate,
          type: "SIC",
          adultCost: "",
          childCost: "",
          infantCost: "",
          timings: values.timings,
        };
        submitObjects.push(tempObject);
        dispatch(addSightSeeingManual(submitObjects));
      }
    }

    //const foundObject = findObjectByIndex(values, targetIndex);
    // console.log("foundObject", foundObject);
    // console.log(`${JSON.stringify(values, null, 2)}`);
  };

  return (
    <div>
      <div className="fixed inset-0 z-50 flex overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-8/12 mx-auto my-6">
          {/*content*/}
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
              <h3 className="text-3xl font-semibold">Add Sight Sheeing</h3>
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
                    name="visitDate"
                    selected={new Date(initialDate)}
                    datesBetween={datesBetween}
                    label="Date"
                    component={DateField}
                  />
                </div>{" "}
                <div>
                  <Field
                    name="type"
                    label="Sightseeing Type"
                    options={transType}
                    //isSearchable={true}
                    // isMultiple={true}
                    component={SelectField}
                  />
                </div>{" "}
                <div>
                  <Field
                    name="Sightseeing"
                    label="Sightseeing"
                    component={TextField}
                  />
                </div>{" "}
                <div className="mt-6">
                  <Button name="Search" />
                </div>
              </div>
              <div className="mt-5">
                {isLoading && <div>Loading</div>}
                {activityList && (
                  <table className="w-full text-left border border-collapse">
                    <thead className="text-sm font-bold text-gray-800 bg-slate-300">
                      <tr>
                        <th className="w-6/12 p-2 border">Sightseeing</th>
                        <th className="w-1/12 p-2 border">Type</th>
                        <th className="w-1/12 p-2 border">CUR</th>
                        <th className="w-1/12 p-2 border">ADULT</th>
                        <th className="w-1/12 p-2 border">CHILD</th>
                        <th className="w-1/12 p-2 border">INFANT</th>
                        <th className="w-1/12 p-2 border"></th>
                      </tr>
                    </thead>
                    <tbody className="items-center text-md">
                      {activityList.map((item, index) => (
                        <tr key={index}>
                          <th>{item.attName}</th>
                          <th>(SIC)</th>
                          <th>AED</th>
                          <th>
                            {item.adultPrice}
                            <Field
                              name={`${index}.adultCost`}
                              component={TextField}
                              type="number"
                              initial={2}
                            />
                          </th>
                          <th>
                            {item.childPrice}
                            <Field
                              name={`${index}.childCost`}
                              component={TextField}
                            />
                          </th>
                          <th>
                            {" "}
                            0
                            <Field
                              name={`${index}.infantCost`}
                              component={TextField}
                            />
                          </th>
                          <th>
                            <button
                              className="px-1 py-1 mt-5 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none active:bg-blue-600 hover:shadow-lg focus:outline-none"
                              type="button"
                              //  onClick={() => handleSelectClick(item, index)}
                              onClick={handleSubmit((values) =>
                                handleSelectClick({
                                  ...values,
                                  index,
                                })
                              )}
                            >
                              Select
                            </button>
                          </th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
              {/* <button
                className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                type="button"
                onClick={handleSubmit((values) =>
                  sumbitForm({
                    ...values,
                  })
                )}
              >
                Save
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </div>
  );
};

export default reduxForm({
  form: "AddSightSheeing",
})(AddSightSheeing);
