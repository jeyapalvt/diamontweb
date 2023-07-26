import React from "react";
import { Button, InputComp, DefaultDate } from "../../Components";
import { useNavigate } from "react-router-dom";
const SearchMeals = () => {
  const navigate = useNavigate();
  const today = DefaultDate();
  return (
    <div className="flex flex-col items-center justify-between p-2 bg-[#28166f] sm:flex-row ">
      <div className="text-2xl font-bold text-white">Meals Search</div>

      <div>
        <div className="flex flex-wrap items-center space-x-3 text-white sm:px-14">
          <div>
            <InputComp type="text" id="location" placeholder="Location" />
          </div>
          <div>
            <InputComp
              type="date"
              id="date"
              defaultValue={today}
              placeholder="Date"
            />
          </div>
          <div>
            <InputComp type="number" id="child" placeholder="Child" />
          </div>
          <div>
            <InputComp type="number" id="adult" placeholder="Adult" />
          </div>
          <div>
            <Button name="search" color="red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMeals;
