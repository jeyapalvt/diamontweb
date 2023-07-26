import React, { useState } from "react";
import { Button } from "../../Components";
import { GrMapLocation, GrWifi } from "react-icons/gr";
import { FaBath } from "react-icons/fa";
import { BiWorld, BiRestaurant } from "react-icons/bi";
import { IoIosWater } from "react-icons/io";
import { BsTelephoneFill, BsImages, BsFillMoonStarsFill } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { Tooltip, Typography } from "@material-tailwind/react";
import {
  MdLocationOn,
  MdOutlineDescription,
  MdDescription,
} from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { FaStreetView, FaBed } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import notAvailable from "../../assets/images/notAvailable.png";
import BookingForm from "./BookingForm";
const DataList = (props) => {
  const { dataList } = props;

  const getNearHotelCount = (item) => {
    return item.nearHotel.length;
  };
  const [hotelId, sethotelId] = useState();
  const [infoDetail, setinfoDetail] = useState();
  const getDetail = (hotelId, id) => {
    sethotelId(hotelId);
    setinfoDetail(id);
  };

  const TicketHeader = ({ name }) => {
    return (
      <div className="flex items-center w-full px-2 mb-1 text-sm font-medium text-gray-700 bg-blue-100">
        <div className="flex items-center w-2/12 space-x-1">
          <div>
            <FaBed color="red" />
          </div>
          <div> {name}</div>
          <div>
            <FaInfoCircle color="red" />
          </div>
        </div>
        <div className="w-3/12"></div>
        <div className="w-1/12"></div>
        <div className="flex items-center w-1/12">
          <div className="text-orange-600">
            <BsFillMoonStarsFill />
          </div>
          <div>2 Night</div>
        </div>
        <div className="w-1/12"> </div>
        <div className="w-1/12"></div>
        <div className="w-1/12"></div>
        <div className="w-1/12"></div>
        <div className="w-1/12"></div>
      </div>
    );
  };
  return (
    <div>
      {dataList.map((item, index) => (
        <div key={index}>
          <div className="py-3">
            <div className="bg-white rounded-lg shadow-md h-44 sm:flex">
              <div className="w-4/12">
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src={item.img}
                  alt="activity/thumbnail"
                />
              </div>
              <div className="flex flex-col justify-between w-9/12 ">
                <div className="p-3">
                  <div className="flex items-center">
                    <div className="font-bold text-gray-600">{item.name}</div>

                    <div>
                      <div className="flex items-center">
                        <svg
                          aria-hidden="true"
                          className={`w-5 h-5 ${
                            item.rating >= 1
                              ? "text-yellow-400"
                              : "text-gray-300 dark:text-gray-500"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className={`w-5 h-5 ${
                            item.rating >= 2
                              ? "text-yellow-400"
                              : "text-gray-300 dark:text-gray-500"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Second star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className={`w-5 h-5 ${
                            item.rating >= 3
                              ? "text-yellow-400"
                              : "text-gray-300 dark:text-gray-500"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Third star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className={`w-5 h-5 ${
                            item.rating >= 4
                              ? "text-yellow-400"
                              : "text-gray-300 dark:text-gray-500"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fourth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          aria-hidden="true"
                          className={`w-5 h-5 ${
                            item.rating >= 5
                              ? "text-yellow-400"
                              : "text-gray-300 dark:text-gray-500"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fifth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-500">
                    <div className="text-green-800">
                      <GrMapLocation />
                    </div>
                    <div className="text-md"> {item.city}</div>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-500">
                    <div className="text-green-800">
                      <FaBath />
                    </div>
                    <div>
                      <GrWifi />
                    </div>
                    <div>
                      <BiWorld />
                    </div>
                    <div>
                      <IoIosWater />
                    </div>
                    <div>
                      <BsTelephoneFill />
                    </div>
                    <div>
                      <FiMonitor />
                    </div>
                  </div>
                  <div className="flex items-center mt-2 space-x-1 text-gray-500">
                    <div>
                      <BiRestaurant />
                    </div>
                    <div className="text-sm">Near by Restaurants</div>

                    <Tooltip
                      content={
                        <div className="w-auto">
                          <Typography color="white" className="font-medium">
                            Near Hotels
                          </Typography>
                          {item.nearHotel.length &&
                            item.nearHotel.map((item, index) => (
                              <Typography
                                key={index}
                                variant="small"
                                color="white"
                                className="font-normal opacity-80"
                              >
                                {item.name}
                              </Typography>
                            ))}
                        </div>
                      }
                      animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                      }}
                    >
                      <div className="px-1 text-sm text-orange-600 border-2 border-orange-600 rounded-sm cursor-pointer">
                        <div>{getNearHotelCount(item)} </div>
                      </div>
                    </Tooltip>
                  </div>
                </div>

                <div className="flex mt-auto ml-2 mr-2 text-sm font-medium text-center cursor-pointer">
                  <div
                    className={`flex items-center p-2 ml-2 space-x-1 rounded-tl-sm rounded-tr-sm cursor-pointer 
                    ${
                      hotelId === item.id && infoDetail === "description"
                        ? "bg-orange-600"
                        : "bg-gray-200"
                    }`}
                    onClick={() => getDetail(item.id, "description")}
                  >
                    <div
                      className={`${
                        hotelId === item.id && infoDetail === "description"
                          ? "text-white"
                          : "text-orange-600"
                      }`}
                    >
                      <MdOutlineDescription size={18} />
                    </div>
                    <div
                      className={`${
                        hotelId === item.id && infoDetail === "description"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      Description
                    </div>
                  </div>
                  <div
                    className={`flex items-center p-2 ml-2 space-x-1 rounded-tl-sm rounded-tr-sm cursor-pointer 
                    ${
                      hotelId === item.id && infoDetail === "images"
                        ? "bg-orange-600"
                        : "bg-gray-200"
                    }`}
                    onClick={() => getDetail(item.id, "images")}
                  >
                    <div
                      className={`${
                        hotelId === item.id && infoDetail === "images"
                          ? "text-white"
                          : "text-orange-600"
                      }`}
                    >
                      <BsImages size={18} />
                    </div>
                    <div
                      className={`${
                        hotelId === item.id && infoDetail === "images"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      Images
                    </div>
                  </div>
                  <div
                    className={`flex items-center p-2 ml-2 space-x-1 rounded-tl-sm rounded-tr-sm cursor-pointer 
                    ${
                      hotelId === item.id && infoDetail === "map"
                        ? "bg-orange-600"
                        : "bg-gray-200"
                    }`}
                    onClick={() => getDetail(item.id, "map")}
                  >
                    <div
                      className={`${
                        hotelId === item.id && infoDetail === "map"
                          ? "text-white"
                          : "text-orange-600"
                      }`}
                    >
                      <ImLocation2 size={18} />
                    </div>
                    <div
                      className={`${
                        hotelId === item.id && infoDetail === "map"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      Map
                    </div>
                  </div>
                  <div
                    className={`flex items-center p-2 ml-2 space-x-1 rounded-tl-sm rounded-tr-sm cursor-pointer 
                    ${
                      hotelId === item.id && infoDetail === "streetView"
                        ? "bg-orange-600"
                        : "bg-gray-200"
                    }`}
                    onClick={() => getDetail(item.id, "streetView")}
                  >
                    <div
                      className={`${
                        hotelId === item.id && infoDetail === "streetView"
                          ? "text-white"
                          : "text-orange-600"
                      }`}
                    >
                      <FaStreetView size={18} />
                    </div>
                    <div
                      className={`${
                        hotelId === item.id && infoDetail === "streetView"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      Street View
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-2/12 h-full p-3 text-center bg-slate-200">
                <div className="mt-auto">
                  <div className="mb-4 ">
                    <div className="text-sm text-orange-700">
                      Price Starting At
                    </div>
                    <div className="font-semibold text-red-700">
                      {" "}
                      {item.price} AED
                    </div>
                  </div>
                  <div>
                    <Button
                      name="Book Now"
                      onClick={() => getDetail(item.id, "tkt")}
                    />
                  </div>
                </div>
              </div>
            </div>
            {item.id === hotelId && infoDetail === "description" && (
              <div className="p-3 bg-white rounded-lg shadow-md sm:flex">
                <div className="py-5">{item.description}</div>
              </div>
            )}

            {item.id === hotelId && infoDetail === "tkt" && (
              <div className="flex-col items-center justify-center w-full py-2 bg-white rounded-lg shadow-md sm:flex">
                {item.ticket.length === 0 ? (
                  <div className="items-center justify-center w-full text-center">
                    <img
                      src={notAvailable}
                      alt="notAvailable"
                      className="w-24 mx-auto"
                    />
                    <div className="text-red-600 ">Tickets Not Available</div>
                  </div>
                ) : (
                  item.ticket.map((item, index) => (
                    <div key={index} className="w-full ">
                      <TicketHeader name={item.name} />
                      {item.roomType?.map((item, index) => (
                        <div key={index}>
                          <BookingForm
                            type={item.type}
                            cancelation={item.cancelation}
                            adult={item.adult}
                            child={item.child}
                            offers={item.offers}
                            price={item.price}
                            stayInfo={item.stayInfo}
                          />
                        </div>
                      ))}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataList;
