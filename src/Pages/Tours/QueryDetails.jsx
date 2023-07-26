import React from "react";
import QueryInfo from "./Panels/QueryInfo";
import QueryTable from "./Panels/QueryTable";
import QueryStatus from "./Panels/QueryStatus";

const QueryDetails = () => {
  return (
    <div>
      <div className="flex p-2 space-x-2 ">
        <div className="w-3/12 bg-white rounded-sm shadow-md">
          <QueryInfo />
        </div>
        <div className="w-7/12 h-auto bg-white rounded-sm shadow-md">
          <QueryTable />
        </div>
        <div className="w-2/12 h-auto bg-white rounded-sm shadow-md">
          <QueryStatus />
        </div>
      </div>
    </div>
  );
};

export default QueryDetails;
