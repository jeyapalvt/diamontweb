import React from "react";
import BookingNav from "./BookingNav";
import { Outlet } from "react-router-dom";

//IoWalletSharp
const MyBookings = () => {
  return (
    <div>
      <BookingNav />
      <Outlet />
    </div>
  );
};

export default MyBookings;
