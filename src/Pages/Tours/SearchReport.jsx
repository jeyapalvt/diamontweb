import React from "react";
import { Button, InputComp } from "../../Components";
import { useNavigate } from "react-router-dom";
import BookingTable from "./BookingTable";
const SearchReport = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center p-2 mt-5 bg-white sm:flex-row sm:justify-end">
        <div className="flex flex-wrap space-x-2 text-black ">
          <div className="mt-6">
            <Button name="Add Query" onClick={() => navigate("/toursmaster")} />
          </div>
          <InputComp type="date" label="Start Date" id="sdate" />
          <InputComp type="date" label="End Date" id="edate" />
          <InputComp
            type="text"
            label="Query Id"
            id="Query Id"
            placeholder="Query Id"
          />
          <InputComp
            type="text"
            label="Lead Source"
            id="Lead Source"
            placeholder="Lead Source"
          />{" "}
          <InputComp
            type="text"
            label="Agent Type"
            id="Agent Type"
            placeholder="Agent Type"
          />{" "}
          <InputComp
            type="text"
            label="Subject"
            id="Subject"
            placeholder="Subject"
          />{" "}
          <InputComp
            type="text"
            label="Status"
            id="Status"
            placeholder="Status"
          />{" "}
          <div className="mt-6">
            <Button name="search" />
          </div>
        </div>
      </div>

      <div className="flex items-center p-5 space-x-5 text-center text-white bg-white">
        <div className="w-1/6 bg-[#008080] h-20 rounded-md shadow-md p-2 justify-center flex flex-col ">
          <div className="text-sm font-bold">Total Query</div>
          <div>13500</div>
        </div>
        <div className="w-1/6 bg-[#800080] h-20 rounded-md shadow-md p-2 justify-center flex flex-col">
          <div className="text-sm font-bold">Pending</div>
          <div>300</div>
        </div>
        <div className="w-1/6 bg-[#4682B4] h-20 rounded-md shadow-md p-2 justify-center flex flex-col">
          <div className="text-sm font-bold">Reverted</div>
          <div>599</div>
        </div>
        <div className="w-1/6 bg-[#808000] h-20 rounded-md shadow-md p-2 justify-center flex flex-col">
          <div className="text-sm font-bold">Reverted</div>
          <div>498237</div>
        </div>
        <div className="w-1/6 bg-[#483D8B] h-20 rounded-md shadow-md p-2 justify-center flex flex-col">
          <div className="text-sm font-bold">Cancelled</div>
          <div>1253</div>
        </div>
        <div className="w-1/6 bg-[#D2691E] h-20 rounded-md shadow-md p-2 justify-center flex flex-col">
          <div className="text-sm font-bold">Lost</div>
          <div>500</div>
        </div>
      </div>
      <BookingTable />
    </>
  );
};

export default SearchReport;
