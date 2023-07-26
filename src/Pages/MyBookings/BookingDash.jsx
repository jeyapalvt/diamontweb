import React from "react";
import {
  BookingCounts,
  BookingStatus,
  SalesAnalytics,
} from "./DashboardCharts";

const BookingDash = () => {
  return (
    <div>
      <BookingCounts />
      <div className="flex p-5 space-x-5">
        <div className="w-1/3 p-5 bg-white rounded-md shadow-md">
          <BookingStatus />
        </div>
        <div className="w-2/3 p-5 bg-white rounded-md shadow-md">
          <SalesAnalytics />
        </div>
      </div>
    </div>
  );
};

export default BookingDash;
