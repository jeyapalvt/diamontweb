import React, { useState, useEffect } from "react";
import { reduxForm, Field, initialize } from "redux-form";
import {
  TextField,
  DateField,
  SelectField,
} from "../../../../Components/ReduxField";
import axios from "axios";
import { BaseUrl } from "../../../../Reducers/Api";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addQutationState } from "../../../../Reducers/addQutationSlice";
import { addDestination } from "../../../../Reducers/destinationSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const EditQueryQuotatioon = (props) => {
  const {
    queryDetail,
    queryQuotationDetal,
    onCloseModal,
    pristine,
    submitting,
    reset,
    handleSubmit,
  } = props;

  const dispatch = useDispatch();
  const { id } = useParams();

  const navigate = useNavigate();
  const destinationQuery = useSelector(
    (state) => state.destinationQuery.destinationList
  );

  const addQutationdata = useSelector((state) => state.addQutationdata.data);

  useEffect(() => {
    initializeData();
  }, [dispatch]);

  const initializeData = () => {
    props.initialize({
      queryQuotationId: queryQuotationDetal.queryQuotationId,
      queryId: queryQuotationDetal.queryId,
      quoteTitle: queryQuotationDetal.quoteTitle,
      nofAdult: queryQuotationDetal.nofAdult,
      nofChild: queryQuotationDetal.nofChild,
      nofInfant: queryQuotationDetal.nofInfant,
      createdDate: queryQuotationDetal.createdDate,
      serviceType: queryQuotationDetal.serviceType,
      sglRoom: queryQuotationDetal.sglRoom,
      dblRoom: queryQuotationDetal.dblRoom,
      trplRoom: queryQuotationDetal.trplRoom,
      quadRoom: queryQuotationDetal.quadRoom,
      cwbRoom: queryQuotationDetal.cwbRoom,
      cnbRoomAbove05: queryQuotationDetal.cnbRoomAbove05,
      cnbRoomBelow05: queryQuotationDetal.cnbRoomBelow05,
      infRoom: queryQuotationDetal.infRoom,
    });
  };

  const servicetype = [
    { value: "1", label: "Complete Package" },
    { value: "2", label: "Extra Service" },
    { value: "3", label: "Flight Only" },
    { value: "4", label: "Hotel Service" },
    { value: "5", label: "Land Part" },
    { value: "6", label: "Transfer only" },
  ];
  const destinations = [
    { value: "dubai", label: "Dubai" },
    { value: "adbudahabi", label: "Abu Dhabi" },
    { value: "Sigapore", label: "Singapore" },
  ];

  const getTotalNights = (fromDateStr, toDateStr) => {
    // Date strings

    // Parse date strings and create Date objects
    const fromDate = new Date(fromDateStr);
    const toDate = new Date(toDateStr);

    // Calculate the time difference in milliseconds
    const timeDifference = toDate - fromDate;

    // Calculate the number of nights by dividing the time difference by the number of milliseconds in a day
    const numberOfNights = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return numberOfNights;
  };
  const [formData, setFormData] = useState({
    fromDate: "",
    toDate: "",
  });
  const [selectedRadio, setSelectedRadio] = useState("1");
  const [minToDate, setMinToDate] = useState(new Date());
  const handleFromDateChange = (selectedDate) => {
    // Update the formData
    setFormData((prevData) => ({
      ...prevData,
      fromDate: selectedDate,
    }));
    // Update the minToDate
    setMinToDate(selectedDate);
  };

  const handleToDateChange = (selectedDate) => {
    // Update the formData
    setFormData((prevData) => ({
      ...prevData,
      toDate: selectedDate,
    }));
  };

  const calculateNights = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDifference = end - start;
    const nights = Math.floor(timeDifference / (1000 * 3600 * 24));
    return nights;
  };

  const handledestinationAdd = (values) => {
    if (values.destination && values.fromDate && values.toDate) {
      const tempObject = {
        destination: values.destination,
        fromDate: values.fromDate,
        toDate: values.toDate,
      };
      dispatch(addDestination(tempObject));
      props.change("destination", null);
      props.change("fromDate", null);
      props.change("toDate", null);
    }
  };
  const handleDeleteDestination = (index) => {
    // Check if the index is within the valid range
    if (index >= 0 && index < destinationQuery.length) {
      // Create a new array without the item at the specified index
      const updatedDestinationQuery = destinationQuery.filter(
        (_, i) => i !== index
      );

      // Now updatedDestinationQuery does not contain the deleted destination

      dispatch(updatedestination(updatedDestinationQuery));
      // Dispatch an action to update the destinationQuery in your Redux store
      // dispatch(updateDestinationQuery(updatedDestinationQuery)); // Replace this with the actual action
    } else {
      console.error("Invalid index:", index);
    }
  };

  const sumbitForm = async (values) => {
    const submitObj = {
      ...values,
      //   destList: selectedRadio === "1" ? queryDetail.destList : destinationQuery,
      queryHotelList: queryQuotationDetal.queryHotelList,
      querySightSeeingList: queryQuotationDetal.querySightSeeingList,
      queryTransferList: queryQuotationDetal.queryTransferList,
      quoteMealsList: queryQuotationDetal.quoteMealsList,
      quoteFlightList: queryQuotationDetal.quoteFlightList,
    };

    console.log(`${JSON.stringify(submitObj, null, 2)}`);
    // onCloseModal();
    // dispatch(addQutationState(submitObj));
    // editQueryQuotation -- for update
    await axios
      .post(BaseUrl + "setQueryQuotation", submitObj)
      .then((res) => {
        if (res.data.errCode === 200) {
          Swal.fire("Thank You", "Your query has been submited", "success");
          onCloseModal();
          getQuatationDetail();
          navigate(`/qutationdetailview/${id}/${res.data.queryQuotationId}`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getQuatationDetail = async () => {
    await axios
      .post(BaseUrl + "listQueryQuotation", { queryId: id })
      .then((res) => {
        if (res.data.errCode === 0) {
          dispatch(addQutationState(res.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-2/3 max-w-3xl mx-auto my-6">
          {/*content*/}
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
              <h3 className="text-3xl font-semibold">Edit Quotation</h3>
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
                  <Field name="nofAdult" label="Adult" component={TextField} />{" "}
                </div>
                <div className="w-full">
                  <Field name="nofChild" label="Child" component={TextField} />{" "}
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

              {/* <div className="flex flex-col space-x-5">
                  <FieldArray
                    name="destinationlist"
                    component={DestinationListArr}
                  />
                </div> */}
              <div className="flex items-center">
                <div className="w-1/12">
                  <Field
                    type="radio"
                    component="input"
                    name="radioGroup"
                    value="1"
                    onChange={() => setSelectedRadio("1")}
                    checked={selectedRadio === "1"}
                  />{" "}
                </div>

                <div className="flex flex-col w-11/12 py-2">
                  {queryDetail.destList?.length > 0 &&
                    queryDetail.destList.map((item, index) => (
                      <div
                        className="flex px-2 py-1 text-sm bg-gray-300 rounded-md"
                        key={index}
                      >
                        <div className="font-bold">{`${item.destination}->`}</div>
                        <div>{`${item.fromDate}`} </div>
                        <div>&nbsp;To&nbsp; </div>
                        <div>{item.toDate}</div>
                        <div>{`${getTotalNights(
                          item.fromDate,
                          item.toDate
                        )} -> Nights`}</div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/12">
                  <Field
                    type="radio"
                    component="input"
                    name="radioGroup"
                    value="2"
                    onChange={() => setSelectedRadio("2")}
                    checked={selectedRadio === "2"}
                  />{" "}
                </div>

                <div className="flex flex-col w-11/12 py-2 text-sm text-white bg-green-700 rounded-md">
                  <div className="px-2">Custome Qutation</div>
                </div>
              </div>

              {selectedRadio === "2" && (
                <div className="mt-2">
                  <div>
                    {destinationQuery !== null &&
                      destinationQuery.length > 0 && (
                        <table className="w-full border border-collapse table-auto">
                          <thead className="text-sm font-bold text-gray-800 bg-slate-300">
                            <tr>
                              <th className="w-2/6 p-2 border">Destination</th>
                              <th className="w-1/6 p-2 border">From Date</th>
                              <th className="w-1/6 p-2 border">To Date</th>
                              <th className="w-1/6 p-2 border">Nights</th>
                              <th className="w-1/6 p-2 border">action</th>
                            </tr>
                          </thead>
                          <tbody className="text-sm text-left text-gray-700 font-extralight">
                            {destinationQuery.map((item, index) => (
                              <tr key={index}>
                                <th className="px-2 ">{item?.destination} </th>
                                <th className="px-2">
                                  {new Date(
                                    item?.fromDate
                                  ).toLocaleDateString()}{" "}
                                </th>
                                <th className="px-2">
                                  {" "}
                                  {new Date(
                                    item?.toDate
                                  ).toLocaleDateString()}{" "}
                                </th>
                                <th className="px-2">
                                  {calculateNights(
                                    item?.fromDate,
                                    item?.toDate
                                  )}{" "}
                                </th>{" "}
                                <th className="px-2">
                                  {/* Render "Delete" button for all items except the last one */}
                                  {index !== destinationQuery.length - 1 ? (
                                    <span className="flex items-center p-1 space-x-1 text-sm text-white bg-black cursor-pointer ">
                                      Locked
                                    </span>
                                  ) : (
                                    <span
                                      className="flex items-center p-1 space-x-1 text-sm text-white bg-red-500 cursor-pointer "
                                      onClick={() =>
                                        handleDeleteDestination(index)
                                      }
                                    >
                                      Delete
                                    </span>
                                  )}
                                </th>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                  </div>
                  <div className="flex justify-between">
                    <div>
                      {" "}
                      <Field
                        // name={`${item}.destination`}
                        name="destination"
                        label="Destination"
                        starIcon="*"
                        options={destinations}
                        isSearchable={true}
                        component={SelectField}
                      />{" "}
                    </div>
                    <div>
                      {" "}
                      <Field
                        name="fromDate"
                        label="Start Date"
                        starIcon="*"
                        minDate={
                          destinationQuery?.length > 0
                            ? new Date(
                                destinationQuery[
                                  destinationQuery?.length - 1
                                ].toDate
                              )
                            : new Date()
                        }
                        component={DateField}
                        onChange={(selectedDate) =>
                          handleFromDateChange(selectedDate)
                        }
                      />{" "}
                    </div>{" "}
                    <div>
                      {" "}
                      <Field
                        // name={`${item}.toDate`}
                        name="toDate"
                        label="End Date"
                        starIcon="*"
                        minDate={minToDate}
                        component={DateField}
                        onChange={(selectedDate) =>
                          handleToDateChange(selectedDate)
                        }
                        // onChange={(selectedDate) =>
                        //   handleFromDateChange(selectedDate)
                        // }
                      />
                    </div>
                    <div>
                      <button
                        className="px-2 py-1 mt-10 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                        type="button"
                        onClick={handleSubmit((values) =>
                          handledestinationAdd({
                            ...values,
                          })
                        )}
                      >
                        Add More
                      </button>
                    </div>
                  </div>
                  {/* <FieldArray name="destList" component={DestinationFieldArr} /> */}
                </div>
              )}

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
  );
};

export default reduxForm({
  form: "EditQueryQuotatioon",
})(EditQueryQuotatioon);
