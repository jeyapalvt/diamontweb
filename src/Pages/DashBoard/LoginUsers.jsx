import React from "react";

const LoginUsers = () => {
  const userData = [
    {
      name: "Raj Kamal",
      possition: "Operation Persion",
      date: "1 Month Ago",
    },
  ];
  return (
    <div>
      <div className="font-bold text-gray-800">LOGIN USERS</div>
      <div className="overflow-y-auto h-80">
        {userData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-around p-2 text-sm bg-blue-100 border-l-4 border-orange-700 shadow-md"
          >
            <div className="flex flex-col items-center text-center">
              <div className="px-1 font-bold">{item.name}</div>
              <div> {item.possition}</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="font-bold text-white bg-red-500 rounded-sm">
                {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginUsers;
