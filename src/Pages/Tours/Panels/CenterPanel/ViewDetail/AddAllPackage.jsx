import React, { useState } from "react";
import AddManualHotel from "../../Models/AddManualHotel";
import AddHotel from "../../Models/AddHotel";
import AddManualSightSheeing from "../../Models/AddManualSightSheeing";
import AddSightSheeing from "../../Models/AddSightSheeing";
import AddManualTransfer from "../../Models/AddManualTransfer";
import AddTransfer from "../../Models/AddTransfer";
import AddMeal from "../../Models/AddMeal";
import AddFlight from "../../Models/AddFlight";
import { useDispatch, useSelector } from "react-redux";
import {
  addHotelManualModel,
  addHotelModel,
  addmanualSightSheeingModel,
  addsightSheeingModel,
  addmanualTransferModel,
  addtransferModel,
  addmealModel,
  addflightModel,
  updateSightSheeingModel,
  updateTransferStateModel,
} from "../../../../../Reducers/modelStateReducers";
import EditSightSheeing from "../../Models/EditSightSheeing";
import EditTransfer from "../../Models/EditTransfer";
import {
  editHotelManual,
  editSightSeeingManual,
  editTransferManual,
} from "../../../../../Reducers/updateMainQuery";
const AddAllPackage = (props) => {
  const { date, index, dateRange, setHotelManual } = props;

  //const [hotelManual, sethotelManual] = useState(false);
  const [hotel, sethotel] = useState(false);
  //const [manualSightSheeing, setmanualSightSheeing] = useState(false);
  // const [sightSheeing, setsightSheeing] = useState(false);
  // const [manualTransfer, setmanualTransfer] = useState(false);
  // const [transfer, settransfer] = useState(false);
  // const [meal, setmeal] = useState(false);
  // const [flight, setflight] = useState(false);

  const dispatch = useDispatch();
  const manualOrlist = useSelector((state) => state.allModelState.manualOrlist);
  const hotelManual = useSelector(
    (state) => state.allModelState.addHotelManualState
  );
  const hotelList = useSelector((state) => state.allModelState.addHotelstate);
  const manualSightSheeing = useSelector(
    (state) => state.allModelState.addmanualSightSheeingState
  );
  const sightSheeing = useSelector(
    (state) => state.allModelState.addsightSheeingState
  );
  const manualTransfer = useSelector(
    (state) => state.allModelState.addmanualTransferState
  );
  const transfer = useSelector((state) => state.allModelState.addtransferState);
  const meal = useSelector((state) => state.allModelState.addmealState);
  const flight = useSelector((state) => state.allModelState.addflightState);
  const updateSightSheeing = useSelector(
    (state) => state.allModelState.updateSightSheeingState
  );
  const updateTransferState = useSelector(
    (state) => state.allModelState.updateTransferState
  );
  const handleManualHotel = () => {
    // sethotelManual(false);
    dispatch(
      addHotelManualModel({
        addHotelManualState: false,
        date: "", // Make sure 'date' is defined and accessible
      })
    );
    dispatch(editHotelManual());
  };
  const handleHotel = () => {
    dispatch(
      addHotelModel({ addHotelstate: false, date: "", manualOrlist: "" })
    );
    // sethotel(false);
    dispatch(editHotelManual());
  };
  const handlemanualSightSheeing = () => {
    // setmanualSightSheeing(false);
    dispatch(
      addmanualSightSheeingModel({
        addmanualSightSheeingState: false,
        date: "",
      })
    );
    dispatch(editSightSeeingManual());
  };
  const handleAddSightSheeing = () => {
    dispatch(
      addsightSheeingModel({
        addsightSheeingState: false,
        date: "",
      })
    );
    dispatch(editSightSeeingManual());
  };
  const handleAddManualTransfer = () => {
    dispatch(
      addmanualTransferModel({
        addmanualTransferState: false,
        date: "",
      })
    );
    dispatch(editTransferManual());
  };
  const handleAddTransfer = () => {
    //settransfer(false);
    dispatch(addtransferModel({ addtransferState: false, date: "" }));
    dispatch(editTransferManual());
  };
  const handleAddMeal = () => {
    dispatch(addmealModel({ addmealState: false, date: "" }));
    //setmeal(false);
  };
  const handleflight = () => {
    dispatch(addflightModel({ addflightState: false, date: "" }));
  };
  const handUpdateSightSheeing = () => {
    dispatch(
      updateSightSheeingModel({ updateSightSheeingState: false, date: "" })
    );
    dispatch(editSightSeeingManual());
  };
  const handupdateTransferState = () => {
    dispatch(
      updateTransferStateModel({ updateTransferState: false, date: "" })
    );
    dispatch(editTransferManual());
  };
  return (
    <div>
      <div className="p-5 ">
        {hotelManual === true && (
          <AddManualHotel
            dateRange={dateRange}
            onCloseModal={handleManualHotel}
          />
        )}
        {hotelList === true && (
          <AddHotel onCloseModal={handleHotel} dateRange={dateRange} />
        )}
        {manualSightSheeing === true && (
          <AddManualSightSheeing
            onCloseModal={handlemanualSightSheeing}
            dateRange={dateRange}
          />
        )}
        {sightSheeing === true && (
          <AddSightSheeing
            onCloseModal={handleAddSightSheeing}
            dateRange={dateRange}
          />
        )}
        {manualTransfer === true && (
          <AddManualTransfer
            onCloseModal={handleAddManualTransfer}
            dateRange={dateRange}
          />
        )}
        {transfer === true && (
          <AddTransfer onCloseModal={handleAddTransfer} dateRange={dateRange} />
        )}
        {meal === true && (
          <AddMeal onCloseModal={handleAddMeal} dateRange={dateRange} />
        )}
        {flight === true && (
          <AddFlight onCloseModal={handleflight} dateRange={dateRange} />
        )}

        {updateSightSheeing === true && (
          <EditSightSheeing
            onCloseModal={handUpdateSightSheeing}
            dateRange={dateRange}
          />
        )}

        {updateTransferState === true && (
          <EditTransfer
            onCloseModal={handupdateTransferState}
            dateRange={dateRange}
          />
        )}
        <div className="flex p-2 space-x-2 text-sm font-bold text-gray-800 bg-[#546f80]">
          <div>
            {" "}
            Day- {index} &nbsp;
            {date}
          </div>

          <div
            className="flex items-center p-1 space-x-1 text-sm text-gray-800 bg-white rounded-sm shadow-lg cursor-pointer"
            // onClick={() => sethotelManual(true)}
            onClick={() =>
              dispatch(
                addHotelManualModel({
                  addHotelManualState: true,
                  date: date, // Make sure 'date' is defined and accessible
                })
              )
            }
          >
            <div>
              Hotel Manual
              {/* <FaHotel /> */}
            </div>
          </div>
          <div
            className="flex items-center p-1 space-x-1 text-sm text-gray-800 bg-white rounded-sm shadow-lg cursor-pointer"
            onClick={() =>
              dispatch(
                addHotelModel({
                  addHotelstate: true,
                  date: date,
                })
              )
            }
          >
            <div>
              Hotel
              {/* <FaHotel /> */}
            </div>
          </div>
          <div
            className="flex items-center p-1 space-x-1 text-sm text-gray-800 bg-white rounded-sm shadow-lg cursor-pointer"
            onClick={() =>
              dispatch(
                addmanualSightSheeingModel({
                  addmanualSightSheeingState: true,
                  date: date,
                })
              )
            }
          >
            <div>
              Manual SightSheeing
              {/* <FaHotel /> */}
            </div>
          </div>
          <div
            className="flex items-center p-1 space-x-1 text-sm text-gray-800 bg-white rounded-sm shadow-lg cursor-pointer"
            onClick={() =>
              dispatch(
                addsightSheeingModel({
                  addsightSheeingState: true,
                  date: date,
                })
              )
            }
          >
            <div>
              SightSheeing
              {/* <FaHotel /> */}
            </div>
          </div>
          <div
            className="flex items-center p-1 space-x-1 text-sm text-gray-800 bg-white rounded-sm shadow-lg cursor-pointer"
            onClick={() =>
              dispatch(
                addmanualTransferModel({
                  addmanualTransferState: true,
                  date: date,
                })
              )
            }
          >
            <div>
              Manual Transfer
              {/* <FaHotel /> */}
            </div>
          </div>
          <div
            className="flex items-center p-1 space-x-1 text-sm text-gray-800 bg-white rounded-sm shadow-lg cursor-pointer"
            onClick={() =>
              dispatch(addtransferModel({ addtransferState: true, date: date }))
            }
          >
            <div>
              Transfer
              {/* <FaHotel /> */}
            </div>
          </div>
          <div
            className="flex items-center p-1 space-x-1 text-sm text-gray-800 bg-white rounded-sm shadow-lg cursor-pointer"
            onClick={() =>
              dispatch(addmealModel({ addmealState: true, date: date }))
            }
          >
            <div>
              Meal
              {/* <FaHotel /> */}
            </div>
          </div>
          <div
            className="flex items-center p-1 space-x-1 text-sm text-gray-800 bg-white rounded-sm shadow-lg cursor-pointer"
            onClick={() =>
              dispatch(addflightModel({ addflightState: true, date: date }))
            }
          >
            <div>
              Flight
              {/* <FaHotel /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAllPackage;
