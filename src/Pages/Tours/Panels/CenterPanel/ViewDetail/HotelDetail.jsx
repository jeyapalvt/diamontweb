import React, { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { FaHotel } from "react-icons/fa";
import AddManualHotel from "../../Models/AddManualHotel";
import AddHotel from "../../Models/AddHotel";
const HotelDetail = () => {
  const [showManualHotel, setshowManualHotel] = useState(false);
  const [showHotel, setshowHotel] = useState(false);
  const handleCloseManual = () => {
    setshowManualHotel(false);
    // Add additional logic or actions to handle closing the modal in the parent component
  };
  const handleCloseHotel = () => {
    setshowHotel(false);
    // Add additional logic or actions to handle closing the modal in the parent component
  };
  return (
    <div>
      {showManualHotel === true && (
        <AddManualHotel onCloseModal={handleCloseManual} />
      )}
      {showHotel === true && <AddHotel onCloseModal={handleCloseHotel} />}
      <div className="p-5 ">
        <div className="flex items-end justify-end space-x-2 text-sm font-bold">
          <div
            className="flex items-center p-1 space-x-2 text-sm text-white bg-blue-700 cursor-pointer"
            onClick={() => setshowManualHotel(true)}
          >
            <div>
              <FaHotel />
            </div>
            <div>Add Manual Hotel</div>
          </div>
          <div
            className="flex items-center p-1 space-x-1 text-sm text-white bg-green-700 cursor-pointer"
            onClick={() => setshowHotel(true)}
          >
            <div>
              <FaHotel />
            </div>
            <div>Add Hotel</div>
          </div>
        </div>
        <table className="w-full border border-collapse table-auto">
          <thead className="text-sm font-bold text-gray-800 bg-slate-300">
            <tr>
              <th className="w-1/12 p-2 border">Hotel</th>
              <th className="w-1/12 p-2 border">Room/Meal</th>
              <th className="w-1/12 p-2 border">CUR</th>
              <th className="w-1/12 p-2 border">SGL</th>
              <th className="w-1/12 p-2 border">DBL</th>
              <th className="w-1/12 p-2 border">TRPL</th>
              <th className="w-0.5/12 p-2 border">CWB</th>
              <th className="w-2/12 p-2 border">
                CNB<span className="text-esm">(AB 05 yr)</span>
              </th>
              <th className="w-2/12 p-2 border">
                CNB<span className="text-esm">(BL 05 yr)</span>
              </th>
              <th className="w-2/12 p-2 border">
                INFANT<span className="text-esm">(BL 03 yr)</span>
              </th>
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

export default HotelDetail;
