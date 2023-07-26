import React, { useState } from "react";
import { imageUrl } from "../Reducers/Api";
const Cardtp = ({ id, image, name, city, price, description }) => {
  const [btnId, setbtnId] = useState();
  const [btnname, setbtnname] = useState();
  const getDetail = (id, name) => {
    setbtnname(name);
    if (btnId === id) {
      setbtnId(null); // Close the description if it's already open
    } else {
      setbtnId(id); // Open the description of the clicked card
    }
  };

  function HTMLToPlainText({ htmlString }) {
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(htmlString, "text/html");
    const plainText = htmlDocument.body.textContent;
    return <>{plainText}</>;
  }
  const maxLength = 100;
  return (
    <div>
      <div className="h-40 bg-white rounded-lg shadow-md sm:flex">
        <div className="w-1/5">
          <img
            className="object-cover w-full h-full rounded-lg"
            src={imageUrl + image}
            alt="activity/thumbnail"
          />
        </div>
        <div className="flex flex-col justify-between w-3/5 ">
          <div className="p-3">
            <div className="font-bold text-gray-600">{name}</div>
            <div className="text-sm text-gray-500">{city}</div>
          </div>

          <div className="flex mt-auto ml-2 mr-2 text-sm text-center">
            <div
              className="p-2 ml-2 bg-gray-200 rounded-tl-sm rounded-tr-sm cursor-pointer"
              onClick={() => getDetail(id, "description")}
            >
              Description
            </div>
            <div className="p-2 ml-2 bg-gray-200 rounded-tl-sm rounded-tr-sm cursor-pointer">
              Terms & Conditions
            </div>{" "}
            <div className="p-2 ml-2 bg-gray-200 rounded-tl-sm rounded-tr-sm cursor-pointer">
              Photos
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/5 p-3 mt-auto text-center">
          <div className="mb-4">three</div>
          <div>
            <button>Booknoew</button>
          </div>
        </div>
      </div>
      {btnId === id && btnname === "description" && (
        <div className="p-10 bg-white rounded-lg shadow-md sm:flex">
          <HTMLToPlainText htmlString={description} />
        </div>
      )}
    </div>
  );
};

export default Cardtp;
