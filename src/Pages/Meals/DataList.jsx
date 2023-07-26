import React, { useState } from "react";
import {
  MdLocationOn,
  MdOutlineDescription,
  MdDescription,
} from "react-icons/md";
import notAvailable from "../../assets/images/notAvailable.png";
import { AiFillStar } from "react-icons/ai";
import { ImSpoonKnife } from "react-icons/im";
import { LuTimer } from "react-icons/lu";
import { BsCheckCircleFill, BsFillInfoCircleFill } from "react-icons/bs";
import { Button } from "../../Components";
import BookingForm from "./BookingForm";
const DataList = (props) => {
  const { dataList } = props;
  const [mealsId, setmealsId] = useState();
  const [infoDetail, setinfoDetail] = useState();
  const getDetail = (mealId, info) => {
    setmealsId(mealId);
    setinfoDetail(info);
  };

  const TicketHeader = ({ name, adultAge, infantAge }) => {
    return (
      <div className="flex items-center w-full mb-1 text-sm font-medium text-gray-700 bg-amber-300">
        <div className="w-3/12">{name}</div>
        <div className="w-1/12"></div>
        <div className="w-2/12"></div>
        <div className="w-2/12">Child 2.99-5</div>
        <div className="w-2/12">Infant 0-2.99{infantAge}</div>
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
                  alt="meals/thumbnail"
                />
              </div>
              <div className="flex flex-col justify-between w-9/12 ">
                <div className="p-3">
                  <div className="flex items-center text-xl font-bold text-gray-600">
                    {" "}
                    {item.name}
                  </div>
                  <div className="flex items-center justify-start space-x-1 text-sm text-gray-500">
                    <div>
                      <MdLocationOn size={15} color="#da251d" />
                    </div>
                    <div>{item.city}</div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    {item.instentConfirm === true && (
                      <>
                        <div>
                          <BsCheckCircleFill color="#008000" />
                        </div>
                        <div>INSTANT CONFIRMATION</div>
                      </>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div>
                      <BsCheckCircleFill color="#008000" />
                    </div>
                    <div>FREE CANCELATION {item.freeCancel} PRIOR</div>
                  </div>
                  <div className="flex items-center p-2 space-x-2 text-sm text-gray-500">
                    <span
                      className={`px-1 text-sm text-white rounded-sm flex items-center space-x-2 ${
                        item.nonVeg === true ? "bg-red-700" : "bg-green-700"
                      }`}
                    >
                      <div>
                        <ImSpoonKnife />
                      </div>
                      <div>
                        {item.veg === true && "Veg "}
                        {item.nonVeg === true && "/ Non-Veg "}
                        {item.jainMeals === true && "/ Jain Meals "}
                      </div>
                    </span>

                    <span className="px-1 text-sm text-white bg-teal-600 rounded-sm">
                      {item.standerdType}
                    </span>
                    <span className="flex items-center px-1 space-x-1 text-sm text-white bg-indigo-600 rounded-sm">
                      <div>
                        <AiFillStar />
                      </div>
                      <div>{item.fecilitiys}</div>
                    </span>
                  </div>
                </div>

                <div className="flex mt-auto ml-2 mr-2 text-sm font-medium text-center">
                  <div
                    className={`flex items-center p-2 ml-2 space-x-1 rounded-tl-sm rounded-tr-sm cursor-pointer 
                    ${
                      mealsId === item.id && infoDetail === "description"
                        ? "bg-[#da251d]"
                        : "bg-gray-200"
                    }`}
                    onClick={() => getDetail(item.id, "description")}
                  >
                    <div
                      className={`${
                        mealsId === item.id && infoDetail === "description"
                          ? "text-white"
                          : "text-[#da251d]"
                      }`}
                    >
                      <MdOutlineDescription />
                    </div>
                    <div
                      className={`${
                        mealsId === item.id && infoDetail === "description"
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
                      mealsId === item.id && infoDetail === "inclution"
                        ? "bg-[#da251d]"
                        : "bg-gray-200"
                    }`}
                    onClick={() => getDetail(item.id, "inclution")}
                  >
                    <div
                      className={`${
                        mealsId === item.id && infoDetail === "inclution"
                          ? "text-white"
                          : "text-[#da251d]"
                      }`}
                    >
                      <MdDescription />
                    </div>
                    <div
                      className={`${
                        mealsId === item.id && infoDetail === "inclution"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      Inclution
                    </div>
                  </div>{" "}
                  <div
                    className={`flex items-center p-2 ml-2 space-x-1 rounded-tl-sm rounded-tr-sm cursor-pointer 
                    ${
                      mealsId === item.id && infoDetail === "info"
                        ? "bg-[#da251d]"
                        : "bg-gray-200"
                    }`}
                    onClick={() => getDetail(item.id, "info")}
                  >
                    <div
                      className={`${
                        mealsId === item.id && infoDetail === "info"
                          ? "text-white"
                          : "text-[#da251d]"
                      }`}
                    >
                      <BsFillInfoCircleFill />
                    </div>
                    <div
                      className={`${
                        mealsId === item.id && infoDetail === "info"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      Useful Info
                    </div>
                  </div>
                  <div
                    className={`flex items-center p-2 ml-2 space-x-1 rounded-tl-sm rounded-tr-sm cursor-pointer 
                    ${
                      mealsId === item.id && infoDetail === "mapAndstreet"
                        ? "bg-[#da251d]"
                        : "bg-gray-200"
                    }`}
                    onClick={() => getDetail(item.id, "mapAndstreet")}
                  >
                    <div
                      className={`${
                        mealsId === item.id && infoDetail === "mapAndstreet"
                          ? "text-white"
                          : "text-[#da251d]"
                      }`}
                    >
                      <MdLocationOn />
                    </div>
                    <div
                      className={`${
                        mealsId === item.id && infoDetail === "mapAndstreet"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      Map/Street
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-2/12 h-full text-center bg-slate-200">
                <div className="mt-auto">
                  <div className="">
                    <div className="font-bold text-red-700 text-md">
                      Price Starting At
                    </div>
                    <div className="text-blue-900 line-through text-md">
                      {item.price} AED
                    </div>
                    <div className="font-semibold text-red-700">
                      {item.ourPrice} AED
                    </div>
                  </div>
                  <div className="mb-4">
                    <Button
                      name="Book Now"
                      onClick={() => getDetail(item.id, "tkt")}
                    />
                  </div>
                </div>
              </div>
            </div>
            {mealsId == item.id && infoDetail === "description" && (
              <div className="p-3 bg-white rounded-lg shadow-md sm:flex">
                <div className="py-5">{item.description}</div>
              </div>
            )}
            {mealsId == item.id && infoDetail === "inclution" && (
              <div className="p-3 bg-white rounded-lg shadow-md sm:flex">
                <div className="py-5">{item.Inclusion}</div>
              </div>
            )}
            {mealsId == item.id && infoDetail === "info" && (
              <div className="p-3 bg-white rounded-lg shadow-md sm:flex">
                <div className="py-5">{item.usefulInfo}</div>
              </div>
            )}
            {mealsId == item.id && infoDetail === "info" && (
              <div className="p-3 bg-white rounded-lg shadow-md sm:flex">
                <div className="py-5">{item.termsAndCOnditions}</div>
              </div>
            )}
            {mealsId == item.id && infoDetail === "tkt" && (
              <div className="flex-col items-center justify-center w-full p-2 bg-white rounded-lg shadow-md sm:flex">
                {item.tktList.length === 0 ? (
                  <div className="items-center justify-center w-full text-center">
                    <img
                      src={notAvailable}
                      alt="notAvailable"
                      className="w-24 mx-auto"
                    />
                    <div className="text-red-600 ">Tickets Not Available</div>
                  </div>
                ) : (
                  item.tktList.map((item, index) => (
                    <div key={index} className="w-full ">
                      <TicketHeader name={item.ttTicketType} />
                      {item.transport?.map((item, index) => (
                        <BookingForm
                          key={index}
                          b2bAdultPrice={item.b2bAdultPrice}
                          b2bChildPrice={item.b2bChildPrice}
                          transCost={item.cost}
                          transportCat={item.transportCat}
                          sharedOrPrivate={item.sharedOrPrivate}
                          ticketTypeId={item.ticketTypeId}
                          transportId={item.transportId}
                          transportName={item.transportName}
                        />
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
