import React, { useState, useEffect } from "react";
import SearchReport from "./SearchReport";
import { InputComp, SelectComp } from "../../Components";
import {
  SelectField,
  TextField,
  DateField,
  CheckBox,
  FNoteEditor,
} from "../../Components/ReduxField";

import { reduxForm, Field, FieldArray, change } from "redux-form";
import NewAgentOrClient from "./NewAgentOrClient";
import AgeFieldArr from "./FieldArray/AgeFieldArr";
import DestinationFieldArr from "./FieldArray/DestinationFieldArr";
import axios from "axios";
import { BaseUrl } from "../../Reducers/Api";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAgency } from "../../Reducers/allAgencySlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  addDestination,
  updatedestination,
} from "../../Reducers/destinationSlice";
const ToursMaster = (props) => {
  let navigate = useNavigate();
  const { handleSubmit, pristine, submitting, reset } = props;
  const dispatch = useDispatch();
  const allAgents = useSelector((state) => state.allAgents.data);
  const isLoading = useSelector((state) => state.allAgents.isLoading);
  const destinationQuery = useSelector(
    (state) => state.destinationQuery.destinationList
  );
  const [agentList, setagentList] = useState([]);
  const [formData, setFormData] = useState({
    fromDate: "",
    toDate: "",
  });
  useEffect(() => {
    fetchList();
  }, [dispatch]);

  const fetchList = async () => {
    dispatch(
      fetchAllAgency({
        agenctId: 1,
        secretKey: "uZFEucIHAbqvgT7p87qC4Ms4tjqG34su",
      })
    );

    console.log(`${JSON.stringify(allAgents, null, 2)}`);

    let tempVal = [];
    for (let i = 0; i < allAgents.length; i++) {
      tempVal.push({
        value: allAgents[i].agencyId,
        label: allAgents[i].agencyName,
      });
    }

    setagentList(tempVal);
  };

  const agentOrb2c = [
    { value: "1", label: "Agent" },
    { value: "2", label: "B2C" },
  ];
  const agents = [
    { value: "1", label: "Shyam" },
    { value: "2", label: "Aashik" },
  ];
  const operationPersion = [
    { value: "Vinod", label: "Vinod" },
    { value: "Vivek", label: "Vivek" },
    { value: "Raman", label: "Raman" },
  ];
  const contactPersion = [
    { value: "Vinod", label: "Vinod" },
    { value: "Raman", label: "Raman" },
  ];
  const servicetype = [
    { value: "1", label: "Complete Package" },
    { value: "2", label: "Extra Service" },
    { value: "3", label: "Flight Only" },
    { value: "4", label: "Hotel Service" },
    { value: "5", label: "Land Part" },
    { value: "6", label: "Transfer only" },
  ];

  const loadSource = [
    { value: "1", label: "FaceBook" },
    { value: "2", label: "Reference" },
    { value: "3", label: "Meating" },
    { value: "4", label: "Others" },
  ];

  const companyName = [
    { value: "diamont", label: "diamont" },
    { value: "usetours", label: "usetours" },
  ];
  const locations = [
    { value: "Dubai", label: "Dubai" },
    { value: "Chennai", label: "Chennai" },
    { value: "AbuDhabi", label: "AbuDhabi" },
  ];

  const destinations = [
    { value: "dubai", label: "Dubai" },
    { value: "adbudahabi", label: "Abu Dhabi" },
    { value: "Sigapore", label: "Singapore" },
  ];
  const [agentOrUser, setAgentOrUser] = useState("Agent");

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
    // Add additional logic or actions to handle closing the modal in the parent component
  };

  const [noOfChild, setnoOfChild] = useState();
  const [noOfInfant, setnoOfInfant] = useState();

  // Handlers for setting the age and infant values
  const setChildCountFieldValue = (e) => {
    setnoOfChild(e.target.value);
  };

  const setInfantCountFieldValue = (e) => {
    setnoOfInfant(e.target.value);
  };
  const [minToDate, setMinToDate] = useState(new Date());
  useEffect(() => {}, [formData]);

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

  const handledestinationAdd = (values) => {
    console.log(values);

    if (values.destination && values.fromDate && values.toDate) {
      const tempObject = {
        destination: values.destination,
        fromDate: values.fromDate,
        toDate: values.toDate,
      };
      dispatch(addDestination(tempObject));
    }
  };

  // Function to calculate nights between two dates
  const calculateNights = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDifference = end - start;
    const nights = Math.floor(timeDifference / (1000 * 3600 * 24));
    return nights;
  };

  // Calculate nights between fromDate and toDate
  const nightsBetweenDates = calculateNights(
    formData.fromDate,
    formData.toDate
  );

  const handleDeleteDestination = (index) => {
    console.log("Deleting destination at index:", index);

    // Check if the index is within the valid range
    if (index >= 0 && index < destinationQuery.length) {
      // Create a new array without the item at the specified index
      const updatedDestinationQuery = destinationQuery.filter(
        (_, i) => i !== index
      );

      // Now updatedDestinationQuery does not contain the deleted destination
      console.log("Updated destinationQuery:", updatedDestinationQuery);
      dispatch(updatedestination(updatedDestinationQuery));
      // Dispatch an action to update the destinationQuery in your Redux store
      // dispatch(updateDestinationQuery(updatedDestinationQuery)); // Replace this with the actual action
    } else {
      console.error("Invalid index:", index);
    }
  };

  const sumbitForm = (values) => {
    // const ageListChild = values.ageList?.map((ageData) => ({
    //   age: ageData.age,
    //   childOrInfant: 1, // Assuming ageList represents child ages
    // }));

    // const ageListInfant = values.ageListInfant?.map((ageData) => ({
    //   age: ageData.age,
    //   childOrInfant: 2, // Assuming ageListInfant represents infant ages
    // }));
    // const combinedAgeList = ageListChild?.concat(ageListInfant);

    // Initialize combinedAgeList as an empty array
    let combinedAgeList = [];

    // Check if ageListChild exists and has values
    if (values.ageList && values.ageList.length > 0) {
      combinedAgeList = combinedAgeList.concat(
        values.ageList.map((ageData) => ({
          age: ageData.age,
          childOrInfant: 1, // Assuming ageList represents child ages
        }))
      );
    }

    // Check if ageListInfant exists and has values
    if (values.ageListInfant && values.ageListInfant.length > 0) {
      combinedAgeList = combinedAgeList.concat(
        values.ageListInfant.map((ageData) => ({
          age: ageData.age,
          childOrInfant: 2, // Assuming ageListInfant represents infant ages
        }))
      );
    }

    const updatedValues = {
      ...values,
      childAgeList: combinedAgeList,
      destList: destinationQuery,
    };
    delete updatedValues.ageListInfant;
    delete updatedValues.fromDate;
    delete updatedValues.toDate;
    delete updatedValues.destination;

    console.log(`${JSON.stringify(updatedValues, null, 2)}`);

    //setTourQuery
    axios
      .post(BaseUrl + "setTourQuery", updatedValues)
      .then((res) => {
        console.log(res.data);
        if (res.data.errCode == "200") {
          Swal.fire("Thank You", "Your query has been submited", "success");
          navigate("/tourslist");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="p-5 mt-2 bg-white">
      <div className="flex">
        <div className="flex flex-col w-1/2 mx-5 mr-20">
          <div className="mb-5 ml-5">Query Information</div>
          <div className="flex">
            <div className="w-full mx-5 mb-5">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="w-full px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent"
              >
                Add New Agent/Client
              </button>
            </div>
          </div>
          {showModal && <NewAgentOrClient onCloseModal={handleCloseModal} />}

          <div className="flex">
            <div className="w-1/2 mx-5">
              <Field
                name="customerType"
                label="Agent/B2C"
                options={agentOrb2c}
                isSearchable={true}
                component={SelectField}
                onChange={(value) => {
                  // Handle the onChange event here
                  console.log("Selected value:", value);
                  // You can perform any necessary actions or update the Redux Form's field value
                }}
              />
            </div>
            <div className="w-1/2 mx-5">
              <Field
                name="agencyId"
                label="Agent"
                options={agentList}
                isSearchable={true}
                component={SelectField}
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 mx-5">
              {" "}
              <Field
                name="contactPersonName"
                label="Contact Person Name"
                options={contactPersion}
                isSearchable={true}
                component={SelectField}
              />
            </div>
            <div className="w-1/2 mx-5">
              <Field
                name="contactPersonEmail"
                label="Contact Person Email"
                component={TextField}
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 mx-5">
              <Field
                name="landlineNumber"
                label="Landline Number"
                component={TextField}
              />
            </div>
            <div className="w-1/2 mx-5">
              <Field
                name="mobileNumber"
                label="Mobile Number"
                component={TextField}
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 mx-5">
              <Field
                name="guestName"
                label="Guest Name "
                component={TextField}
              />
            </div>
            <div className="w-1/2 mx-5">
              <Field
                name="serviceType"
                label="Service Type"
                options={servicetype}
                isSearchable={true}
                component={SelectField}
              />
            </div>
          </div>
          <div className="flex ">
            <div className="w-full mx-5">
              <Field
                name="queryTitle"
                label="Query Title "
                component={TextField}
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-full mx-5">
              <Field
                name="addCCMails"
                label="Add CC Mails"
                component={TextField}
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-full mx-5">
              <Field
                name="sendAckMail"
                type="checkbox"
                label="Send Acknowledgement Mail"
                component={CheckBox}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/2 mx-5 ml-20">
          <div className="mb-5 ml-5">Other Information</div>
          <div className="mx-5">
            <div>
              {console.log("destinatioon", destinationQuery?.length)}
              {destinationQuery !== null && destinationQuery.length > 0 && (
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
                          {new Date(item?.fromDate).toLocaleDateString()}{" "}
                        </th>
                        <th className="px-2">
                          {" "}
                          {new Date(item?.toDate).toLocaleDateString()}{" "}
                        </th>
                        <th className="px-2">
                          {calculateNights(item?.fromDate, item?.toDate)}{" "}
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
                              onClick={() => handleDeleteDestination(index)}
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
                  minDate={new Date()}
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
                  onChange={(selectedDate) => handleToDateChange(selectedDate)}
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

          <div className="flex">
            <div className="w-1/3 mx-5">
              {" "}
              <Field name="nofAdult" label="Adult" component={TextField} />
            </div>
            <div className="w-1/3 mx-5">
              {" "}
              <Field
                name="nofChild"
                label="Chils(Below 12 yrs)"
                component={TextField}
                onChange={(e) => setChildCountFieldValue(e)}
              />
            </div>

            <div className="w-1/3 mx-5">
              <Field
                name="nofInfant"
                label="Infant(below 3.5 yrs)"
                component={TextField}
                onChange={(e) => setInfantCountFieldValue(e)}
              />
            </div>
          </div>

          <FieldArray
            name="ageList"
            fieldName="age"
            label="Child"
            childOrInfant={1}
            numFields={noOfChild}
            component={AgeFieldArr}
          />
          <FieldArray
            name="ageListInfant"
            label="Infant"
            fieldName="age"
            childOrInfant={2}
            numFields={noOfInfant}
            component={AgeFieldArr}
          />

          <div className="flex">
            <div className="w-1/3 mx-5">
              <Field
                name="leadSource"
                label="Lead Source"
                options={loadSource}
                isSearchable={true}
                component={SelectField}
              />
            </div>
            <div className="w-1/3 mx-5">
              <Field
                name="operationPerson"
                label="Operations Person"
                options={operationPersion}
                isSearchable={true}
                component={SelectField}
              />
            </div>
            <div className="w-1/3 mx-5">
              <Field
                name="salesPerson"
                label="Sales Person"
                options={operationPersion}
                isSearchable={true}
                component={SelectField}
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/3 mx-5">
              <Field
                name="companyName"
                label="Company"
                options={companyName}
                isSearchable={true}
                component={SelectField}
              />
            </div>
            <div className="w-1/3 mx-5">
              <Field
                name="departureDestination"
                label="Departure Destination"
                options={locations}
                isSearchable={true}
                component={SelectField}
              />
            </div>
            <div className="w-1/3 mx-5">
              <Field
                name="arrivalDestination"
                label="Arrival Destination"
                options={locations}
                isSearchable={true}
                component={SelectField}
              />
            </div>
          </div>
          <div className="flex mt-5">
            <div className="w-full mx-5">
              <Field
                label="Other Informations"
                name="otherInformation"
                component={FNoteEditor}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end px-10 mt-10">
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
  );
};

export default reduxForm({
  form: "ToursMaster",
})(ToursMaster);
