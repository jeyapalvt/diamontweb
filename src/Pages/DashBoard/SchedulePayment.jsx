import React from "react";
import { BsCalendar2WeekFill } from "react-icons/bs";
const SchedulePayment = () => {
  const paymentData = [
    {
      id: "0001",
      payer: "Raman",
      date: "5/6/2013",
      status: "ACTIVE",
      amount: "10,000.00",
      currency: "INR",
    },

    //BiSolidCalendar
  ];
  return (
    <div>
      <div className="font-bold text-gray-800">SCHEDULET PAYMENT`S</div>
      <div className="overflow-y-auto h-80">
        {paymentData.map((item, index) => (
          <div
            key={index}
            className="flex justify-around p-2 text-sm bg-orange-100 border-l-4 border-red-500 shadow-md"
          >
            <div className="flex flex-col">
              <div className="font-bold"> {item.id}</div>
              <div className="flex">
                <div className="font-bold">PAYER:</div>
                {item.payer}
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center space-x-1 ">
                <BsCalendar2WeekFill /> {item.date}
              </div>
              <div className="flex">
                <div className="px-1 text-white bg-green-500 rounded-sm">
                  {item.status}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="font-bold"> {item.amount}</div>
              <div className="flex">
                <div className="font-bold">{item.currency}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePayment;
