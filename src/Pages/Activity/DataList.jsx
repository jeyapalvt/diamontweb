import React, { useState } from "react";
import BookingForm from "./BookingForm";
import notAvailable from "../../assets/images/notAvailable.png";
import {
  MdLocationOn,
  MdOutlineDescription,
  MdDescription,
} from "react-icons/md";
import { RxCalendar } from "react-icons/rx";
import { GiSandsOfTime } from "react-icons/gi";
import { LuTimer } from "react-icons/lu";
import { BsCheckCircleFill, BsFillInfoCircleFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import TktData from "./TktData";
import { imageUrl, BaseUrl } from "../../Reducers/Api";
import { Button } from "../../Components";
import axios from "axios";
const DataList = (props) => {
  const { dataList } = props;
  const [attId, setattId] = useState();
  const [infoDetails, setinfoDetails] = useState();
  const [tktList, settktList] = useState([""]);
  const [infantAge, setinfantAge] = useState();
  const [adultAge, setadultAge] = useState();
  const [attractionName, setattractionName] = useState();

  const getDetail = async (id, info) => {
    setattId(id);

    const tempList = dataList.filter((item) => item.attractionsId === id);
    setattractionName(tempList[0].attName);
    setinfantAge(tempList[0].infantAgeStart + "-" + tempList[0].infantAgeEnd);
    setadultAge(tempList[0].childAgeStart + "-" + tempList[0].childAgeEnd);

    setinfoDetails(info);
    if (info === "tkt") {
      await axios
        .post(BaseUrl + "gettickettypelistbyattraction", {
          ttAttractionId: id,
        })
        .then((res) => {
          // settktList(res.data);

          if (res.data !== "") {
            getTransportDetails(id, res.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const getTransportDetails = async (id, data) => {
    let tempTicket = [];

    let tempTicketType = [];
    settktList("");
    await axios
      .post(BaseUrl + "/listTransportForAttraction", { attractionId: id })
      .then((res) => {
        if (data) {
          for (let i = 0; i < data.length; i++) {
            tempTicket.push({
              ticketTypeId: data[i].ticketTypeId,
              b2bAdultPrice: data[i].b2bAdultPrice,
              b2bChildPrice: data[i].b2bChildPrice,
              ttTicketType: data[i].ttTicketType,
              transport: getTransportData(res.data, data[i]),
            });

            settktList(tempTicket);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTransportData = (transData, data) => {
    let tempTrans = [];
    tempTrans.push({
      attractionId: attId,
      attName: attractionName,
      sharedOrPrivate: 0,
      transportId: 0,
      transportName: "Ticket only",
      cost: 0,
      ticketTypeId: data.ticketTypeId,
      b2bAdultPrice: data.b2bAdultPrice,
      b2bChildPrice: data.b2bChildPrice,
      ticketName: data.ttTicketType,
      transportCat: "",
    });

    if (transData.length) {
      const transportType = "2";
      let privateTrans = transData.filter((item) =>
        transportType.includes(item.sharedOrPrivate.toString())
      );

      for (let j = 0; j < transData.length; j++) {
        if (transData[j].sharedOrPrivate === 1) {
          tempTrans.push({
            attractionId: attId,
            attName: attractionName,
            ticketName: data.ttTicketType,
            sharedOrPrivate: transData[j].sharedOrPrivate,
            transportId: transData[j].sharedOrPrivate,
            transportName: transData[j].transportName,
            cost: transData[j].cost,
            ticketTypeId: data.ticketTypeId,
            b2bAdultPrice: data.b2bAdultPrice,
            b2bChildPrice: data.b2bChildPrice,
            transportCat: "",
          });
        }
      }
      if (privateTrans.length) {
        let transport = [];
        for (let i = 0; i < privateTrans.length; i++) {
          transport.push({
            nofPassengers: privateTrans[i].nofPassengers,
            cost: privateTrans[i].cost,
          });
        }
        tempTrans.push({
          attractionId: attId,
          attName: attractionName,
          ticketName: data.ttTicketType,
          sharedOrPrivate: privateTrans[0].sharedOrPrivate,
          transportId: privateTrans[0].sharedOrPrivate,
          transportName: privateTrans[0].transportName,
          cost: privateTrans[0].cost,
          ticketTypeId: data.ticketTypeId,
          b2bAdultPrice: data.b2bAdultPrice,
          b2bChildPrice: data.b2bChildPrice,
          transportCat: transport,
        });
      }
    }
    return tempTrans;
  };
  function HTMLToPlainText({ htmlString }) {
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(htmlString, "text/html");
    const plainText = htmlDocument.body.textContent;
    return <>{plainText}</>;
  }
  const maxLength = 100;

  const DayList = (optDays) => {
    const operatingDaysArray = optDays.split(" ").map((day) => day.trim());
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days.map((day, index) => (
      <div
        key={index}
        className={
          operatingDaysArray.includes(day)
            ? "flex space-x-2 list-none text-[#008000]"
            : "flex space-x-2 list-none text-[#e32323] line-through"
        }
      >
        {day}
      </div>
    ));
  };
  const mapAndStreet = () => {
    return (
      <div className="flex w-full space-x-1">
        <div className="w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.189700496736!2d55.26608507489167!3d25.230534830350496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43dbf8f14e77%3A0xc6ab304a13aa450a!2sDIAMOND%20TOURS%20L.L.C!5e0!3m2!1sen!2sin!4v1686648257975!5m2!1sen!2sin"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-1/2"></div>
      </div>
    );
  };

  const TicketHeader = ({ name }) => {
    return (
      <div>
        <div className="font-semibold text-gray-700 bg-green-300 ">
          {attractionName + "-" + name}
        </div>
        <div className="flex items-center w-full mb-1 text-sm font-medium text-gray-700 bg-amber-300">
          <div className="w-2/12">Transfer Options</div>
          {/* <div className="w-1/12"></div> */}
          <div className="w-1/12"></div>
          <div className="w-2/12 text-center">Tour Date</div>
          <div className="w-2/12 text-center">Adult</div>
          <div className="w-2/12 text-center">Child Age {adultAge}</div>
          <div className="w-2/12 text-center">Infant Age {infantAge}</div>

          <div className="w-2/12"></div>
          <div className="w-2/12"></div>
        </div>
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
                {(item.attractionsId === 3 || item.attractionsId === 6) && (
                  <div className="absolute flex items-center px-1 mt-5 ml-5">
                    <div className="absolute p-2 font-bold text-white bg-red-700 rounded-full ">
                      <FaCheckCircle />
                    </div>
                    <div className="px-3 ml-6 text-white bg-red-700 rounded-r-full ">
                      Recomented
                    </div>
                  </div>
                )}

                <img
                  className="object-cover w-full h-full rounded-lg"
                  src={imageUrl + item.attThumbnailImage}
                  alt="activity/thumbnail"
                />
              </div>
              <div className="flex flex-col justify-between w-9/12 ">
                <div className="p-3">
                  <div className="flex items-center text-xl font-bold text-gray-600">
                    {" "}
                    {item.attName}
                  </div>
                  <div className="flex items-center justify-start space-x-1 text-sm text-gray-500">
                    <div>
                      <MdLocationOn color="#da251d" />
                    </div>
                    <div>{item.attCity}</div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div>
                      <RxCalendar color="#da251d" />
                    </div>
                    <div>Opening Days</div> {DayList(item.operatingDays)}
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <GiSandsOfTime color="#da251d" />
                        Duration :
                      </div>
                      <div className="flex items-center  text-[#008000]">
                        {item.duration} (Approx)
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-1">
                        <div className="flex items-center space-x-1">
                          <LuTimer color="#da251d" /> Open/close :
                        </div>
                        <div className="flex items-center space-x-1  text-[#008000]">
                          {item.openTime} to {item.closeTime}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    {item.instantConfirmation === true && (
                      <>
                        <div>
                          <BsCheckCircleFill color="#008000" />
                        </div>
                        <div>INSTANT CONFIRMATION VOUCHER</div>
                      </>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div>
                      <BsCheckCircleFill color="#008000" />
                    </div>
                    <div>FREE CANCELATION {item.freeCancellation} PRIOR</div>
                  </div>
                </div>

                <div className="flex mt-auto ml-2 mr-2 text-sm font-medium text-center">
                  <div
                    className={`flex items-center p-2 ml-2 space-x-1 rounded-tl-sm rounded-tr-sm cursor-pointer 
                    ${
                      attId === item.attractionsId &&
                      infoDetails === "description"
                        ? "bg-[#da251d]"
                        : "bg-gray-200"
                    }`}
                    onClick={() => getDetail(item.attractionsId, "description")}
                  >
                    <div
                      className={`${
                        attId === item.attractionsId &&
                        infoDetails === "description"
                          ? "text-white"
                          : "text-[#da251d]"
                      }`}
                    >
                      <MdOutlineDescription />
                    </div>
                    <div
                      className={`${
                        attId === item.attractionsId &&
                        infoDetails === "description"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      About
                    </div>
                  </div>
                  <div
                    className={`flex items-center p-2 ml-2 space-x-1 rounded-tl-sm rounded-tr-sm cursor-pointer 
                    ${
                      attId === item.attractionsId && infoDetails === "t&c"
                        ? "bg-[#da251d]"
                        : "bg-gray-200"
                    }`}
                    onClick={() => getDetail(item.attractionsId, "t&c")}
                  >
                    <div
                      className={`${
                        attId === item.attractionsId && infoDetails === "t&c"
                          ? "text-white"
                          : "text-[#da251d]"
                      }`}
                    >
                      <MdDescription />
                    </div>
                    <div
                      className={`${
                        attId === item.attractionsId && infoDetails === "t&c"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      T&C
                    </div>
                  </div>{" "}
                  <div
                    className={`flex items-center p-2 ml-2 space-x-1 rounded-tl-sm rounded-tr-sm cursor-pointer 
                    ${
                      attId === item.attractionsId &&
                      infoDetails === "inclutions"
                        ? "bg-[#da251d]"
                        : "bg-gray-200"
                    }`}
                    onClick={() => getDetail(item.attractionsId, "inclutions")}
                  >
                    <div
                      className={`${
                        attId === item.attractionsId &&
                        infoDetails === "inclutions"
                          ? "text-white"
                          : "text-[#da251d]"
                      }`}
                    >
                      <MdLocationOn />
                    </div>
                    <div
                      className={`${
                        attId === item.attractionsId &&
                        infoDetails === "inclutions"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      Inclutions
                    </div>
                  </div>
                  <div
                    className={`flex items-center p-2 ml-2 space-x-1 rounded-tl-sm rounded-tr-sm cursor-pointer 
                    ${
                      attId === item.attractionsId && infoDetails === "info"
                        ? "bg-[#da251d]"
                        : "bg-gray-200"
                    }`}
                    onClick={() => getDetail(item.attractionsId, "info")}
                  >
                    <div
                      className={`${
                        attId === item.attractionsId && infoDetails === "info"
                          ? "text-white"
                          : "text-[#da251d]"
                      }`}
                    >
                      <BsFillInfoCircleFill />
                    </div>
                    <div
                      className={`${
                        attId === item.attractionsId && infoDetails === "info"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      Impotent Information
                    </div>
                  </div>
                  <div
                    className={`flex items-center p-2 ml-2 space-x-1 rounded-tl-sm rounded-tr-sm cursor-pointer 
                    ${
                      attId === item.attractionsId &&
                      infoDetails === "mapAndstreet"
                        ? "bg-[#da251d]"
                        : "bg-gray-200"
                    }`}
                    onClick={() =>
                      getDetail(item.attractionsId, "mapAndstreet")
                    }
                  >
                    <div
                      className={`${
                        attId === item.attractionsId &&
                        infoDetails === "mapAndstreet"
                          ? "text-white"
                          : "text-[#da251d]"
                      }`}
                    >
                      <MdLocationOn />
                    </div>
                    <div
                      className={`${
                        attId === item.attractionsId &&
                        infoDetails === "mapAndstreet"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      Map/Street
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-2/12 h-full p-3 text-center bg-slate-200">
                <div className="mt-auto">
                  <div className="mb-4">
                    <div className="text-sm text-orange-700">
                      Price Starting At
                    </div>
                    <div className="font-semibold text-red-700">
                      {" "}
                      {item.adultPrice} AED
                    </div>
                  </div>
                  <div>
                    <Button
                      name="Select"
                      onClick={() => getDetail(item.attractionsId, "tkt")}
                    />
                  </div>
                </div>
              </div>
            </div>

            {attId === item.attractionsId && infoDetails === "tkt" && (
              <div className="flex-col items-center justify-center w-full p-2 bg-white rounded-lg shadow-md sm:flex">
                {tktList.length === 0 ? (
                  <div className="items-center justify-center w-full text-center">
                    <img
                      src={notAvailable}
                      alt="notAvailable"
                      className="w-24 mx-auto"
                    />
                    <div className="text-red-600 ">Tickets Not Available</div>
                  </div>
                ) : (
                  tktList.map((item, index) => (
                    <div key={index} className="w-full ">
                      <TicketHeader name={item.ttTicketType} />
                      {item.transport?.map((item, index) => (
                        <div className="py-1 border-b-2">
                          <BookingForm
                            key={index}
                            attractionName={item.attName}
                            ticketName={item.ticketName}
                            attractionId={item.attractionId}
                            b2bAdultPrice={item.b2bAdultPrice}
                            b2bChildPrice={item.b2bChildPrice}
                            transCost={item.cost}
                            transportCat={item.transportCat}
                            sharedOrPrivate={item.sharedOrPrivate}
                            ticketTypeId={item.ticketTypeId}
                            transportId={item.transportId}
                            transportName={item.transportName}
                          />
                        </div>
                      ))}
                    </div>
                  ))
                )}
              </div>
            )}
            {attId === item.attractionsId && infoDetails === "description" && (
              <div className="p-10 bg-white rounded-lg shadow-md sm:flex">
                <div
                  dangerouslySetInnerHTML={{
                    __html: item?.attDescription,
                  }}
                />
                {/* <HTMLToPlainText htmlString={item.attDescription} /> */}
              </div>
            )}
            {attId === item.attractionsId && infoDetails === "t&c" && (
              <div className="p-10 bg-white rounded-lg shadow-md sm:flex">
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.attTermsAndCondition,
                  }}
                />
                {/* <HTMLToPlainText htmlString={item.attTermsAndCondition} /> */}
              </div>
            )}
            {attId === item.attractionsId && infoDetails === "inclutions" && (
              <div className="p-10 bg-white rounded-lg shadow-md sm:flex">
                <p>Inclutions</p>
              </div>
            )}

            {attId === item.attractionsId && infoDetails === "info" && (
              <div className="p-10 bg-white rounded-lg shadow-md sm:flex">
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.attInfo,
                  }}
                />
                {/* <HTMLToPlainText htmlString={item.attInfo} /> */}
              </div>
            )}
            {attId === item.attractionsId && infoDetails === "mapAndstreet" && (
              <div className="p-10 bg-white rounded-lg shadow-md sm:flex">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.189700496736!2d55.26608507489167!3d25.230534830350496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43dbf8f14e77%3A0xc6ab304a13aa450a!2sDIAMOND%20TOURS%20L.L.C!5e0!3m2!1sen!2sin!4v1686648257975!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataList;
