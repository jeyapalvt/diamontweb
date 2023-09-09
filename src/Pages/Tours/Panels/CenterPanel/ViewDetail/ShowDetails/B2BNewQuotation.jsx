import React from "react";
import { MdArrowBack, MdAdd } from "react-icons/md";
import { RiGalleryFill } from "react-icons/ri";
import { useParams, useNavigate } from "react-router-dom";

const B2BNewQuotation = (props) => {
  const { handleBack } = props;
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div className="p-5">
        <div className="flex justify-between p-5 space-x-3 bg-gray-300">
          {/* Left-aligned elements */}
          <div>
            <span
              className="flex items-center p-1 space-x-1 text-sm text-white bg-orange-500 cursor-pointer"
              onClick={handleBack}
            >
              <MdArrowBack size={15} />
              Go Back
            </span>
            <span
              className="flex items-center p-1 space-x-1 text-sm text-white bg-teal-500 cursor-pointer"
              onClick={() => navigate(`/querydetails/${id}`)}
            >
              <MdAdd size={15} />
              Back To Query
            </span>
          </div>

          {/* Right-aligned elements */}
          <div>
            <span className="flex items-center p-1 space-x-1 text-sm text-white bg-red-500 cursor-pointer">
              <MdAdd size={15} />
              Add Per Pax Markup
            </span>
            <span className="flex items-center p-1 space-x-1 text-sm text-white bg-green-500 cursor-pointer">
              <RiGalleryFill />
              B2B Quotation
            </span>
            <span className="flex items-center p-1 space-x-1 text-sm text-white bg-blue-500 cursor-pointer">
              <RiGalleryFill />
              B2B New Quotation
            </span>
            <span className="flex items-center p-1 space-x-1 text-sm text-white bg-green-500 cursor-pointer">
              <RiGalleryFill />
              B2B/Detailed Quotation
            </span>
            <span className="flex items-center p-1 space-x-1 text-sm text-white bg-blue-500 cursor-pointer">
              <RiGalleryFill />
              Show Costing
            </span>
          </div>
        </div>
      </div>
      <p>B2b Quotation</p>
    </div>
  );
};

export default B2BNewQuotation;
