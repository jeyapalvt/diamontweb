import React, { useState } from "react";
import { InputComp, DropDown, Button } from "../../../Components";
import AddQuotationNew from "./Panels/AddQuotationNew";
const CPackQuotationList = () => {
  const [showAddQuery, setshowAddQuery] = useState(false);

  const handleCloseAdd = () => {
    setshowAddQuery(false);
  };
  return (
    <>
      {showAddQuery === true && (
        <AddQuotationNew onCloseModal={handleCloseAdd} />
      )}

      <div className="p-5 mt-5 bg-white ">
        <div className="flex items-center justify-end mr-10 space-x-5">
          <div>one</div>{" "}
          <div>
            {" "}
            <button
              className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
              type="button"
              onClick={() => setshowAddQuery(true)}
            >
              + Add Quotation
            </button>
          </div>{" "}
          <div>
            {" "}
            <InputComp type="text" id="" placeholder="Search by title" />
          </div>
          <div>
            <Button name="Search" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CPackQuotationList;
