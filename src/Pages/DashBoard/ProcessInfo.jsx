import React from "react";
import QueryCount from "./QueryCount";
import TotalSalesExpense from "./Charts/TotalSalesExpense";
import MonthwiseQuery from "./Charts/MonthwiseQuery";
import TopSellingDestinatioons from "./Charts/TopSellingDestinatioons";

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
    </div>
  );
};

export default ProcessInfo;
