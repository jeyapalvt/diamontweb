import React from "react";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { MdWifiCalling2 } from "react-icons/md";
const RecentTask = () => {
  const taskData = [
    {
      date: "5/6/2013",
      message: "For Booking Fallow Up Call",
      status: "Task Not Completed",
    },
  ];
  return (
    <div>
      <div className="font-bold text-gray-800">SCHEDULET PAYMENT`S</div>
      <div className="overflow-y-auto h-80">
        {taskData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-around p-2 text-sm bg-gray-300 border-l-4 border-black shadow-md"
          >
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center space-x-1 ">
                <BsCalendar2WeekFill /> {item.date}
              </div>
              <div className="flex">
                <div className="px-1">{item.status}</div>
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="font-bold text-white bg-black rounded-sm">
                {" "}
                {item.message}
              </div>
            </div>
            <div className="text-white bg-gray-900 1">
              <div>
                <MdWifiCalling2 size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTask;
