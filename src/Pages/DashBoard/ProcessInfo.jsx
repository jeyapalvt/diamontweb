import React from "react";
import QueryCount from "./QueryCount";
import TotalSalesExpense from "./Charts/TotalSalesExpense";
import MonthwiseQuery from "./Charts/MonthwiseQuery";
import TopSellingDestinatioons from "./Charts/TopSellingDestinatioons";
import QueryWiseStatus from "./Charts/QueryWiseStatus";
import QuerySource from "./Charts/QuerySource";
import TopAgens from "./Charts/TopAgens";
import TopSuppliers from "./Charts/TopSuppliers";
import TourMasterSheet from "./TourMasterSheet";

const ProcessInfo = () => {
  return (
    <div className="p-5 bg-white">
      <QueryCount />
      <div className="flex p-5 space-x-5">
        <div className="w-1/3 p-5 bg-white rounded-md shadow-md">
          <TotalSalesExpense />
        </div>
        <div className="w-1/3 p-5 bg-white rounded-md shadow-md">
          <MonthwiseQuery />
        </div>
        <div className="w-1/3 p-5 bg-white rounded-md shadow-md">
          <TopSellingDestinatioons />
        </div>
      </div>
      <div className="flex h-auto p-5 space-x-5">
        <div className="w-1/4 h-auto p-5 bg-white rounded-md shadow-md">
          <QueryWiseStatus />
        </div>
        <div className="w-1/4 p-5 bg-white rounded-md shadow-md">
          <QuerySource />
        </div>
        <div className="w-1/4 p-5 bg-white rounded-md shadow-md">
          <TopAgens />
        </div>
        <div className="w-1/4 p-5 bg-white rounded-md shadow-md">
          <TopSuppliers />
        </div>
      </div>

      <TourMasterSheet />
    </div>
  );
};

export default ProcessInfo;
