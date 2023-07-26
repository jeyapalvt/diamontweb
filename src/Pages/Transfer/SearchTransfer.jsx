import React, { useState } from "react";
import { Button, InputComp, DefaultDate, RadioButton } from "../../Components";
const SearchTransfer = () => {
  const today = DefaultDate();
  const [transMode, settransMode] = useState();
  return (
    <div>
      <div className="flex flex-col items-center justify-between p-2 bg-[#28166f] sm:flex-row ">
        <div className="text-2xl font-bold text-white">Transport Search</div>

        <div>
          <div className="flex flex-wrap items-center space-x-3 text-white sm:px-14">
            <div className="flex mt-4 space-x-5 ">
              <div>
                <RadioButton
                  label="One Way"
                  name="transMode"
                  txtColor={true}
                  value="1"
                  onChange={(e) => settransMode(e.target.value)}
                />
              </div>
              <div>
                {" "}
                <RadioButton
                  label="Two Way"
                  name="transMode"
                  txtColor={true}
                  value="2"
                  onChange={(e) => settransMode(e.target.value)}
                />
              </div>
            </div>
            <div>
              <InputComp type="date" defaultValue={today} id="fDate" />
            </div>
            <div>
              {transMode === "2" && <InputComp type="date" id="fDate" />}
            </div>
            <div>
              <InputComp
                type="text"
                id="fDate"
                placeholder="City, Destination"
              />
            </div>
            <div>
              <InputComp type="text" id="fDate" placeholder="pick up" />
            </div>
            <div>
              <InputComp type="text" id="fDate" placeholder="drop of" />
            </div>
            <div>
              <Button name="search" color="red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTransfer;
