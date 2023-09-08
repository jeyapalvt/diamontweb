import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BiUpArrowAlt } from "react-icons/bi";
const QueryCount = () => {
  return (
    <div>
      <div className="flex items-center p-5 space-x-5 text-center text-white">
        <div className="w-1/6 bg-[#008080] h-auto rounded-md shadow-md p-2 justify-center flex flex-col ">
          <div className="">5</div>
          <div className="mt-2 text-sm font-bold">Today`s Queries</div>
          <div className="mt-2 text-sm">
            <div className="flex items-center justify-center text-center">
              <BiUpArrowAlt size={20} />
              4% Last week
            </div>
          </div>
        </div>
        <div className="w-1/6 bg-[#800080] h-auto rounded-md shadow-md p-2 justify-center flex flex-col">
          <div className="">6</div>
          <div className="mt-2 text-sm font-bold">Yesterday`s Queries</div>
          <div className="mt-2 text-sm">
            <div className="flex items-center justify-center text-center">
              <BiUpArrowAlt size={18} />
              8% Last week
            </div>
          </div>
        </div>
        <div className="w-1/6 bg-[#4682B4] h-auto rounded-md shadow-md p-2 justify-center flex flex-col">
          <div className="">47</div>
          <div className="mt-2 text-sm font-bold">Aug Month Queries</div>
          <div className="mt-2 text-sm">
            <div className="flex items-center justify-center text-center">
              <AiOutlineArrowDown size={18} />
              100% Last Month
            </div>
          </div>
        </div>
        <div className="w-1/6 bg-[#808000] h-auto rounded-md shadow-md p-2 justify-center flex flex-col">
          <div className="">48</div>
          <div className="mt-2 text-sm font-bold">Aug Confirm Queries</div>
          <div className="mt-2 text-sm">
            <div className="flex items-center justify-center text-center">
              <AiOutlineArrowDown size={18} />
              0% Last Month
            </div>
          </div>
        </div>
        <div className="w-1/6 bg-[#483D8B] h-auto rounded-md shadow-md p-2 justify-center flex flex-col">
          <div className="">52</div>
          <div className="mt-2 text-sm font-bold">Aug Invoice</div>
          <div className="mt-2 text-sm">
            <div className="flex items-center justify-center text-center">
              <AiOutlineArrowDown size={18} />
              100% Last Month
            </div>
          </div>
        </div>
        <div className="w-1/6 bg-[#D2691E] h-auto rounded-md shadow-md p-2 justify-center flex flex-col">
          <div className="">40</div>
          <div className="mt-2 text-sm font-bold">Aug Voucher</div>
          <div className="mt-2 text-sm">
            <div className="flex items-center justify-center text-center">
              <AiOutlineArrowDown size={18} />
              100% Last Month
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryCount;
