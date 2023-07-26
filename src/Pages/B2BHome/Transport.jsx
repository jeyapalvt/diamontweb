import React, { useState } from "react";
import { Button, InputComp, RadioButton } from "../../Components";
import { useNavigate } from "react-router-dom";
const Transport = () => {
  const navigate = useNavigate();
  const [transMode, settransMode] = useState();
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="flex space-x-5">
            <div>
              <RadioButton
                label="One Way"
                name="transMode"
                value="1"
                onChange={(e) => settransMode(e.target.value)}
              />
            </div>
            <div>
              {" "}
              <RadioButton
                label="Two Way"
                name="transMode"
                value="2"
                onChange={(e) => settransMode(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <InputComp type="date" id="fDate" />
        </div>
        <div>{transMode === "2" && <InputComp type="date" id="fDate" />}</div>
        <div>
          <InputComp type="text" id="fDate" placeholder="City, Destination" />
        </div>
        <div>
          <InputComp type="text" id="fDate" placeholder="pick up" />
        </div>
        <div>
          <InputComp type="text" id="fDate" placeholder="drop of" />
        </div>
        <div className="col-start-3">
          <Button name="Search" onClick={() => navigate("/transferlist")} />
        </div>
      </div>
    </div>
  );
};

export default Transport;
