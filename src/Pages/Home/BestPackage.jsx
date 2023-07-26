import React from "react";
import activity from "./images/activity.jpg";
import tours from "./images/tours.jpg";
import visa from "./images/visa.jpg";
import transport from "./images/transport.jpg";
import hotels from "./images/hotels.jpg";
const BestPackage = () => {
  return (
    <>
      <div className="p-5 bg-white rounded-md shadow-md">
        <div className="grid grid-flow-col grid-cols-4 grid-rows-2 gap-4">
          <div className="relative col-span-2 row-span-2">
            <img
              src={activity}
              alt="activity"
              className="object-cover w-full h-full rounded-md shadow-md"
            />
            <div className="absolute bottom-0 left-0 w-full px-4 py-2 text-white bg-black bg-opacity-25">
              Activity Tickets
            </div>
          </div>

          <div className="relative col-start-3">
            <img
              src={tours}
              alt="tours"
              className="object-cover w-full h-full rounded-md shadow-md"
            />
            <div className="absolute bottom-0 left-0 w-full px-4 py-2 text-white bg-black bg-opacity-25">
              Tour Packages
            </div>
          </div>
          <div className="relative col-start-4">
            <img
              src={transport}
              alt="transport"
              className="object-cover w-full h-full rounded-md shadow-md"
            />
            <div className="absolute bottom-0 left-0 w-full px-4 py-2 text-white bg-black bg-opacity-25">
              Transport
            </div>
          </div>
          <div className="relative col-start-3">
            <img
              src={visa}
              alt="visa"
              className="object-cover w-full h-full rounded-md shadow-md"
            />
            <div className="absolute bottom-0 left-0 w-full px-4 py-2 text-white bg-black bg-opacity-25">
              Visa
            </div>
          </div>
          <div className="relative col-start-4">
            <img
              src={hotels}
              alt="hotels"
              className="object-cover w-full h-full rounded-md shadow-md"
            />
            <div className="absolute bottom-0 left-0 w-full px-4 py-2 text-white bg-black bg-opacity-25">
              Hotels
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestPackage;
