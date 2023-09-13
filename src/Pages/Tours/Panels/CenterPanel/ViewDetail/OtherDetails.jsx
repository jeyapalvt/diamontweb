import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBack, MdAdd } from "react-icons/md";
import { RiGalleryFill } from "react-icons/ri";

import AddTotalCost from "../../Models/AddTotalCost";
import PaxMarkup from "../../Models/PaxMarkup";
import axios from "axios";
import { BaseUrl } from "../../../../../Reducers/Api";
import { useParams } from "react-router-dom";
import QueryForAllDates from "./QueryForAllDates";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {
  addHotelManual,
  addSightSeeingManual,
  addtransferManual,
} from "../../../../../Reducers/mainQuerySlice";
import { B2BQuotation } from "./ShowDetails";
const OtherDetails = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [totalCostShow, settotalCostShow] = useState(false);
  const [paxMarkupShow, setpaxMarkupShow] = useState(false);
  const [queryDetail, setqueryDetail] = useState({});
  const [destinationList, setdestinationList] = useState([]);
  const [b2bQuotation, setb2bQuotation] = useState(false);
  const [queryForAllDates, setqueryForAllDates] = useState(true);
  const queryHotelList = useSelector((state) => state.mainQuery.hotelManual);

  const querySightSeeingList = useSelector(
    (state) => state.mainQuery.sightSeeingManual
  );

  const queryTransferList = useSelector(
    (state) => state.mainQuery.transferManul
  );
  const { id, qid } = useParams();
  const handleCloseTotalShow = () => {
    settotalCostShow(false);
    // Add additional logic or actions to handle closing the modal in the parent component
  };
  const handleCloseMarkupShow = () => {
    setpaxMarkupShow(false);
    // Add additional logic or actions to handle closing the modal in the parent component
  };

  useEffect(() => {
    // dispatch(addSightSeeingManual());
    // dispatch(addHotelManual());
    // dispatch(addtransferManual());
    getQueryDetail();
    getQutationDetail();
  }, []);
  const [queryDetails, setqueryDetails] = useState();
  const getQueryDetail = async () => {
    await axios
      .post(BaseUrl + "getTourQueryDetails", { tourQueryId: id })
      .then((res) => {
        setdestinationList(res.data.destList);
        setqueryDetails(res.data);
        setqueryDetail(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [qutationQueryDetail, setqutationQueryDetail] = useState();
  const getQutationDetail = async () => {
    //getQueryQuotationDetails

    await axios
      .post(BaseUrl + "getQueryQuotationDetails", { queryQuotationId: qid })
      .then((res) => {
        setqutationQueryDetail(res.data);

        for (let i = 0; i < res.data.querySightSeeingList.length; i++) {
          dispatch(addSightSeeingManual(res.data.querySightSeeingList[i]));
        }
        for (let i = 0; i < res.data.queryHotelList.length; i++) {
          dispatch(addHotelManual(res.data.queryHotelList[i]));
        }
        for (let i = 0; i < res.data.queryTransferList.length; i++) {
          dispatch(addtransferManual(res.data.queryTransferList[i]));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitFinalObject = () => {
    const submitObject = {
      queryQuotationId: qid,
      queryId: queryDetails.queryId,
      quoteTitle: queryDetails.quoteTitle,
      nofAdult: queryDetails.nofAdult,
      nofChild: queryDetails.nofChild,
      nofInfant: queryDetails.nofInfant,
      createdDate: queryDetails.createdDate,
      serviceType: queryDetails.serviceType,
      sglRoom: queryDetails.sglRoom,
      dblRoom: queryDetails.dblRoom,
      trplRoom: queryDetails.trplRoom,
      quadRoom: queryDetails.quadRoom,
      cwbRoom: queryDetails.cwbRoom,
      cnbRoomAbove05: queryDetails.cnbRoomAbove05,
      cnbRoomBelow05: queryDetails.cnbRoomBelow05,
      infRoom: queryDetails.infRoom,
      destList: queryDetails.destList,
      queryHotelList: queryHotelList,
      querySightSeeingList: querySightSeeingList,
      queryTransferList: queryTransferList,
    };

    //     setQueryQuotation
    // getQueryQuotationDetails
    // editQueryQuotation
    // listQueryQuotation

    axios
      .post(BaseUrl + "editQueryQuotation", submitObject)
      .then((res) => {
        Swal.fire("Success", "Saved Successfully", "success");
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {totalCostShow === true && (
        <AddTotalCost onCloseModal={handleCloseTotalShow} />
      )}
      {paxMarkupShow === true && (
        <PaxMarkup onCloseModal={handleCloseMarkupShow} />
      )}

      {/* <div className="px-5">
        <div className="grid grid-cols-3 text-center text-white bg-teal-500 divide-x">
          <div className="flex-col p-2">
            <div className="text-md">Adult Cost</div>
            <div>THB 36</div>
          </div>
          <div className="flex-col p-2">
            <div className="text-md">Child Cost</div>
            <div>THB 26</div>
          </div>
          <div className="flex-col p-2">
            <div className="text-md">Infant Cost</div>
            <div>THB 10</div>
          </div>
        </div>
      </div> */}

      {queryForAllDates === true && (
        <>
          <div className="p-5">
            <div className="flex p-5 space-x-3 bg-gray-300">
              <span
                className="flex items-center p-1 space-x-1 text-sm text-white bg-orange-500 cursor-pointer"
                onClick={() => navigate(-1)}
              >
                <MdArrowBack size={15} />
                Go Back
              </span>
              <span
                className="flex items-center p-1 space-x-1 text-sm text-white bg-teal-500 cursor-pointer"
                onClick={() => settotalCostShow(true)}
              >
                <MdAdd size={15} />
                Add Total Cost
              </span>
              <span
                className="flex items-center p-1 space-x-1 text-sm text-white bg-red-500 cursor-pointer"
                onClick={() => setpaxMarkupShow(true)}
              >
                <MdAdd size={15} />
                Add Per Pax Markup
              </span>
              <span
                className="flex items-center p-1 space-x-1 text-sm text-white bg-green-500 cursor-pointer"
                onClick={() => {
                  setb2bQuotation(true);
                  setqueryForAllDates(false);
                }}
              >
                <RiGalleryFill />
                B2B Quotation
              </span>
              <span className="flex items-center p-1 space-x-1 text-sm text-white bg-blue-500 cursor-pointer">
                <RiGalleryFill />
                B2B New Quotation
              </span>
              <span className="flex items-center p-1 space-x-1 text-sm text-white bg-green-500 cursor-pointer">
                <RiGalleryFill />
                B2B/Detailed Quotation
              </span>
              <span className="flex items-center p-1 space-x-1 text-sm text-white bg-blue-500 cursor-pointer">
                <RiGalleryFill />
                Show Costing
              </span>
            </div>
          </div>
          <QueryForAllDates dateRange={destinationList} />
          <div className="flex justify-end flex-auto px-5 py-3">
            <button
              className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
              type="button"
              onClick={() => submitFinalObject()}
            >
              Save All
            </button>
          </div>
        </>
      )}
      {b2bQuotation === true && (
        <B2BQuotation
          handleBack={() => {
            setb2bQuotation(false);
            setqueryForAllDates(true);
          }}
          queryDetails={queryDetails}
          qutationQueryDetail={qutationQueryDetail}
        />
      )}
    </>
  );
};

export default OtherDetails;
