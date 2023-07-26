import React from "react";

const PackDetails = () => {
  return (
    <div className="grid grid-cols-1 divide-y">
      <div className="items-center p-5 text-center ">
        <span className="p-3 font-bold text-white rounded-md bg-slate-800">
          #1234 - Dubai Package
        </span>
      </div>
      <div className="p-3">
        <div className="flex space-x-3 text-md">
          <div className="text-gray-700 ">
            Adult-<span className="font-semibold">4</span>
          </div>
          <div className="text-gray-700 ">
            Child-<span className="font-semibold">1</span>
          </div>
          <div className="text-gray-700 ">
            Infant-<span className="font-semibold">1</span>
          </div>
        </div>
      </div>
      <div className="p-3">
        <div className="flex space-x-3 text-md">
          Travel Dates :{" "}
          <div className="font-bold text-gray-700">
            30 Jun 2023 To 04 Jul 2023
          </div>
        </div>
      </div>
      <div>
        <div className="flex p-2 space-x-1">
          <span className="p-1 text-sm text-white bg-orange-400 rounded-md">
            Abu dhabi
          </span>{" "}
          <span className="p-1 text-sm text-white bg-teal-500 rounded-md">
            Bangkok
          </span>
        </div>
        <div className="p-2 font-bold text-gray-500 text-md">Itinerary</div>
        <div className="grid grid-cols-1 p-5 divide-y">
          <div className="p-1 text-white bg-teal-600">
            <div className="flex space-x-3 text-sm">
              <div>Day 1</div>
              <div>Shight Sheeing</div>
              <div>Ferrari World</div>
            </div>
          </div>
          <div className="p-1 text-white bg-teal-600">
            <div className="flex space-x-3 text-sm">
              <div>Day 1</div>
              <div>Shight Sheeing</div>
              <div>Img World</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackDetails;
