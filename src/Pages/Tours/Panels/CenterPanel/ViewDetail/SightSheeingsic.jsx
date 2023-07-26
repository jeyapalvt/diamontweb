import React, { useState } from "react";
import { GiParkBench } from "react-icons/gi";
import AddManualSightSheeing from "../../Models/AddManualSightSheeing";
import AddSightSheeing from "../../Models/AddSightSheeing";
const SightSheeingsic = () => {
  const [showManulSheeing, setshowManulSheeing] = useState(false);
  const [showSightSheeing, setshowSightSheeing] = useState(false);
  const handleCloseManual = () => {
    setshowManulSheeing(false);
    // Add additional logic or actions to handle closing the modal in the parent component
  };
  const handleCloseSightSheeing = () => {
    setshowSightSheeing(false);
    // Add additional logic or actions to handle closing the modal in the parent component
  };
  return (
    <div>
      {showManulSheeing === true && (
        <AddManualSightSheeing onCloseModal={handleCloseManual} />
      )}
      {showSightSheeing === true && (
        <AddSightSheeing onCloseModal={handleCloseSightSheeing} />
      )}
      <div className="px-5">
        <div className="flex items-end justify-end space-x-2 text-sm font-bold">
          <div
            className="flex items-center p-1 space-x-2 text-sm text-white bg-blue-700 cursor-pointer"
            onClick={() => setshowManulSheeing(true)}
          >
            <div>
              <GiParkBench />
            </div>
            <div>Add Manual SightSeeing</div>
          </div>
          <div
            className="flex items-center p-1 space-x-1 text-sm text-white bg-green-700 cursor-pointer"
            onClick={() => setshowSightSheeing(true)}
          >
            <div>
              <GiParkBench />
            </div>
            <div>Add SightSeeing</div>
          </div>
        </div>
        <table className="w-full border border-collapse table-auto">
          <thead className="text-sm font-bold text-gray-800 bg-slate-300">
            <tr>
              <th className="w-7/12 p-2 border">SIGHTSEEING SIC</th>

              <th className="w-1/12 p-2 border">CUR</th>
              <th className="w-1/12 p-2 border">ADULT</th>
              <th className="w-1/12 p-2 border">CHILD</th>
              <th className="w-1/12 p-2 border">INFANT</th>
              <th className="w-1/12 p-2 border"></th>
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

export default SightSheeingsic;
