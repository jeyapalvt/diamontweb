import React, { useEffect, useState } from "react";
import QueryInfo from "./Panels/QueryInfo";
import QueryTable from "./Panels/QueryTable";
import QueryStatus from "./Panels/QueryStatus";
import axios from "axios";
import { BaseUrl } from "../../Reducers/Api";
import { useParams } from "react-router-dom";
const QueryDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    getQueryDetail();
  }, [id]);
  const [queryDetail, setqueryDetail] = useState({});
  const getQueryDetail = async () => {
    await axios
      .post(BaseUrl + "getTourQueryDetails", { tourQueryId: id })
      .then((res) => {
        setqueryDetail(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex p-2 space-x-2 ">
        <div className="w-3/12 bg-white rounded-sm shadow-md">
          <QueryInfo queryDetail={queryDetail} />
        </div>
        <div className="w-7/12 h-auto bg-white rounded-sm shadow-md">
          <QueryTable queryDetail={queryDetail} />
        </div>
        <div className="w-2/12 h-auto bg-white rounded-sm shadow-md">
          <QueryStatus />
        </div>
      </div>
    </div>
  );
};

export default QueryDetails;
