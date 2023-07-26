import React from "react";
import { FaHotel } from "react-icons/fa";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaCcVisa } from "react-icons/fa";
import { GiOpenedFoodCan } from "react-icons/gi";
import { SiYourtraveldottv } from "react-icons/si";
import { TbRollercoaster } from "react-icons/tb";

const IntroCard = () => {
  return (
    <div className="p-10">
      <div className="flex justify-center space-x-5 text-center">
        <div className="w-1/3 p-10 text-white bg-yellow-600 rounded-md shadow-md h-44 hover:transform hover:scale-105 hover:transition-all hover:duration-300">
          <div className="mb-5 text-2xl font-bold ">
            <div className="flex text-left">
              <div className="mr-5">
                <TbRollercoaster />
              </div>
              Activity
            </div>{" "}
          </div>
          <div>
            Discover thrilling adventures with our online booking portal for
            activity-themed parks
          </div>
        </div>
        <div className="w-1/3 p-10 text-white bg-blue-600 rounded-md shadow-md h-44 hover:transform hover:scale-105 hover:transition-all hover:duration-300">
          <div className="mb-5 text-2xl font-bold ">
            <div className="flex text-left">
              <div className="mr-5">
                <FaHotel />
              </div>
              Hotel
            </div>{" "}
          </div>
          <div>
            Find the perfect accommodations for your trip with our online hotel
            booking platform.
          </div>
        </div>
        <div className="w-1/3 p-10 text-white bg-green-600 rounded-md shadow-md h-44 hover:transform hover:scale-105 hover:transition-all hover:duration-300">
          <div className="mb-5 text-2xl font-bold ">
            <div className="flex text-left">
              <div className="mr-5">
                <BsFillCarFrontFill />
              </div>
              Transport
            </div>{" "}
          </div>
          <div>
            Travel hassle-free with our online transport booking service.
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5 space-x-5 text-center">
        <div className="w-1/3 p-10 text-white bg-pink-600 rounded-md shadow-md h-44 hover:transform hover:scale-105 hover:transition-all hover:duration-300">
          <div className="mb-5 text-2xl font-bold ">
            <div className="flex text-left">
              <div className="mr-5">
                <FaCcVisa />
              </div>
              Visa
            </div>{" "}
          </div>
          <div>
            Simplify your visa application process with our convenient online
            portal.
          </div>
        </div>
        <div className="w-1/3 p-10 text-white bg-purple-600 rounded-md shadow-md h-44 hover:transform hover:scale-105 hover:transition-all hover:duration-300">
          <div className="mb-5 text-2xl font-bold ">
            <div className="flex text-left">
              <div className="mr-5">
                <GiOpenedFoodCan />
              </div>
              Meals
            </div>{" "}
          </div>
          <div>
            Explore diverse culinary experiences with our online meal
            reservation platform.
          </div>
        </div>
        <div className="w-1/3 p-10 text-white bg-teal-600 rounded-md shadow-md h-44 hover:transform hover:scale-105 hover:transition-all hover:duration-300">
          <div className="mb-5 text-2xl font-bold ">
            <div className="flex text-left">
              <div className="mr-5">
                <SiYourtraveldottv />
              </div>
              Tours
            </div>{" "}
          </div>
          <div>
            Embark on unforgettable journeys with our online tour booking
            platform
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
