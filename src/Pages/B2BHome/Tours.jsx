import React from "react";
import { InputComp, Button, DefaultDate, DropDown } from "../../Components";
import { useNavigate } from "react-router-dom";
const Tours = () => {
  const navigate = useNavigate();
  const today = DefaultDate();
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  const locations = [
    { name: "Dubai", value: "dubai" },
    { name: "Abu Dhabi", value: "abu dhabi" },
  ];
  return (
    <div>
      <div className="grid grid-cols-5 gap-4">
        <div>
          <DropDown
            type="text"
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
            min={disablePastDate()}
          />
        </div>
        <div>
          <InputComp type="text" label="Adult" placeholder="Adult" />
        </div>
        <div>
          <InputComp type="text" label="Child" placeholder="Child" />
        </div>
        <div className="mt-7">
          <Button name="Search" onClick={() => navigate("/tourslist")} />
        </div>
      </div>
    </div>
  );
};

export default Tours;
