import React, { useState } from "react";
import CartItems from "../CartItems/CartItems";
import { InputComp } from "../../Components";
import DataList from "./DataList";
import SearchTransfer from "./SearchTransfer";
import TransferData from "./TransferData";
const Transfer = () => {
  const [searchkey, setsearchkey] = useState("");
  const [priceRange, setpriceRange] = useState([
    { name: "$5000 - Above", value: "5000" },
    { name: "$4000 - 5000", value: "4000" },
    { name: "$3000 - 4000", value: "3000" },
    { name: "$2000 - 3000", value: "2000" },
    { name: "$2000 - Below", value: "" },
  ]);

  return (
    <div>
      <SearchTransfer />
      <div className="mt-5">
        <div className="flex justify-between">
          <div className="w-2/12 px-2">
            <div className="w-full">
              <CartItems />
            </div>
          </div>
          <div className="w-8/12 px-2">
            <div className="flex items-center justify-end h-16 px-10 bg-white rounded-md shadow-md">
              <InputComp
                type="text"
                id="search"
                placeholder="search"
                onChange={(e) => setsearchkey(e.target.value)}
              />
            </div>
            <DataList dataList={TransferData} />
          </div>
          <div className="w-2/12 px-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
