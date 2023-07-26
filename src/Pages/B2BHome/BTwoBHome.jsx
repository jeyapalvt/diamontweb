import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Hotel from "./Hotel";
import Transport from "./Transport";
import Activity from "./Activity";
import Tours from "./Tours";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import tours from "./tours.jpeg";
import hotel from "./hotel.jpeg";
import travel from "./travel.jpeg";
import Intro from "../Home/Intro";
import IntroCard from "../Home/IntroCard";
import AppCard from "../Home/AppCard";
import BestPackage from "../Home/BestPackage";
import Meal from "./Meal";
import {
  MdAttractions,
  MdTravelExplore,
  MdOutlineFastfood,
} from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";
import { BsFillTaxiFrontFill } from "react-icons/bs";
import { GiParachute } from "react-icons/gi";

const BTwoBHome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [pathName, setpathName] = useState("");
  useEffect(() => {
    const pathname = location.pathname;
    const parts = pathname.split("/");
    const desiredPart = parts[2]; // "allbookings"
    if (!desiredPart) {
      setpathName(parts[1]);
      parts[1];
    } else {
      setpathName(desiredPart);
    }
  }, [location.pathname, pathName, navigate]);
  const carouselData = [
    {
      id: 1,
      image: tours,
      content: "Travel hassle-free with our online transport booking service.",
    },
    {
      id: 2,
      image: hotel,
      content:
        "Explore diverse culinary experiences with our online meal reservation platform",
    },
    {
      id: 3,
      image: travel,
      content:
        "Embark on unforgettable journeys with our online tour booking platform",
    },
    // Add more items as needed
  ];
  return (
    <div>
      <div className="h-56 bg-blue-400">
        <div className="flex-col items-center justify-center p-10 text-5xl font-bold text-center text-white">
          MEMORABLE EXPERIENCES
          <div className="items-center justify-center text-xl">
            Browse and book tours and activities so incredible, you’ll want to
            tell your friends.
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center -mt-20">
        <div className="relative z-10 flex items-center justify-between w-1/3 h-auto p-3 text-gray-500 bg-white rounded-md shadow-2xl">
          <div
            className={` cursor-pointer items-center text-center p-2 py-3 ${
              pathName === "activity" &&
              " text-[#da251d]  cursor-pointer rounded-md border-2  border-[#da251d] p-2 py-3"
            }`}
            onClick={() => {
              navigate("/activity");
            }}
          >
            <div className="flex items-center justify-center">
              <GiParachute size={35} />
            </div>
            <div
              className={`text-sm font-semibold mt-2 ${
                pathName === "activity" && "border-b-2  border-[#da251d]"
              } `}
            >
              {" "}
              Activities{" "}
            </div>
          </div>
          <div
            className={` cursor-pointer items-center text-center p-2 py-3 ${
              pathName === "hotel" &&
              " text-[#da251d]  cursor-pointer rounded-md border-2  border-[#da251d] p-2 py-3"
            }`}
            onClick={() => {
              navigate("/hotel");
            }}
          >
            <div className="flex items-center justify-center">
              <RiHotelFill size={35} />
            </div>
            <div
              className={`text-sm font-semibold mt-2 ${
                pathName === "hotel" && "border-b-2  border-[#da251d]"
              } `}
            >
              {" "}
              Hotel
            </div>
          </div>

          <div
            className={` cursor-pointer items-center text-center p-2 py-3 ${
              pathName === "tours" &&
              " text-[#da251d]  cursor-pointer rounded-md border-2  border-[#da251d] p-2 py-3"
            }`}
            onClick={() => {
              navigate("/tours");
            }}
          >
            <div className="flex items-center justify-center">
              <MdTravelExplore size={35} />
            </div>
            <div
              className={`text-sm font-semibold mt-2 ${
                pathName === "tours" && "border-b-2  border-[#da251d]"
              } `}
            >
              Build Package
            </div>
          </div>

          <div
            className={` cursor-pointer items-center text-center p-2 py-3 ${
              pathName === "meal" &&
              " text-[#da251d]  cursor-pointer rounded-md border-2  border-[#da251d] p-2 py-3"
            }`}
            onClick={() => {
              navigate("/meal");
            }}
          >
            <div className="flex items-center justify-center">
              <MdOutlineFastfood size={35} />
            </div>
            <div
              className={`text-sm font-semibold mt-2 ${
                pathName === "meal" && "border-b-2  border-[#da251d]"
              } `}
            >
              {" "}
              Meal
            </div>
          </div>
          <div
            className={` cursor-pointer items-center text-center p-2 py-3 ${
              pathName === "transport" &&
              " text-[#da251d]  cursor-pointer rounded-md border-2  border-[#da251d] p-2 py-3"
            }`}
            onClick={() => {
              navigate("/transport");
            }}
          >
            <div className="flex items-center justify-center">
              <BsFillTaxiFrontFill size={35} />
            </div>
            <div
              className={`text-sm font-semibold mt-2 ${
                pathName === "transport" && "border-b-2  border-[#da251d]"
              } `}
            >
              {" "}
              Transport
            </div>
          </div>
        </div>

        <div className="relative flex items-center w-2/3 bg-white rounded-md shadow-md -mt-7 h-52">
          <div className="w-full p-10 mt-10">
            {pathName === "transport" && <Transport />}
            {pathName === "hotel" && <Hotel />}
            {pathName === "activity" && <Activity />}
            {pathName === "tours" && <Tours />}
            {pathName === "meal" && <Meal />}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-around p-5 mb-3 sm:flex">
        <Carousel
          autoPlay={true}
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={2000}
          // transitionDuration={2000}
          centerMode={false}
          // className="bg-gray-200"
          containerClass="container mx-auto"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="px-4 py-2 "
          // transitionTimingFunction="ease-in-out"
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
              partialVisibilityGutter: 40,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              partialVisibilityGutter: 30,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {carouselData.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-orange-700 rounded shadow "
            >
              <div className="flex w-full h-20">
                <div className="w-1/3">
                  <img
                    src={item.image}
                    alt={`Carousel item ${item.id}`}
                    className="object-cover w-full h-20"
                  />
                </div>
                <div className="items-center w-2/3 text-center text-gray-700">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <IntroCard />

      <div className="p-7">
        <Intro />
      </div>
      <div className="p-7">
        <AppCard />
      </div>
      <div className="p-7">
        <BestPackage />
      </div>
    </div>
  );
};

export default BTwoBHome;
