import React, { useEffect } from "react";
import { reduxForm, Field } from "redux-form";
import {
  TextField,
  SelectField,
  DateField,
} from "../../../../Components/ReduxField";
import { useDispatch, useSelector } from "react-redux";
import {
  addHotelManual,
  updateManualHotelRecord,
} from "../../../../Reducers/mainQuerySlice";
import { editHotelManual } from "../../../../Reducers/updateMainQuery";
import { useParams } from "react-router-dom";
const AddManualHotel = (props) => {
  const { handleSubmit, qutationId, onCloseModal, dateRange } = props;
  const { id } = useParams();
  const hoteleditManual = useSelector(
    (state) => state.updateMQuery.hoteleditManual
  );

  const initialHotelManual = useSelector(
    (state) => state.mainQuery.hotelManual
  );

  const dispatch = useDispatch();
  const destinations = [
    { value: "dubai", label: "Dubai" },
    { value: "adbudahabi", label: "Abu Dhabi" },
    { value: "Sigapore", label: "Singapore" },
  ];
  const supplier = [
    { value: "1", label: "Hotel Bed" },
    { value: "2", label: "Hotel Duke" },
  ];
  const catogery = [
    { value: "all", label: "All" },
    { value: "1star", label: "1 star" },
    { value: "2star", label: "2 star" },
    { value: "3star", label: "3 star" },
    { value: "4star", label: "4 star" },
    { value: "5star", label: "5 star" },
    { value: "6star", label: "6 star" },
    { value: "7star", label: "7 star" },
  ];

  const currency = [
    { value: "AED", label: "AED" },
    { value: "EUR", label: "EUR" },
    { value: "INR", label: "INR" },
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
  // const datesBetween = "";
  // console.log("Dates between:", datesBetween);

  useEffect(() => {
    console.log("dateRange", dateRange);
    if (hoteleditManual) {
      props.initialize({
        quotationId: hoteleditManual.quotationId,
        hotelName: hoteleditManual.hotelName,
        destination: hoteleditManual.destination,
        supplierId: hoteleditManual.supplierId,
        addedWay: hoteleditManual.addedWay,
        checkInDate: new Date(hoteleditManual?.checkInDate),
        checkOutDate: new Date(hoteleditManual?.checkInDate),
        category: hoteleditManual.category,
        roomType: hoteleditManual.roomType,
        mealPlan: hoteleditManual.mealPlan,
        dblCost: hoteleditManual.dblCost,
        trplCost: hoteleditManual.trplCost,
        quadCost: hoteleditManual.quadCost,
        cwbCost: hoteleditManual.cwbCost,
        cnbCostBelow05: hoteleditManual.cnbCostBelow05,
        cnbCostAbove05: hoteleditManual.cnbCostAbove05,
        infCost: hoteleditManual.infCost,
        sglCost: hoteleditManual.sglCost,
        currencyCode: hoteleditManual.currencyCode,
      });
    } else {
      props.initialize({
        checkInDate: datesBetween[0],
        checkOutDate: datesBetween[datesBetween.length - 2],
      });
    }
  }, []);

  const sumbitForm = (values) => {
    const submitObjects = [];
    const newsubmitObjects = [];
    const tempsubmitObject = [];
    const checkInDate = new Date(values.checkInDate);
    const checkOutDate = new Date(values.checkOutDate);
    const currentDate = new Date(checkInDate);
    if (hoteleditManual) {
      for (let i = 0; i < initialHotelManual.length; i++) {
        if (hoteleditManual.id == i) {
          for (let j = 0; j < initialHotelManual[i].length; j++) {
            if (
              values.checkInDate.toISOString().slice(0, 10) ==
              initialHotelManual[i][j].checkInDate
            ) {
              if (hoteleditManual.editOrDelete == 1) {
                tempsubmitObject.push({
                  quotationId: id,
                  hotelName: values.hotelName,
                  destination: values.destination,
                  supplierId: values.supplierId,
                  addedWay: 1,
                  checkInDate: new Date(values.checkInDate)
                    .toISOString()
                    .slice(0, 10),
                  checkOutDate: values.checkOutDate,
                  category: values.category,
                  roomType: values.roomType,
                  mealPlan: values.mealPlan,
                  dblCost: values.dblCost,
                  trplCost: values.trplCost,
                  quadCost: values.quadCost,
                  cwbCost: values.cwbCost,
                  cnbCostBelow05: values.cnbCostBelow05,
                  cnbCostAbove05: values.cnbCostAbove05,
                  infCost: values.infCost,
                  sglCost: values.sglCost,
                  currencyCode: values.currencyCode,
                });
              }
            } else {
              tempsubmitObject.push(initialHotelManual[i][j]);
            }
          }

          console.log("tempsubmitObject------>", tempsubmitObject);
          newsubmitObjects.push(tempsubmitObject);
        } else {
          newsubmitObjects.push(initialHotelManual[i]);
        }
        // newsubmitObjects.push()
      }

      console.log(newsubmitObjects);
      dispatch(updateManualHotelRecord(newsubmitObjects));
      dispatch(editHotelManual(null));
    } else {
      while (currentDate <= checkOutDate) {
        submitObjects.push({
          quotationId: id,
          hotelName: values.hotelName,
          destination: values.destination,
          supplierId: values.supplierId,
          addedWay: 1,
          checkInDate: currentDate.toISOString().slice(0, 10),
          checkOutDate: values.checkOutDate,
          category: values.category,
          roomType: values.roomType,
          mealPlan: values.mealPlan,
          dblCost: values.dblCost,
          trplCost: values.trplCost,
          quadCost: values.quadCost,
          cwbCost: values.cwbCost,
          cnbCostBelow05: values.cnbCostBelow05,
          cnbCostAbove05: values.cnbCostAbove05,
          infCost: values.infCost,
          sglCost: values.sglCost,
          currencyCode: values.currencyCode,
          // Format date as "YYYY-MM-DD"
          // Add other properties as needed
        });

        currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
      }
      dispatch(addHotelManual(submitObjects));
      console.log(submitObjects);
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
              <h3 className="text-3xl font-semibold">Add Manual Hotel</h3>
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
                <div>
                  <Field
                    name="hotelName"
                    label="Hotel Name"
                    component={TextField}
                  />
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
                      label="Check In"
                      // selected={hoteleditManual?.checkInDate ? hoteleditManual.checkInDate : datesBetween[0]}
                      // selected={
                      //   hoteleditManual?.checkInDate &&
                      //   hoteleditManual.checkInDate
                      // }
                      // minDate={}
                      // maxDate={}
                      datesBetween={datesBetween}
                      component={DateField}
                    />
                  </div>{" "}
                  <div>
                    <Field
                      name="checkOutDate"
                      label="Check Out"
                      // selected={
                      //   hoteleditManual?.checkInDate &&
                      //   hoteleditManual.checkInDate
                      // }
                      //selected={datesBetween[datesBetween.length - 1]}
                      // minDate={}
                      // maxDate={}
                      datesBetween={datesBetween}
                      component={DateField}
                    />
                  </div>
                </div>
                <div class="grid grid-cols-4 gap-4">
                  <div>
                    <Field
                      name="category"
                      label="Catogery"
                      options={catogery}
                      //isSearchable={true}
                      // isMultiple={true}
                      component={SelectField}
                    />
                  </div>{" "}
                  <div>
                    <Field
                      name="roomType"
                      label="Room Type"
                      component={TextField}
                    />
                  </div>{" "}
                  <div>
                    <Field
                      name="mealPlan"
                      label="Meal Plan"
                      component={TextField}
                    />
                  </div>{" "}
                  <div>
                    <Field name="sglCost" label="SGL" component={TextField} />
                  </div>
                </div>
                <div class="grid grid-cols-4 gap-4">
                  <div>
                    <Field
                      name="dblCost"
                      label="DBL Cost"
                      component={TextField}
                    />
                  </div>{" "}
                  <div>
                    <Field
                      name="trplCost"
                      label="TRBL Cost"
                      component={TextField}
                    />
                  </div>{" "}
                  <div>
                    <Field
                      name="quadCost"
                      label="QUAD Cost"
                      component={TextField}
                    />
                  </div>{" "}
                  <div>
                    <Field
                      name="cwbCost"
                      label="CWB Cost"
                      component={TextField}
                    />
                  </div>
                </div>
                <div class="grid grid-cols-4 gap-4">
                  <div>
                    <Field
                      name="cnbCostBelow05"
                      label="CNB Cost"
                      spanTxt="(Above 05 yrs)"
                      component={TextField}
                    />
                  </div>{" "}
                  <div>
                    <Field
                      name="cnbCostAbove05"
                      label="CNB Cost"
                      spanTxt="(Below 05 yrs)"
                      component={TextField}
                    />
                  </div>{" "}
                  <div>
                    <Field
                      name="infCost"
                      label="INF Cost"
                      component={TextField}
                    />
                  </div>{" "}
                  <div>
                    {" "}
                    <Field
                      name="currencyCode"
                      label="Currency"
                      options={currency}
                      //isSearchable={true}
                      // isMultiple={true}
                      component={SelectField}
                    />
                  </div>
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
                // onClick={onCloseModal}
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
  form: "AddManualHotel",
})(AddManualHotel);
