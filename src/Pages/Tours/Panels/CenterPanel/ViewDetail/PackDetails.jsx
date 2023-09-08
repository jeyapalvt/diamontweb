import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BaseUrl } from "../../../../../Reducers/Api";
const PackDetails = () => {
  const { id } = useParams();

  const [queryData, setqueryData] = useState([]);
  const [destData, setdestData] = useState([]);
  useEffect(() => {
    getQutationDetail();
  }, []);
  const getQutationDetail = async () => {
    await axios
      .post(BaseUrl + "getTourQueryDetails", { tourQueryId: id })
      .then((res) => {
        // console.log(`${JSON.stringify(res.data, null, 2)}`);
        setqueryData(res.data);

        console.log(res.data.destList);
        setdestData(res.data.destList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [manualOrMaster, setManualOrMaster] = useState([]);

  const handleManualOrMaster = (date) => {
    // Convert the date to "YYYY-MM-DD" format
    const formattedDate = date.toISOString().split("T")[0];

    // Use the functional form of setState to update the state based on the previous state
    setManualOrMaster((prevManualOrMaster) => {
      if (prevManualOrMaster.includes(formattedDate)) {
        // If it exists, remove it
        return prevManualOrMaster.filter((d) => d !== formattedDate);
      } else {
        // If it doesn't exist, add it
        return [...prevManualOrMaster, formattedDate];
      }
    });
  };

  const renderDates = () => {
    const result = [];

    for (let i = 0; i < destData.length; i++) {
      const fromDate = new Date(destData[i].fromDate);
      const toDate = new Date(destData[i].toDate);

      while (fromDate <= toDate) {
        // const formattedDate = fromDate.toLocaleDateString("en-US", {
        //   year: "numeric",
        //   month: "short",
        //   day: "numeric",
        // });
        const formattedDate = fromDate.toISOString().split("T")[0];
        result.push(
          <div key={fromDate.getTime()}>
            <div className="p-2 px-1 mt-2 bg-gray-500 border-l-4 border-orange-600">
              <div className="flex justify-between">
                <div className="text-white">
                  {/* {fromDate.toLocaleDateString()}{" "} */}
                  {formattedDate}
                </div>
                <div>
                  <span
                    className="p-1 font-bold text-red-500 bg-white rounded-md cursor-pointer text-msm "
                    onClick={() => handleManualOrMaster(fromDate)}
                  >
                    {manualOrMaster.includes(formattedDate)
                      ? "Form Manual"
                      : "Form Master"}
                  </span>
                </div>
              </div>
            </div>
            {/* Format date to a readable string */}
          </div>
        );
        fromDate.setDate(fromDate.getDate() + 1);
      }
    }

    return result;
  };
  return (
    <div className="grid grid-cols-1 divide-y">
      <div className="items-center p-5 text-center ">
        <span className="p-3 font-bold text-white rounded-md bg-slate-800">
          Destination Covered
        </span>
      </div>

      {renderDates()}
    </div>
  );
};

export default PackDetails;
