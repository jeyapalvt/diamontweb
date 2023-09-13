import React from "react";

const PaymentHistory = () => {
  return (
    <div className="p-5 bg-white">
      <div className="flex justify-between space-x-10">
        <div className="w-full h-auto p-5 text-center text-white bg-blue-800 rounded-md">
          <div> Total Amount </div>
          <div>0</div>
        </div>
        <div className="w-full h-auto p-5 text-center text-white bg-green-800 rounded-md">
          <div> Total Amount </div>
          <div>0</div>
        </div>
        <div className="w-full h-auto p-5 text-center text-white bg-red-800 rounded-md">
          <div> Total Amount </div>
          <div>0</div>
        </div>
      </div>
      <div className="mt-5">
        <div className="p-5 border-2 border-gray-400 rounded-md">
          <div className="flex justify-between ">
            <div>Payment</div>
            <div className="p-1 text-center text-white bg-blue-500 cursor-pointer hover:bg-blue-600">
              Update Payment
            </div>
          </div>
        </div>
        <div className="mt-5">
          <table className="w-full border border-collapse table-auto">
            <thead className="text-sm font-bold text-gray-800 bg-slate-300">
              <tr>
                <th className="w-2/12 p-2 border">Date</th>
                <th className="w-1/12 p-2 border">Status</th>
                <th className="w-1/12 p-2 border">Recived</th>
                <th className="w-1/12 p-2 border">Method</th>
                <th className="w-1/12 p-2 border">Attachment</th>
                <th className="w-1/12 p-2 border">Remark</th>
                <th className="w-1/12 p-2 border">Payment Link</th>
                <th className="w-1/12 p-2 border">Recipet</th>
                <th className="w-1/12 p-2 border"></th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700 font-extralight">
              <tr>
                <th className="w-2/12 p-2 border"></th>
                <th className="w-1/12 p-2 border"></th>
                <th className="w-1/12 p-2 border"></th>
                <th className="w-1/12 p-2 border"></th>
                <th className="w-1/12 p-2 border"></th>
                <th className="w-1/12 p-2 border"></th>
                <th className="w-1/12 p-2 border"></th>
                <th className="w-1/12 p-2 border"></th>
                <th className="w-1/12 p-2 border"></th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-5">
          <div className="flex justify-between">
            <div className="w-full p-1 text-center text-white bg-green-600 cursor-pointer hover:bg-green-700">
              Send Payment Plan
            </div>
            <div className="w-full"></div>
            <div className="w-full p-1 text-center text-white bg-green-600 cursor-pointer hover:bg-green-700">
              Download Payment Plan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
