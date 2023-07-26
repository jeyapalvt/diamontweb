import React, { useState } from "react";
import { InputComp, Button } from "../../Components";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { encryptData, secretKey } from "../../Store/Encrypt";
import {
  MdAttractions,
  MdTravelExplore,
  MdOutlineFastfood,
} from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";
import { BsFillTaxiFrontFill } from "react-icons/bs";
import { GiParachute } from "react-icons/gi";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
  });
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };
  const handleSubmit = async () => {
    if (formData.userEmail === "admin" && formData.userPassword === "admin") {
      const encryptedJSON = encryptData(formData, secretKey);

      Cookies.set("dAuthTokens", encryptedJSON, { expires: 7 });
      //  navigate("/activity");

      window.location.href = "/activity";
    }
  };
  return (
    <div>
      {/* component */}
      <div className="h-screen md:flex">
        <div className="relative items-center justify-around hidden w-1/2 overflow-hidden md:flex bg-gradient-to-tr from-blue-800 to-purple-700 i">
          <div className="w-2/3">
            <h1 className="font-sans font-bold text-white text-xls">
              Diamond Tours
            </h1>
            <p className="mt-1 text-white">
              Exclusive Travel Agent’s Benefits!
            </p>
            <p className="mt-1 text-white">
              Our exclusive rates and offers are only available for travel agent
              partners and cannot be accessed by anyone else.
            </p>

            <div className="flex justify-between mt-5 text-white">
              <div className="w-20 p-2 border rounded-md">
                <div className="flex items-center justify-center">
                  <RiHotelFill size={35} />
                </div>
                <div className="flex items-center justify-center">Hotels</div>
              </div>
              <div className="w-20 p-2 border rounded-md">
                <div className="flex items-center justify-center">
                  <GiParachute size={35} />
                </div>
                <div className="flex items-center justify-center">Tours</div>
              </div>
              <div className="w-20 p-2 border rounded-md">
                <div className="flex items-center justify-center">
                  <MdTravelExplore size={35} />
                </div>
                <div className="flex items-center justify-center">Transfer</div>
              </div>
              <div className="w-20 p-2 border rounded-md ">
                <div className="flex items-center justify-center">
                  <MdOutlineFastfood size={35} />
                </div>
                <div className="flex items-center justify-center">Meals</div>
              </div>
            </div>
            {/* <button
              type="submit"
              className="block py-2 mt-4 mb-2 font-bold text-indigo-800 bg-white w-28 rounded-2xl"
            >
              Read More
            </button> */}
          </div>
          <div className="absolute border-4 border-t-8 rounded-full -bottom-32 -left-40 w-80 h-80 border-opacity-30" />
          <div className="absolute border-4 border-t-8 rounded-full -bottom-40 -left-20 w-80 h-80 border-opacity-30" />
          <div className="absolute border-4 border-t-8 rounded-full -top-40 -right-0 w-80 h-80 border-opacity-30" />
          <div className="absolute border-4 border-t-8 rounded-full -top-20 -right-20 w-80 h-80 border-opacity-30" />
        </div>
        <div className="flex items-center justify-center py-10 bg-white md:w-1/2">
          <form className="bg-white">
            <h1 className="mb-1 text-2xl font-bold text-gray-800">
              Hello Again!
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome Back
            </p>

            <div className="flex items-center px-3 py-2 mb-4 border-2 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 border-none outline-none"
                type="text"
                id="userEmail"
                placeholder="Email"
                value={formData.userEmail}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center px-3 py-2 border-2 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 border-none outline-none"
                type="password"
                id="userPassword"
                placeholder="password"
                value={formData.userPassword}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="button"
              className="block w-full py-2 mt-4 mb-2 font-semibold text-white bg-indigo-600 rounded-2xl"
              onClick={() => handleSubmit()}
            >
              Login
            </button>
            <span className="ml-2 text-sm cursor-pointer hover:text-blue-500">
              Forgot Password ?
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
