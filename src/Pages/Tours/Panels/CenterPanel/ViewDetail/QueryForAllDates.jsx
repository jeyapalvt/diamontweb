import React, { useState, useEffect } from "react";
import AddAllPackage from "./AddAllPackage";
import { useSelector, useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";

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
import {
  editHotelManual,
  editSightSeeingManual,
  editTransferManual,
} from "../../../../../Reducers/updateMainQuery";
import {
  updateManualHotelRecord,
  updateSightSeeingManual,
  updatetransferManual,
} from "../../../../../Reducers/mainQuerySlice";
import { slider } from "@material-tailwind/react";
const QueryForAllDates = ({ dateRange }) => {
  const dispatch = useDispatch();
  const initialHotelManual = useSelector(
    (state) => state.mainQuery.hotelManual
  );

  const initialSightSheeingManul = useSelector(
    (state) => state.mainQuery.sightSeeingManual
  );

  const initialTransferManul = useSelector(
    (state) => state.mainQuery.transferManul
  );
  useEffect(() => {
    // Fetch or update initialHotelManual here
  }, [initialHotelManual]);
  const updateManualHotelRec = (date, key, editOrDelete, addedWay) => {
    console.log("aaded way addedWayaddedWay", date);
    if (editOrDelete == 1) {
      const singleRec = initialHotelManual[key]?.find(
        (item) => new Date(item.checkInDate).toDateString() == date
      );
      if (singleRec) {
        const withIdObject = {
          ...singleRec,
          id: key,
          editOrDelete: editOrDelete,
        };

        dispatch(editHotelManual(withIdObject));

        if (addedWay == "1") {
          dispatch(
            addHotelManualModel({
              addHotelManualState: true,
              date: "",
            })
          );
        } else {
          // dispatch(
          //   addHotelModel({
          //     addHotelstate: true,
          //     date: "",
          //   })
          // );
          dispatch(
            addHotelManualModel({
              addHotelManualState: true,
              date: "",
            })
          );
        }
      }
    } else {
      const newsubmitObjects = [];

      for (let i = 0; i < initialHotelManual.length; i++) {
        const tempsubmitObject = [];
        if (key == i) {
          for (let j = 0; j < initialHotelManual[i].length; j++) {
            const checkInDate = initialHotelManual[i][j].checkInDate;
            const nextDay = new Date(date);
            nextDay.setDate(nextDay.getDate() + 1);

            if (nextDay.toISOString().slice(0, 10) !== checkInDate) {
              tempsubmitObject.push(initialHotelManual[i][j]);
            } else {
              tempsubmitObject.push();
            }
          }
          newsubmitObjects.push(tempsubmitObject);
        } else {
          newsubmitObjects.push(initialHotelManual[i]);
        }
      }
      dispatch(updateManualHotelRecord(newsubmitObjects));
    }
  };

  const getManulHotelRecord = (date, sethotelManual) => {
    const records = [];
    if (initialHotelManual) {
      for (const key in initialHotelManual) {
        const singleRec = initialHotelManual[key]?.find(
          (item) => new Date(item.checkInDate).toDateString() == date
        );

        console.log("singleRec", singleRec);
        if (singleRec) {
          records.push(
            <div className="px-5" key={key}>
              <div className="flex justify-between text-sm font-bold border divide-x hover:bg-yellow-100">
                <div className="p-1 ">
                  <div>
                    <div>Hotel {Number(key)}</div>
                  </div>
                </div>
                <div>
                  {singleRec?.hotelName}( {singleRec?.category})
                </div>
                <div className="p-1">
                  <div>Room:{singleRec?.roomType}</div>
                  <div>Meal:{singleRec?.mealPlan}</div>
                </div>
                <div className="p-1">
                  <div className="flex">
                    <div>SGL: </div>
                    <div className="font-normal">AED{singleRec?.sglCost} </div>
                  </div>
                  <div>Room:{singleRec?.roomType}</div>
                </div>
                <div className="p-1">
                  <div className="flex">
                    <div>DBL:</div>
                    <div className="font-normal">AED{singleRec?.dblCost}</div>
                  </div>
                  <div className="flex">
                    <div>Room:</div>
                    <div>{singleRec?.roomType}</div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="flex">
                    <div>TRPL:</div>
                    <div className="font-normal">
                      {" "}
                      AED {singleRec?.trplCost}
                    </div>
                  </div>
                  <div>Room:{singleRec?.roomType}</div>
                </div>
                <div className="p-1">
                  <div className="flex">
                    <div>QUAD:</div>
                    <div className="font-normal">
                      {" "}
                      AED {singleRec?.quadCost}
                    </div>
                  </div>

                  <div>Room:{singleRec?.roomType}</div>
                </div>
                <div className="p-1">
                  <div className="flex">
                    <div>CWB:</div>
                    <div className="font-normal">AED {singleRec?.cwbCost}</div>
                  </div>
                  <div>Room:{singleRec?.roomType}</div>
                </div>
                <div className="p-1">
                  <div className="flex">
                    <div>CNB:</div>
                    <div className="font-normal">
                      AED {singleRec?.cnbCostAbove05}
                    </div>
                  </div>

                  <div>Room:{singleRec?.roomType}</div>
                </div>
                <div className="p-1">
                  <div className="flex">
                    <div>CNB:</div>
                    <div className="font-normal">
                      AED {singleRec?.cnbCostBelow05}
                    </div>
                  </div>

                  <div>Room:{singleRec?.roomType}</div>
                </div>
                <div className="p-1">
                  <div className="flex">
                    <div>INF:</div>
                    <div className="font-normal">AED {singleRec?.infCost}</div>
                  </div>
                  <div>Room:{singleRec?.roomType}</div>
                </div>
                <div className="flex p-1 space-x-2">
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      updateManualHotelRec(date, key, 1, singleRec?.addedWay)
                    }
                  >
                    <HiPencil size={18} color="blue" />
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => updateManualHotelRec(date, key, 2)}
                  >
                    <AiFillDelete size={18} color="red" />
                  </div>
                </div>
                {/* <div>{singleRec?.checkInDate}</div> */}
              </div>
            </div>
          );
        } else {
        }
      }
      return records;
    }
  };

  const updateManulSightSheeingRec = (date, key, editOrDelete, addedType) => {
    console.log("avsauvsuavuxvauvxa", date);
    if (editOrDelete == 1) {
      const singleRec = initialSightSheeingManul[key]?.find(
        (item) => new Date(item.visitDate).toDateString() == date
      );
      if (singleRec) {
        const withIdObject = {
          ...singleRec,
          id: key,
          editOrDelete: editOrDelete,
        };

        console.log("singleRec", singleRec);

        dispatch(editSightSeeingManual(withIdObject));

        if (addedType == "1") {
          dispatch(
            updateSightSheeingModel({
              updateSightSheeingState: true,
              date: date,
            })
          );
          // dispatch(
          //   addmanualSightSheeingModel({
          //     addmanualSightSheeingState: true,
          //     date: date,
          //   })
          // );
        } else {
          dispatch(
            updateSightSheeingModel({
              updateSightSheeingState: true,
              date: date,
            })
          );
          // dispatch(
          //   addsightSheeingModel({
          //     addsightSheeingState: true,
          //     date: date,
          //   })
          // );
        }
      }
    } else {
      //delete here

      const newsubmitObjects = [];

      for (let i = 0; i < initialSightSheeingManul.length; i++) {
        const tempsubmitObject = [];

        if (key == i) {
          for (let j = 0; j < initialSightSheeingManul[i].length; j++) {
            const checkInDate = initialSightSheeingManul[i][j].visitDate;
            const nextDay = new Date(date);
            nextDay.setDate(nextDay.getDate() + 1);

            if (
              nextDay.toISOString().slice(0, 10) !==
              checkInDate.toISOString().slice(0, 10)
            ) {
              tempsubmitObject.push(initialSightSheeingManul[i][j]);
            } else {
              tempsubmitObject.push();
            }
          }
          newsubmitObjects.push(tempsubmitObject);
        } else {
          newsubmitObjects.push(initialSightSheeingManul[i]);
        }
      }
      dispatch(updateSightSeeingManual(newsubmitObjects));
    }
  };

  const getManulSightSheeingRecord = (date) => {
    const records = [];

    if (initialSightSheeingManul) {
      for (const key in initialSightSheeingManul) {
        const singleRec = initialSightSheeingManul[key]?.find(
          (item) => new Date(item.visitDate).toDateString() == date
        );

        if (singleRec) {
          records.push(
            <div className="px-5" key={key}>
              <div className="flex justify-between text-sm font-bold border divide-x hover:bg-yellow-100">
                <div className="p-1 ">SightSheeing({singleRec?.type})</div>

                <div className="p-1"></div>
                <div className="p-1">
                  <div className="">
                    <div>Adult Cost: </div>
                    <div className="font-normal">
                      AED{singleRec?.adultCost}{" "}
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="">
                    <div>Child Cost:</div>
                    <div className="font-normal">AED{singleRec?.childCost}</div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="">
                    <div>Infant Cost:</div>
                    <div className="font-normal">
                      {" "}
                      AED {singleRec?.infantCost}
                    </div>
                  </div>
                </div>
                <div className="p-1"></div>
                <div className="p-1"></div>
                <div className="p-1"></div>
                <div className="p-1"></div>
                <div className="p-1"></div>
                <div className="flex p-1 space-x-2">
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      updateManulSightSheeingRec(
                        date,
                        key,
                        1,
                        singleRec?.addedType
                      )
                    }
                  >
                    <HiPencil size={18} color="blue" />
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => updateManulSightSheeingRec(date, key, 2)}
                  >
                    <AiFillDelete size={18} color="red" />
                  </div>
                </div>
                {/* <div>{singleRec?.checkInDate}</div> */}
              </div>
            </div>
          );
        } else {
        }
      }
    }

    return records;
  };
  const updateManulTransfer = (date, key, editOrDelete, addedType) => {
    if (editOrDelete == 1) {
      const singleRec = initialTransferManul[key]?.find(
        (item) => new Date(item.checkInDate).toDateString() == date
      );
      if (singleRec) {
        const withIdObject = {
          ...singleRec,
          id: key,
          editOrDelete: editOrDelete,
        };

        dispatch(editTransferManual(withIdObject));
        if (addedType == "1") {
          dispatch(
            updateTransferStateModel({
              updateTransferState: true,
              date: date,
            })
          );
          // dispatch(
          //   addmanualTransferModel({
          //     addmanualTransferState: true,
          //     date: date,
          //   })
          // );
        } else {
          dispatch(
            updateTransferStateModel({
              updateTransferState: true,
              date: date,
            })
          );
          // dispatch(addtransferModel({ addtransferState: true, date: date }));
        }
      }
    } else {
      //delete here

      const newsubmitObjects = [];

      for (let i = 0; i < initialTransferManul.length; i++) {
        const tempsubmitObject = [];

        if (key == i) {
          for (let j = 0; j < initialTransferManul[i].length; j++) {
            const checkInDate = initialTransferManul[i][j].checkInDate;
            const nextDay = new Date(date);
            nextDay.setDate(nextDay.getDate() + 1);

            if (
              nextDay.toISOString().slice(0, 10) !==
              checkInDate.toISOString().slice(0, 10)
            ) {
              tempsubmitObject.push(initialTransferManul[i][j]);
            } else {
              tempsubmitObject.push();
            }
          }
          newsubmitObjects.push(tempsubmitObject);
        } else {
          newsubmitObjects.push(initialTransferManul[i]);
        }
      }
      dispatch(updatetransferManual(newsubmitObjects));
    }
  };

  const getManulTransferRecord = (date) => {
    const records = [];

    if (initialTransferManul) {
      for (const key in initialTransferManul) {
        const singleRec = initialTransferManul[key]?.find(
          (item) => new Date(item.checkInDate).toDateString() == date
        );

        if (singleRec) {
          records.push(
            <div className="px-5" key={key}>
              <div className="flex justify-between text-sm font-bold border divide-x hover:bg-yellow-100">
                <div className="p-1 ">Transfer({singleRec?.type})</div>

                <div className="p-1">
                  <div>Ferry Name:{singleRec?.roomType}</div>
                  <div>Ferry Class:{singleRec?.mealPlan}</div>
                </div>

                <div className="p-1">
                  <div className="">
                    <div>Adult Cost: </div>
                    <div className="font-normal">
                      AED{singleRec?.adultCost}{" "}
                    </div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="">
                    <div>Child Cost:</div>
                    <div className="font-normal">AED{singleRec?.childCost}</div>
                  </div>
                </div>
                <div className="p-1">
                  <div className="">
                    <div>Infant Cost:</div>
                    <div className="font-normal">
                      {" "}
                      AED {singleRec?.infantCost}
                    </div>
                  </div>
                </div>

                <div className="p-1"></div>
                <div className="p-1"></div>
                <div className="p-1"></div>
                <div className="p-1"></div>
                <div className="p-1"></div>
                <div className="flex p-1 space-x-2">
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      updateManulTransfer(date, key, 1, singleRec?.addedType)
                    }
                  >
                    <HiPencil size={18} color="blue" />
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => updateManulTransfer(date, key, 2)}
                  >
                    <AiFillDelete size={18} color="red" />
                  </div>
                </div>
                {/* <div>{singleRec?.checkInDate}</div> */}
              </div>
            </div>
          );
        } else {
        }
      }
    }

    return records;
  };
  let index = 1;

  const renderDates = () => {
    const result = [];

    for (const key in dateRange) {
      const fromDate = new Date(dateRange[key].fromDate);
      const toDate = new Date(dateRange[key].toDate);

      while (fromDate <= toDate) {
        result.push(
          <div key={fromDate}>
            <AddAllPackage
              index={index}
              date={fromDate.toDateString()}
              dateRange={dateRange}
            />

            <div>{getManulHotelRecord(fromDate.toDateString())}</div>
            <div>{getManulSightSheeingRecord(fromDate.toDateString())}</div>
            <div>{getManulTransferRecord(fromDate.toDateString())}</div>
          </div>
        );

        fromDate.setDate(fromDate.getDate() + 1);
        index++;
      }
    }

    return result;
  };

  return <div>{renderDates()} </div>;
};

export default QueryForAllDates;
