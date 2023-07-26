import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBack, MdAdd } from "react-icons/md";
import { RiGalleryFill } from "react-icons/ri";
import HotelDetail from "./HotelDetail";
import SightSheeingsic from "./SightSheeingsic";
import SightSheeingpvt from "./SightSheeingpvt";
import SightSheeingtktonly from "./SightSheeingtktonly";
import Transfersic from "./Transfersic";
import Transferpvt from "./Transferpvt";
import Meal from "./Meal";
import ExtraActivity from "./ExtraActivity";
import Visa from "./Visa";
import Flight from "./Flight";
import AddTotalCost from "../../Models/AddTotalCost";
import PaxMarkup from "../../Models/PaxMarkup";
const OtherDetails = () => {
  const navigate = useNavigate();
  const [totalCostShow, settotalCostShow] = useState(false);
  const [paxMarkupShow, setpaxMarkupShow] = useState(false);
  const handleCloseTotalShow = () => {
    settotalCostShow(false);
    // Add additional logic or actions to handle closing the modal in the parent component
  };
  const handleCloseMarkupShow = () => {
    setpaxMarkupShow(false);
    // Add additional logic or actions to handle closing the modal in the parent component
  };
  return (
    <>
      {totalCostShow === true && (
        <AddTotalCost onCloseModal={handleCloseTotalShow} />
      )}
      {paxMarkupShow === true && (
        <PaxMarkup onCloseModal={handleCloseMarkupShow} />
      )}
      <div className="p-5">
        <div className="flex p-5 space-x-3 bg-gray-300">
          <span
            className="flex items-center p-1 space-x-1 text-sm text-white bg-orange-500 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <MdArrowBack size={15} />
            Go Back
          </span>
          <span
            className="flex items-center p-1 space-x-1 text-sm text-white bg-teal-500 cursor-pointer"
            onClick={() => settotalCostShow(true)}
          >
            <MdAdd size={15} />
            Add Total Cost
          </span>
          <span
            className="flex items-center p-1 space-x-1 text-sm text-white bg-red-500 cursor-pointer"
            onClick={() => setpaxMarkupShow(true)}
          >
            <MdAdd size={15} />
            Add Per Pax Markup
          </span>
          <span className="flex items-center p-1 space-x-1 text-sm text-white bg-green-500 cursor-pointer">
            <RiGalleryFill />
            Preview
          </span>
          <span className="flex items-center p-1 space-x-1 text-sm text-white bg-blue-500 cursor-pointer">
            <RiGalleryFill />
            Preview Detailed
          </span>
        </div>
      </div>
      <div className="px-5">
        <div className="grid grid-cols-3 text-center text-white bg-teal-500 divide-x">
          <div className="flex-col p-2">
            <div className="text-md">Adult Cost</div>
            <div>THB 36</div>
          </div>
          <div className="flex-col p-2">
            <div className="text-md">Child Cost</div>
            <div>THB 26</div>
          </div>
          <div className="flex-col p-2">
            <div className="text-md">Infant Cost</div>
            <div>THB 10</div>
          </div>
        </div>
      </div>
      <div>
        <HotelDetail />
      </div>
      <div>
        <SightSheeingsic />
        <SightSheeingpvt />
        <SightSheeingtktonly />
      </div>
      <div>
        <Transfersic />
        <Transferpvt />
      </div>
      <div>
        <Meal />
      </div>
      <div>
        <ExtraActivity />
      </div>
      <div>
        <Visa />
      </div>
      <div>
        <Flight />
      </div>
    </>
  );
};

export default OtherDetails;
