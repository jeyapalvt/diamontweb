import React from "react";
import VisaData from "./VisaData";
import CartItems from "../CartItems/CartItems";
import { InputComp, Button } from "../../Components";
const Visa = () => {
  const visaList = VisaData.map((item, index) => (
    <div key={index}>
      <div className="py-3">
        <div className="h-40 bg-white rounded-lg shadow-md sm:flex">
          <div className="w-1/5">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={item.imgurl}
              alt="activity/thumbnail"
            />
          </div>
          <div className="flex flex-col justify-between w-3/5 ">
            <div className="p-3">
              <div className="font-bold text-gray-600">{item.visaType}</div>
              <div className="text-sm text-gray-500">{item.insurance}</div>
            </div>

            <div className="flex mt-auto ml-2 mr-2 text-sm text-center">
              <div
                className="p-2 ml-2 bg-gray-200 rounded-tl-sm rounded-tr-sm cursor-pointer"
                // onClick={() => getDetail(item.attractionsId, "description")}
              >
                Description
              </div>
              <div
                className="p-2 ml-2 bg-gray-200 rounded-tl-sm rounded-tr-sm cursor-pointer"
                // onClick={() => getDetail(item.attractionsId, "t&c")}
              >
                Terms & Conditions
              </div>{" "}
              <div
                className="p-2 ml-2 bg-gray-200 rounded-tl-sm rounded-tr-sm cursor-pointer"
                // onClick={() => getDetail(item.attractionsId, "photos")}
              >
                Photos
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/5 p-3 mt-auto text-center">
            <div className="mb-4">
              <div className="text-sm text-orange-700">Price </div>
              <div className="font-semibold text-red-700">
                {" "}
                {item.amount} AED
              </div>
            </div>
            <div>
              <Button
                name="Book Now"
                // onClick={() => getDetail(item.attractionsId, "tkt")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="mt-5">
        <div className="flex justify-between">
          <div className="w-3/12 px-2">
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
            {visaList}
            {/* {hotelList} */}
            {/* list */}
          </div>
          <div className="w-2/12 px-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Visa;
