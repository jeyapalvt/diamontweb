import React from "react";
import PackDetails from "./ViewDetail/PackDetails";
import OtherDetails from "./ViewDetail/OtherDetails";

const QuatationDetailView = () => {
  return (
    <div>
      <div className="flex p-2 space-x-2 ">
        <div className="w-3/12 bg-white rounded-sm shadow-md">
          <PackDetails />
        </div>
        <div className="w-9/12 h-auto bg-white rounded-sm shadow-md">
          <OtherDetails />
        </div>
      </div>
    </div>
  );
};

export default QuatationDetailView;
