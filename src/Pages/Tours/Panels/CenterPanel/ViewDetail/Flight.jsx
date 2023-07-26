import React, { useState } from "react";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import AddFlight from "../../Models/AddFlight";
const Flight = () => {
  const [showFlightModel, setshowFlightModel] = useState(false);
  const handleClose = () => {
    setshowFlightModel(false);
    // Add additional logic or actions to handle closing the modal in the parent component
  };
  return (
    <div>
      {showFlightModel === true && <AddFlight onCloseModal={handleClose} />}
      <div className="p-5">
        <div className="flex items-end justify-end space-x-2 text-sm font-bold">
          <div
            className="flex items-center p-1 space-x-2 text-sm text-white bg-green-700 cursor-pointer"
            onClick={() => setshowFlightModel(true)}
          >
            <div>
              <MdOutlineFlightTakeoff />
            </div>
            <div>Add Flight</div>
          </div>
        </div>
        <table className="w-full border border-collapse table-auto">
          <thead className="text-sm font-bold text-gray-800 bg-slate-300">
            <tr>
              <th className="w-4/12 p-2 border">Trip</th>
              <th className="w-2/12 p-2 border">FLIGHT</th>
              <th className="w-2/12 p-2 border">CUR</th>
              <th className="w-2/12 p-2 border">ADULT COST</th>

              <th className="w-2/12 p-2 border">CHILD COST</th>
            </tr>
          </thead>
          <tbody className="text-md">
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Flight;
