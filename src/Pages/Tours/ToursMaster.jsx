import React, { useState } from "react";
import SearchReport from "./SearchReport";
import { InputComp, SelectComp } from "../../Components";
import {
  SelectField,
  TextField,
  DateField,
  FNoteEditor,
} from "../../Components/ReduxField";
import { reduxForm, Field } from "redux-form";
import NewAgentOrClient from "./NewAgentOrClient";

const ToursMaster = () => {
  const agentOrb2c = [
    { value: "Agent", label: "Agent" },
    { value: "B2C", label: "B2C" },
  ];
  const agents = [
    { value: "Shyam", label: "Shyam" },
    { value: "Aashik", label: "Aashik" },
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
    { value: "completepackate", label: "Complete Package" },
    { value: "extraservice", label: "Extra Service" },
    { value: "FlightOnly", label: "Flight Only" },
    { value: "hotelservice", label: "Hotel Service" },
    { value: "Land Part", label: "Land Part" },
    { value: "Transfer Only", label: "Transfer only" },
  ];
  const destinations = [
    { value: "dubai", label: "Dubai" },
    { value: "adbudahabi", label: "Abu Dhabi" },
    { value: "Sigapore", label: "Singapore" },
  ];

  const loadSource = [
    { value: "facebook", label: "FaceBook" },
    { value: "reference", label: "Reference" },
    { value: "meating", label: "Meating" },
    { value: "others", label: "Others" },
  ];
  const [agentOrUser, setAgentOrUser] = useState("Agent");
  const [formData, setFormData] = useState({});

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
    // Add additional logic or actions to handle closing the modal in the parent component
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
                name="agentOrb2c"
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
                name="agent"
                label="Agent"
                options={agents}
                isSearchable={true}
                component={SelectField}
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 mx-5">
              {" "}
              <Field
                name="contactPersion"
                label="Contact Person Name"
                options={contactPersion}
                isSearchable={true}
                component={SelectField}
              />
            </div>
            <div className="w-1/2 mx-5">
              <Field
                name="ContactPersonEmail"
                label="Contact Person Email"
                component={TextField}
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 mx-5">
              <Field
                name="LandlineNumber"
                label="Landline Number"
                component={TextField}
              />
            </div>
            <div className="w-1/2 mx-5">
              <Field
                name="MobileNumber "
                label="Mobile Number "
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
                name="serviceType "
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
                name="QueryTitle"
                label="Query Title "
                component={TextField}
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-full mx-5">
              <Field
                name="Add\CCMails"
                label="Add CC Mails"
                component={TextField}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/2 mx-5 ml-20">
          <div className="mb-5 ml-5">Other Information</div>
          <div className="flex">
            <div className="w-1/3 mx-5">
              {" "}
              <Field name="fromDate" label="Start Date" component={DateField} />
            </div>
            <div className="w-1/3 mx-5">
              {" "}
              <Field name="toDate" label="End Date" component={DateField} />
            </div>
            <div className="w-1/3 mx-5">
              <Field
                name="Totalnigts"
                label="Total Nights"
                component={TextField}
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 mx-5">
              <Field
                name="destination "
                label="Destination"
                options={destinations}
                isSearchable={true}
                component={SelectField}
              />
            </div>
            <div className="w-1/2 mx-5"></div>
          </div>
          <div className="flex">
            <div className="w-1/3 mx-5">
              {" "}
              <Field name="Adult" label="Adult" component={TextField} />
            </div>
            <div className="w-1/3 mx-5">
              {" "}
              <Field
                name="child"
                label="Chils(Below 12 yrs)"
                component={TextField}
              />
            </div>
            <div className="w-1/3 mx-5">
              <Field
                name="infant"
                label="Infant(below 3.5 yrs)"
                component={TextField}
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/3 mx-5">
              <Field
                name="leadsorce "
                label="Lead Source"
                options={loadSource}
                isSearchable={true}
                component={SelectField}
              />
            </div>
            <div className="w-1/3 mx-5">
              <Field
                name="OperationsPerson "
                label="Operations Person"
                options={operationPersion}
                isSearchable={true}
                component={SelectField}
              />
            </div>
            <div className="w-1/3 mx-5">
              <Field
                name="SalesPerson "
                label="Sales Person"
                options={operationPersion}
                isSearchable={true}
                component={SelectField}
              />
            </div>
          </div>
          <div className="flex mt-5">
            <div className="w-full mx-5">
              <Field label="Other Informations" component={FNoteEditor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "ToursMaster",
})(ToursMaster);
