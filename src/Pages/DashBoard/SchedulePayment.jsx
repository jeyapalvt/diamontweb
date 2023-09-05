import React from "react";

const SchedulePayment = () => {
  const paymentData = [
    {
      id: "0001",
      payer: "Raman",
      date: "5/6/2013",
      status: "active",
      amount: "10000",
      currency: "INR",
    },
  ];
  return (
    <div>
      <div className="font-bold text-gray-800">SCHEDULET PAYMENT`S</div>
      <div>
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
            <div className="flex flex-col">
              <div className="font-bold"> {item.id}</div>
              <div className="flex">
                <div className="font-bold">PAYER:</div>
                {item.payer}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold"> {item.id}</div>
              <div className="flex">
                <div className="font-bold">PAYER:</div>
                {item.payer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePayment;
