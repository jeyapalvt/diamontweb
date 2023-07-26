import React from "react";
import { Button, InputComp, DefaultDate, DropDown } from "../../Components";
import { useNavigate } from "react-router-dom";
const Activity = () => {
  const navigate = useNavigate();
  const today = DefaultDate();
  const locations = [
    { name: "Dubai", value: "dubai" },
    { name: "Abu Dhabi", value: "abu dhabi" },
  ];
  return (
    <div>
      <div className="grid grid-cols-5 gap-4">
        <div>
          <DropDown
            label="Loaction"
            placeholder="location"
            options={locations}
          />
        </div>
        <div>
          <InputComp
            type="date"
            label="Date"
            placeholder="date"
            defaultValue={today}
          />
        </div>
        <div>
          <InputComp type="text" label="Adult" placeholder="Adult" />
        </div>
        <div>
          <InputComp type="text" label="Child" placeholder="Child" />
        </div>
        <div className="mt-7">
          <Button name="Search" onClick={() => navigate("/activitylist")} />
        </div>
      </div>
    </div>
  );
};

export default Activity;
