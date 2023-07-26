import React, { useState } from "react";
import { MdOutlineAttractions } from "react-icons/md";
import AddExtraActivity from "../../Models/AddExtraActivity";
const ExtraActivity = () => {
  const [showActivityModel, setshowActivityModel] = useState(false);
  const handleClose = () => {
    setshowActivityModel(false);
    // Add additional logic or actions to handle closing the modal in the parent component
  };
  return (
    <div>
      {showActivityModel === true && (
        <AddExtraActivity onCloseModal={handleClose} />
      )}
      <div className="p-5">
        <div className="flex items-end justify-end space-x-2 text-sm font-bold">
          <div
            className="flex items-center p-1 space-x-2 text-sm text-white bg-green-700 cursor-pointer"
            onClick={() => setshowActivityModel(true)}
          >
            <div>
              <MdOutlineAttractions />
            </div>
            <div>Add Extra Activity</div>
          </div>
        </div>
        <table className="w-full border border-collapse table-auto">
          <thead className="text-sm font-bold text-gray-800 bg-slate-300">
            <tr>
              <th className="w-7/12 p-2 border">EXTRA ACTIVITY</th>

              <th className="w-1/12 p-2 border">TYPE</th>
              <th className="w-1/12 p-2 border">CUR</th>
              <th className="w-1/12 p-2 border">ADULTS</th>

              <th className="w-1/12 p-2 border">CHILD</th>

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

export default ExtraActivity;
