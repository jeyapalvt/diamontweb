import React from "react";

const BookingCounts = () => {
  return (
    <div>
      <div className="flex items-center p-5 space-x-5 text-center text-white">
        <div className="w-1/6 bg-[#008080] h-20 rounded-md shadow-md p-2 justify-center flex flex-col ">
          <div className="text-sm font-bold">Total Confirmed Booking</div>
          <div>13500</div>
        </div>
        <div className="w-1/6 bg-[#800080] h-20 rounded-md shadow-md p-2 justify-center flex flex-col">
          <div className="text-sm font-bold">Total Cancelled</div>
          <div>300</div>
        </div>
        <div className="w-1/6 bg-[#4682B4] h-20 rounded-md shadow-md p-2 justify-center flex flex-col">
          <div className="text-sm font-bold">Total Vouchered Booking</div>
          <div>599</div>
        </div>
        <div className="w-1/6 bg-[#808000] h-20 rounded-md shadow-md p-2 justify-center flex flex-col">
          <div className="text-sm font-bold">Total Completed Booking</div>
          <div>498237</div>
        </div>
        <div className="w-1/6 bg-[#483D8B] h-20 rounded-md shadow-md p-2 justify-center flex flex-col">
          <div className="text-sm font-bold">Total Points Earn</div>
          <div>13500242423</div>
        </div>
        <div className="w-1/6 bg-[#D2691E] h-20 rounded-md shadow-md p-2 justify-center flex flex-col">
          <div className="text-sm font-bold">Total Available Points</div>
          <div>13500</div>
        </div>
      </div>
      <div className="flex items-center px-5 space-x-5 text-center text-white">
        <div className="w-1/6 bg-[#008B8B] h-20 rounded-md shadow-md p-2 justify-center flex flex-col">
          <div className="text-sm font-bold">Activity Booking</div>
          <div>3653</div>
        </div>
        <div className="w-1/6 bg-[#800000] h-20 rounded-md shadow-md p-2 justify-center flex flex-col">
          <div className="text-sm font-bold">Hotel Booking</div>
          <div>8763</div>
        </div>
        <div className="w-1/6 bg-[#556B2F] h-20 rounded-md shadow-md p-2 justify-center flex flex-col">
          <div className="text-sm font-bold">Tours Booking</div>
          <div>5798</div>
        </div>
        <div className="w-1/6 bg-[#2F4F4F] h-20 rounded-md shadow-md p-2 justify-center flex flex-col">
          <div className="text-sm font-bold">Visa Booking</div>
          <div>3947</div>
        </div>
        <div className="w-1/6 bg-[#191970] h-20 rounded-md shadow-md p-2 justify-center flex flex-col">
          <div className="text-sm font-bold">Total Wallet Payment</div>
          <div>5798</div>
        </div>
        <div className="w-1/6 bg-[#A0522D] h-20 rounded-md shadow-md p-2 justify-center flex flex-col">
          <div className="text-sm font-bold">Toatl Online Payment</div>
          <div>59</div>
        </div>
      </div>
    </div>
  );
};

export default BookingCounts;
