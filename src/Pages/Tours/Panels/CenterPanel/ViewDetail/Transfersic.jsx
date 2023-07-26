import React, { useState } from "react";
import { AiFillCar } from "react-icons/ai";
import AddManualTransfer from "../../Models/AddManualTransfer";
import AddTransfer from "../../Models/AddTransfer";
const Transfersic = () => {
  const [showManualTransfer, setshowManualTransfer] = useState(false);
  const [showTransfer, setshowTransfer] = useState(false);
  const handleCloseManual = () => {
    setshowManualTransfer(false);
    // Add additional logic or actions to handle closing the modal in the parent component
  };
  const handleCloseTransfer = () => {
    setshowTransfer(false);
    // Add additional logic or actions to handle closing the modal in the parent component
  };
  return (
    <div>
      {showManualTransfer === true && (
        <AddManualTransfer onCloseModal={handleCloseManual} />
      )}
      {showTransfer === true && (
        <AddTransfer onCloseModal={handleCloseTransfer} />
      )}
      <div className="mx-5 mt-5">
        <div className="flex items-end justify-end space-x-2 text-sm font-bold">
          <div
            className="flex items-center p-1 space-x-2 text-sm text-white bg-blue-700 cursor-pointer"
            onClick={() => setshowManualTransfer(true)}
          >
            <div>
              <AiFillCar />
            </div>
            <div>Add Manual Transfer</div>
          </div>
          <div
            className="flex items-center p-1 space-x-1 text-sm text-white bg-green-700 cursor-pointer"
            onClick={() => setshowTransfer(true)}
          >
            <div>
              <AiFillCar />
            </div>
            <div>Add Transfer</div>
          </div>
        </div>
        <table className="w-full border border-collapse table-auto">
          <thead className="text-sm font-bold text-gray-800 bg-slate-300">
            <tr>
              <th className="w-5/12 p-2 border">TRANSFER SIC</th>

              <th className="w-1/12 p-2 border">FROM/TO</th>
              <th className="w-1/12 p-2 border">CUR</th>
              <th className="w-1/12 p-2 border">ADULT</th>
              <th className="w-1/12 p-2 border">CHILD</th>
              <th className="w-1/12 p-2 border">
                INFANT<span className="text-esm">(BL 03 yr)</span>
              </th>
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

export default Transfersic;
