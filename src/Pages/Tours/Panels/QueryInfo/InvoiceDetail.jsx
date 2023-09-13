import React from "react";
import { DropDown, InputComp } from "../../../../Components";

const InvoiceDetail = () => {
  const locations = [{ name: "Total Cost", value: "Total Cost" }];
  const catogery = [{ name: "AED", value: "AED" }];
  const saveChanges = () => {
    console.log("save changes");
  };
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center text-center">
          <div>#00001</div>
          <div className="px-2 mb-5 text-sm font-bold text-white bg-green-700 rounded-sm">
            Dubai Package
          </div>
          <div className="p-1 text-sm font-bold text-white bg-green-700 rounded-sm">
            confirm
          </div>
        </div>

        <div className="p-5 mt-5 text-sm bg-white rounded-md shadow-md">
          <p>Invoive Details</p>
          <div className="p-1 font-bold">
            <div className="flex justify-between text-white">
              <div className="w-full p-1 bg-gray-500 ">Package Cost</div>
              <div className="w-full p-1 text-right bg-green-700">1989</div>
            </div>
          </div>
          <div className="p-1 font-bold">
            <div className="flex justify-between">
              <div className="p-1">Tax On</div>
              <div className="p-1 text-right">
                <DropDown options={locations} />
              </div>
            </div>
          </div>
          <div className="p-1 font-bold">
            <div className="flex justify-between">
              <div className="p-1">Charge Catogery</div>
              <div className="p-1 text-right">
                <DropDown options={catogery} />
              </div>
            </div>
          </div>
          <div className="p-1 font-bold">
            <div className="flex justify-between">
              <div className="p-1">Bank Charges</div>
              <div className="p-1 text-right">
                <InputComp width="w-20" />
              </div>
            </div>
          </div>
          <div className="p-1 font-bold">
            <div className="flex justify-between">
              <div className="p-1">Vat %</div>
              <div className="p-1 text-right">
                <InputComp width="w-20" />
              </div>
            </div>
          </div>
          <div className="p-1 font-bold">
            <div className="flex justify-between">
              <div className="p-1">Discount</div>
              <div className="p-1 text-right">
                <InputComp width="w-20" />
              </div>
            </div>
          </div>
          <div className="p-1 font-bold">
            <div className="">
              <p>Discount Remarks</p>
              <textarea
                className="bg-gray-100 border border-gray-300 rounded-md resize"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="p-1 font-bold">
            <div className="flex justify-between">
              <div className="p=1">Total Amount</div>
              <div className="p-1 text-right ">1989</div>
            </div>
          </div>
          <div className="p-1 font-bold">
            <div className="flex justify-between">
              <div className="p-1">Invoice Type</div>
              <div className="p-1 text-right ">Due Date</div>
            </div>
          </div>
          <div className="p-1 font-bold">
            <div className="flex justify-between">
              <div className="p-1 ">perfonma</div>
              <div className="p-1 text-right">date</div>
            </div>
          </div>
          <div
            className="p-1 text-center text-white bg-green-700 cursor-pointer hover:bg-green-600"
            onClick={() => saveChanges()}
          >
            save changes
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetail;
