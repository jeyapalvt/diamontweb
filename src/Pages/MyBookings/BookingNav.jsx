import React, { useEffect, useState } from "react";
import { AiFillDashboard, AiFillCar } from "react-icons/ai";
import { TbBrandBooking, TbFileSpreadsheet } from "react-icons/tb";

import { FaHotel, FaThemeisle, FaFileInvoice } from "react-icons/fa";
import { MdTour, MdAccountBalanceWallet } from "react-icons/md";
import { Link } from "react-router-dom";
import { matchRoutes, useLocation } from "react-router-dom";

const BookingNav = () => {
  const location = useLocation();
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
  }, [location.pathname, pathName]);
  return (
    <div>
      <div className="flex p-5 space-x-2 text-sm align-middle bg-white">
        <div className="w-1/12 text-black rounded-md hover:bg-[#da251d] hover:text-white">
          <Link to="">
            <div
              className={
                pathName === "bookings"
                  ? "flex flex-col items-center justify-center bg-[#da251d] px-3 rounded-md text-white"
                  : "flex flex-col items-center justify-center"
              }
            >
              <div>
                <AiFillDashboard size={30} />
              </div>
              <div>DashBoard</div>
            </div>
          </Link>
        </div>
        <div className="w-1/12 text-black rounded-md hover:bg-[#da251d] hover:text-white">
          <Link to="allbookings">
            <div
              className={
                pathName === "allbookings"
                  ? "flex flex-col items-center justify-center bg-[#da251d] px-3 rounded-md text-white"
                  : "flex flex-col items-center justify-center"
              }
            >
              <div>
                <TbBrandBooking size={30} />
              </div>
              <div>All Booking</div>
            </div>
          </Link>
        </div>
        <div className="w-1/12 text-black rounded-md hover:bg-[#da251d] hover:text-white">
          <Link to="hotelbooking">
            <div
              className={
                pathName === "hotelbooking"
                  ? "flex flex-col items-center justify-center bg-[#da251d] ] px-3 rounded-md text-white"
                  : "flex flex-col items-center justify-center"
              }
            >
              <div>
                <FaHotel size={30} />
              </div>
              <div>Hotel Booking</div>
            </div>
          </Link>
        </div>
        <div className="w-1/12 text-black rounded-md hover:bg-[#da251d] hover:text-white">
          <Link to="activitybooking">
            <div
              className={
                pathName === "activitybooking"
                  ? "flex flex-col items-center justify-center bg-[#da251d] ]  rounded-md text-white"
                  : "flex flex-col items-center justify-center"
              }
            >
              <div>
                <FaThemeisle size={30} />
              </div>
              <div className="text-sm">Activity Booking</div>
            </div>
          </Link>
        </div>
        <div className="w-1/12 text-black rounded-md hover:bg-[#da251d] hover:text-white">
          <Link to="toursbooking">
            <div
              className={
                pathName === "toursbooking"
                  ? "flex flex-col items-center justify-center bg-[#da251d] ]  rounded-md text-white"
                  : "flex flex-col items-center justify-center"
              }
            >
              <div>
                <MdTour size={30} />
              </div>
              <div>Tours Booking</div>
            </div>
          </Link>
        </div>
        <div className="w-1/12 text-black rounded-md hover:bg-[#da251d] hover:text-white">
          <Link to="transferbooking">
            <div
              className={
                pathName === "transferbooking"
                  ? "flex flex-col items-center justify-center bg-[#da251d] ]   rounded-md text-white"
                  : "flex flex-col items-center justify-center"
              }
            >
              <div>
                <AiFillCar size={30} />
              </div>
              <div>Transfer Booking</div>
            </div>
          </Link>
        </div>
        <div className="w-1/12 text-black rounded-md hover:bg-[#da251d] hover:text-white">
          <Link to="invoice">
            <div
              className={
                pathName === "invoice"
                  ? "flex flex-col items-center justify-center bg-[#da251d] ] px-3   rounded-md text-white"
                  : "flex flex-col items-center justify-center"
              }
            >
              <div>
                <FaFileInvoice size={30} />
              </div>
              <div>Invoice</div>
            </div>
          </Link>
        </div>
        <div className="w-1/12 text-black rounded-md hover:bg-[#da251d] hover:text-white">
          <Link to="balancesheet">
            <div
              className={
                pathName === "balancesheet"
                  ? "flex flex-col items-center justify-center bg-[#da251d] ]   rounded-md text-white"
                  : "flex flex-col items-center justify-center"
              }
            >
              <div>
                <TbFileSpreadsheet size={30} />
              </div>
              <div>Balance Sheet</div>
            </div>
          </Link>
        </div>

        <div className="w-1/12 text-black rounded-md hover:bg-[#da251d] hover:text-white">
          <Link to="walletrecharge">
            <div
              className={
                pathName === "walletrecharge"
                  ? "flex flex-col items-center justify-center bg-[#da251d] ]  rounded-md text-white text-sm"
                  : "flex flex-col items-center justify-center"
              }
            >
              <div>
                <MdAccountBalanceWallet size={30} />
              </div>
              <div className="text-sm">Wallet Recharge</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingNav;
