import React, { useState, useEffect } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { MdOutlineModeEdit } from "react-icons/md";
import { ImUpload3 } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import EditQutation from "../Models/EditQutation";
import { useNavigate } from "react-router-dom";
import AddQutation from "../Models/AddQutation";
import ConfirmationModel from "../Models/ConfirmationModel";
import AddGuest from "../Models/AddGuest";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../../../../Reducers/Api";
import { addQutationState } from "../../../../Reducers/addQutationSlice";
import { useDispatch, useSelector } from "react-redux";
import { GoPencil } from "react-icons/go";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
const Quatation = ({ queryDetail }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [dataList, setdataList] = useState([]);
  const addQutationdata = useSelector((state) => state.addQutationdata.data);
  useEffect(() => {
    getQuatationDetail();
  }, [dispatch]);

  const getQuatationDetail = async () => {
    let tempVal = [];
    await axios
      .post(BaseUrl + "listQueryQuotation", { queryId: id })
      .then((res) => {
        dispatch(addQutationState(res.data));

        tempVal.push(res.data);
        setdataList(tempVal);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const [queryDetail, setqueryDetail] = useState();
  // useEffect(() => {
  //   getQueryDetail();
  // }, []);

  // const getQueryDetail = async () => {
  //   await axios
  //     .post(BaseUrl + "getTourQueryDetails", { tourQueryId: id })
  //     .then((res) => {
  //       console.log(res.data);
  //       setqueryDetail(res.data);
  //     })
  //     .catch((error) => {
  //       console.log9error;
  //     });
  // };
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
    // Add additional logic or actions to handle closing the modal in the parent component
  };
  const [showInserQuery, setshowInserQuery] = useState(false);
  const [showAddQuery, setshowAddQuery] = useState(false);
  const [showConfirmModel, setshowConfirmModel] = useState(false);
  const [showAddGuest, setshowAddGuest] = useState(false);
  const handleCloseInsert = () => {
    setshowInserQuery(false);
  };
  const handleCloseAdd = () => {
    setshowAddQuery(false);
  };
  const handleCloseConfirm = () => {
    setshowConfirmModel(false);
    setshowAddGuest(true);
  };
  const handleCloseGuest = () => {
    setshowAddGuest(false);
  };

  const getTotalNights = (fromDateStr, toDateStr) => {
    // Date strings

    // Parse date strings and create Date objects
    const fromDate = new Date(fromDateStr);
    const toDate = new Date(toDateStr);

    // Calculate the time difference in milliseconds
    const timeDifference = toDate - fromDate;

    // Calculate the number of nights by dividing the time difference by the number of milliseconds in a day
    const numberOfNights = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return numberOfNights;
  };
  return (
    <div>
      {console.log("addQutationdata", addQutationdata)}
      {showModal && (
        <EditQutation onCloseModal={handleCloseModal} qutationId={"1234"} />
      )}
      {showAddQuery === true && (
        <AddQutation onCloseModal={handleCloseAdd} queryDetail={queryDetail} />
      )}
      {showConfirmModel === true && (
        <ConfirmationModel onCloseModal={handleCloseConfirm} />
      )}
      {showAddGuest === true && <AddGuest onCloseModal={handleCloseGuest} />}
      <div className="flex items-center justify-between py-3">
        <div className="text-sm font-bold text-gray-700">Quotation Builder</div>
        <div className="flex space-x-3 text-sm font-medium">
          <span
            className="flex items-center p-1 space-x-1 text-sm text-white bg-blue-500 cursor-pointer"
            onClick={() => setshowInserQuery(true)}
          >
            <div>
              <ImUpload3 />
            </div>
            <div>Inser Query</div>
          </span>
          <span
            className="flex items-center p-1 space-x-1 text-sm text-white bg-orange-500 cursor-pointer"
            onClick={() => setshowAddQuery(true)}
          >
            <div>
              <AiOutlinePlus />
            </div>
            <div>Add Quatation</div>
          </span>
        </div>
      </div>

      {addQutationdata.length > 0 && (
        <table className="w-full border border-collapse table-auto">
          <thead className="text-sm text-white bg-slate-700">
            <tr>
              <th className="w-1/12 p-2 border"></th>
              <th className="w-8/12 p-2 border">Title</th>
              <th className="w-1/12 p-2 border">Status</th>
              <th className="w-2/12 p-2 border">Action</th>
            </tr>
          </thead>

          <tbody className="text-sm font-thin text-gray-700">
            {addQutationdata.map((item, index) => (
              <tr key={index}>
                <th className="w-1/12 h-auto p-2 text-left border">
                  {/* {item.queryQuotationId} */}
                  <GoPencil size={20} />
                </th>
                <th className="w-8/12 h-auto p-2 text-left border">
                  <div>
                    <div className="text-blue-600">
                      #0000{item.queryQuotationId}
                    </div>
                    <div className="font-bold">{item.quoteTitle}</div>

                    <div></div>
                    <div className="flex items-center">
                      {Number(item.nofAdult + item.nofChild + item.nofInfant)}{" "}
                      &nbsp; Pax &nbsp;
                      <BsFillCalendarWeekFill /> &nbsp;{" "}
                      <div className="font-bold"> Start Date:</div>
                      {item.destList[0]?.fromDate} -
                      <div className="font-bold"> End Date:</div>&nbsp;
                      <BsFillCalendarWeekFill /> &nbsp;
                      <div>
                        {item.destList[item.destList.length - 1]?.toDate}
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div>
                        <AiOutlineFieldTime />{" "}
                      </div>{" "}
                      &nbsp;
                      {getTotalNights(
                        item.destList[0]?.fromDate,
                        item.destList[item.destList.length - 1]?.toDate
                      ) - 1}{" "}
                      &nbsp; Nights
                    </div>
                  </div>
                </th>
                <th className="w-1/12 h-auto p-2 text-left border">
                  <span
                    className={`text-white p-1 rounded-md  ${"bg-green-500"}`}
                  >
                    pending
                  </span>
                </th>
                <th className="w-2/12 h-auto p-2 border">
                  <div className="flex flex-col">
                    <div>
                      {" "}
                      <span
                        className="p-2 px-5 text-white bg-blue-500 rounded-sm shadow-md cursor-pointer"
                        onClick={() =>
                          navigate(
                            `/qutationdetailview/${item?.queryId}/${item?.queryQuotationId}`
                          )
                        }
                      >
                        View
                      </span>
                    </div>
                    <div className="mt-5">
                      {" "}
                      <span
                        className="p-2 px-5 text-white bg-orange-500 rounded-sm shadow-md cursor-pointer"
                        onClick={() => setshowConfirmModel(true)}
                      >
                        Final
                      </span>
                    </div>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Quatation;
