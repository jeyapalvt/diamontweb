import React from "react";
import { InputComp, Button } from "../../Components";
const TransportBooking = () => {
  return (
    <div>
      <div className="flex flex-col items-center bg-yellow-400 sm:flex-row sm:justify-end">
        <div className="flex flex-wrap space-x-3 text-white align-middle sm:px-14">
          <div className="mb-3">
            <InputComp type="date" id="date" placeholder="From" label="From" />
          </div>
          <div className="mb-3">
            <InputComp type="date" id="date" placeholder="To" label="To" />
          </div>
          <div className="mb-3">
            <InputComp
              type="number"
              id="refNum"
              placeholder="Reference Number"
              label="Reference Number"
            />
          </div>
          {/* <div className="mb-3">
            <InputComp type="number" id="adult" placeholder="Adult" />
          </div> */}
          <div className="mb-3 mt-7">
            <Button name="Get Report" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportBooking;
