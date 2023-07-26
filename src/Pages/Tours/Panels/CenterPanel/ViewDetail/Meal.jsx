import React, { useState } from "react";
import { GiOpenedFoodCan } from "react-icons/gi";
import AddMeal from "../../Models/AddMeal";
const Meal = () => {
  const [showAddMeal, setshowAddMeal] = useState(false);
  const handleClose = () => {
    setshowAddMeal(false);
    // Add additional logic or actions to handle closing the modal in the parent component
  };
  return (
    <div>
      {showAddMeal === true && <AddMeal onCloseModal={handleClose} />}
      <div className="p-5">
        <div className="flex items-end justify-end space-x-2 text-sm font-bold">
          <div
            className="flex items-center p-1 space-x-2 text-sm text-white bg-green-700 cursor-pointer"
            onClick={() => setshowAddMeal(true)}
          >
            <div>
              <GiOpenedFoodCan />
            </div>
            <div>Add Meal</div>
          </div>
        </div>
        <table className="w-full border border-collapse table-auto">
          <thead className="text-sm font-bold text-gray-800 bg-slate-300">
            <tr>
              <th className="w-2/12 p-2 border">MEAL</th>

              <th className="w-1/12 p-2 border"> LOCATION</th>
              <th className="w-1/12 p-2 border">TYPE</th>
              <th className="w-1/12 p-2 border">CUR</th>
              <th className="w-1/12 p-2 border">ADULTS</th>
              <th className="w-1/12 p-2 border">ADULT COST</th>
              <th className="w-1/12 p-2 border">CHILD</th>
              <th className="w-1/12 p-2 border">CHILD COST</th>
              <th className="w-2/12 p-2 border">VEHICLE COST</th>
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

export default Meal;
