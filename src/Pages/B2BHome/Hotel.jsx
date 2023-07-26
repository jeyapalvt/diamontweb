import React, { useState, useEffect } from "react";
import { Button, InputComp, DefaultDate, DropDown } from "../../Components";
import { useNavigate } from "react-router-dom";

const SmallInput = ({
  type,
  id,
  placeholder,
  label,
  onChange,
  value,
  defaultValue,
}) => {
  return (
    <div>
      <label
        htmlFor="small-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="flex">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          defaultValue={defaultValue}
          className="block p-2 text-gray-900 border border-gray-300 rounded-lg w-14 bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
};

const SmallButton = ({ name, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={
        color
          ? "h-7 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg mt-7"
          : "h-7 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg mt-7"
      }
    >
      {name}
    </button>
  );
};

const Hotel = () => {
  const navigate = useNavigate();
  const [showDropDown, setshowDropDown] = useState(false);

  const [totalRooms, setTotalRooms] = useState(0);
  const [totalAdults, setTotalAdults] = useState(0);
  const [totalChildren, setTotalChildren] = useState(0);
  const [formData, setformData] = useState({
    fdate: new Date(),
  });
  const [roomData, setroomData] = useState([
    {
      room: 1,
      adult: 2,
      child: 0,
    },
  ]);

  const addMoreRoom = () => {
    const values = [...roomData];
    values.push({
      room: Number(values.length + 1),
      adult: 0,
      child: 0,
    });
    setroomData(values);
  };

  const removeRoom = () => {
    const values = [...roomData];
    if (values.length > 1) values.pop();
    setroomData(values);
  };

  const handleChange = (event, index, field) => {
    const { value } = event.target;
    setroomData((prevRoomData) => {
      const updatedData = [...prevRoomData];
      updatedData[index][field] = value;
      return updatedData;
    });
  };

  // useEffect(() => {
  //   // Calculate the total number of rooms, adults, and children
  //   const totalRooms = roomData.length;
  //   const totalAdults = roomData.reduce(
  //     (sum, room) => sum + parseInt(room.adult, 10),
  //     0
  //   );
  //   const totalChildren = roomData.reduce(
  //     (sum, room) => sum + parseInt(room.child, 10),
  //     0
  //   );

  //   console.log("Total Rooms:", totalRooms);
  //   console.log("Total Adults:", totalAdults);
  //   console.log("Total Children:", totalChildren);
  // }, [roomData]);

  useEffect(() => {
    let adults = 0;
    let children = 0;

    roomData.forEach((room) => {
      adults += parseInt(room.adult) || 0;
      children += parseInt(room.child) || 0;
    });

    setTotalAdults(adults);
    setTotalChildren(children);
  }, [roomData]);

  const locations = [
    { name: "Dubai", value: "dubai" },
    { name: "Abu Dhabi", value: "abu dhabi" },
  ];

  return (
    <div className="grid grid-cols-5 gap-4">
      <div>
        <DropDown
          type="text"
          label="Loaction"
          placeholder="location"
          options={locations}
        />
      </div>
      <div>
        <InputComp
          type="date"
          id="fDate"
          name="fDate"
          placeholder="Date"
          label="Check In"
          onChange={(e) => {
            handleChange(e, 0, "fdate");
          }}
          // min={disablePastDate()}
          defaultValue={DefaultDate()}
        />
      </div>
      <div>
        <InputComp
          type="date"
          id="tDate"
          placeholder="Date"
          label="Check Out"
          // min={disableCheckinBeforeDate(formData.fdate)}
          onChange={(e) => {
            handleChange(e, 0, "tdate");
          }}
        />
      </div>
      <div>
        <label
          htmlFor="small-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Room
        </label>
        <div
          className="relative block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-default w-52 bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onClick={() => setshowDropDown(!showDropDown)}
        >
          {roomData.length} Room
          <span> / {totalAdults} Adult(s)</span>
          <span> / {totalChildren} Child(ren)</span>
        </div>
        {showDropDown && (
          <div className="absolute z-10 p-3 mt-2 rounded-md shadow-md bg-slate-200 w-92">
            {roomData.map((item, index) => (
              <div key={index}>
                <div>Room {item.room}</div>
                <div className="flex space-x-3">
                  <div className="flex items-center space-x-2">
                    <SmallButton
                      name="-"
                      onClick={() =>
                        handleChange(
                          { target: { value: parseInt(item.adult) - 1 } },
                          index,
                          "adult"
                        )
                      }
                    />
                    <SmallInput
                      value={item.adult}
                      label="Adult"
                      onChange={(e) => handleChange(e, index, "adult")}
                    />
                    <SmallButton
                      name="+"
                      onClick={() =>
                        handleChange(
                          { target: { value: parseInt(item.adult) + 1 } },
                          index,
                          "adult"
                        )
                      }
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <SmallButton
                      name="-"
                      onClick={() =>
                        handleChange(
                          { target: { value: parseInt(item.child) - 1 } },
                          index,
                          "child"
                        )
                      }
                    />
                    <SmallInput
                      value={item.child}
                      label="Child"
                      onChange={(e) => handleChange(e, index, "child")}
                    />
                    <SmallButton
                      name="+"
                      onClick={() =>
                        handleChange(
                          { target: { value: parseInt(item.child) + 1 } },
                          index,
                          "child"
                        )
                      }
                    />
                  </div>
                  <div className="mt-1">
                    <SmallButton
                      color="red"
                      name="X"
                      onClick={() => removeRoom()}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-10 ">
              <Button name="+ Add" onClick={() => addMoreRoom()} />
            </div>
            <div className="items-end mt-5">
              <Button
                onClick={() => setshowDropDown(!showDropDown)}
                name="Apply"
              />
            </div>
          </div>
        )}
      </div>
      <div className="mt-6 ml-10">
        <Button name="Search" onClick={() => navigate("/hotellist")} />
      </div>
    </div>
  );
};

export default Hotel;
