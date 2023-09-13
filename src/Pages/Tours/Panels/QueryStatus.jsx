import React, { useState } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { FaSuitcaseRolling } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { TbBellPlus } from "react-icons/tb";
import AddGuest from "./Models/AddGuest";
import { useNavigate, useParams } from "react-router-dom";

const QueryStatus = () => {
  const navigate = useNavigate();
  const { id, qid } = useParams();
  const [showManageGuest, setshowManageGuest] = useState(false);
  const handleCloseGuest = () => {
    setshowManageGuest(false);
    // Add additional logic or actions to handle closing the modal in the parent component
  };
  return (
    <>
      {showManageGuest === true && <AddGuest onCloseModal={handleCloseGuest} />}
      <div className="p-3">
        <div className="flex flex-col text-gray-700 text-md ">
          <div
            className="flex items-center py-3 space-x-2 cursor-pointer"
            onClick={() => setshowManageGuest(true)}
          >
            <div>
              <AiFillCheckCircle color="green" size={20} />
            </div>
            <div>Manage Guest</div>{" "}
          </div>
          <hr />
          {/* <div className="flex items-center py-3 space-x-2 cursor-pointer">
            <div>
              <AiFillCloseCircle color="red" size={20} />
            </div>
            <div>Guest Doc</div>
          </div> */}
          <hr />
          <div className="flex items-center py-3 space-x-2 cursor-pointer">
            <div>
              <AiFillCloseCircle color="red" size={20} />
            </div>
            <div>Confirm Quiry</div>
          </div>
          <hr />
          <div
            className="flex items-center py-3 space-x-2 cursor-pointer"
            onClick={() => navigate(`/qutationcreateinvoice/${id}/${qid}`)}
          >
            <div>
              <AiFillCloseCircle color="red" size={20} />
            </div>
            <div>Create Invoice</div>
          </div>
          <hr />
          <div className="flex items-center py-3 space-x-2 cursor-pointer">
            <div>
              <AiFillCloseCircle color="red" size={20} />
            </div>
            <div>Create Voucher</div>
          </div>
          <hr />
          <div className="flex items-center py-3 space-x-2 cursor-pointer">
            <div>
              <FaSuitcaseRolling color="blue" size={20} />
            </div>
            <div>Preview Inventory</div>
          </div>
          <hr />
          <div className="flex flex-col py-3">
            <div className="text-sm text-gray-500">Change Status</div>
            <div className="px-5 py-2 text-center">
              <span className="flex items-center p-1 space-x-1 text-white bg-red-500 cursor-pointer text-md">
                <div>
                  <CgClose color="white" />
                </div>
                <div> Query Cancel</div>
              </span>
            </div>
            <div className="px-5 text-center ">
              <span className="flex items-center p-1 space-x-1 text-white bg-gray-700 cursor-pointer text-md">
                <div>
                  <CgClose color="white" />
                </div>
                <div> Query Lost</div>
              </span>
            </div>
          </div>
          <hr />
          <div className="flex flex-col py-3">
            <div className="text-sm text-gray-500">Followup's</div>
            <div className="px-5 py-2 text-center ">
              <span className="flex items-center p-1 space-x-1 text-blue-600 border border-blue-600 cursor-pointer text-md">
                <div>
                  <TbBellPlus className="text-blue-600" />
                </div>
                <div> Query Lost</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueryStatus;
