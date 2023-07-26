import React, { useEffect, useState } from "react";
import { InputComp, Button } from "../../Components";
import Slider from "react-slick";
import backgroundImg from "./backgroundImg1.jpg";
import { useNavigate } from "react-router-dom";
import { encryptData, secretKey } from "../../Store/Encrypt";
import Cookies from "js-cookie";

const Banner = () => {
  return (
    <>
      {/* <div className="p-5 bg-orange-900 h-96">
        <div className="flex justify-between px-0 sm:px-10">
          <div className="w-1/2 mt-20">
            <div className="hidden text-4xl font-extrabold text-white lg:flex">
              Welcome to Diamond
            </div>
            <div className="hidden w-1/2 mt-10 text-white lg:flex">
              Unlock limitless travel possibilities with our B2B online ticket
              booking platform. Seamless bookings, global network, 24/7 support,
              and unmatched profitability. Elevate your business today
            </div>
          </div>

          <div className="flex-col w-full p-5 bg-white rounded-lg shadow-md lg:w-80 h-80 sm:ml-28 ">
            Login
            <form>
              <div className="mt-5">
                <div className="mb-5">
                  <InputComp
                    type="text"
                    id="userEmail"
                    placeholder="user id"
                    value={formData.userEmail}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-5">
                  <InputComp
                    type="password"
                    id="userPassword"
                    placeholder="password"
                    value={formData.userPassword}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="float-right mb-5 ">
                  <Button name="Login" onClick={() => handleSubmit()} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      <div
        className="relative p-5 -z-0 h-96"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex justify-between px-0 sm:px-10">
          <div className="w-1/2 mt-20">
            <div className="hidden text-4xl font-extrabold text-white lg:flex">
              Welcome to Diamond
            </div>
            <div className="hidden w-1/2 mt-10 text-white lg:flex">
              Unlock limitless travel possibilities with our B2B online ticket
              booking platform. Seamless bookings, global network, 24/7 support,
              and unmatched profitability. Elevate your business today
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
