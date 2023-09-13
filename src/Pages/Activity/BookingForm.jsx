import React, { useState, useEffect } from "react";
import {
  DefaultDate,
  InputComp,
  DropDown,
  ticketCountAdult,
  ticketCountChild,
  ticketCountInfant,
} from "../../Components";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import axios from "axios";
import { useDispatch } from "react-redux";
import { BaseUrl, keyChain } from "../../Reducers/Api";
import { fetchCartInfoList } from "../../Reducers/cartinfoSlice";
import Swal from "sweetalert2";
import { Tooltip, Typography } from "@material-tailwind/react";
const BookingForm = (props) => {
  const {
    attractionId,
    b2bAdultPrice,
    b2bChildPrice,
    transCost,
    sharedOrPrivate,
    ticketTypeId,
    transportId,
    transportCat,
    transportName,
    ticketName,
    attractionName,
  } = props;
  const dispatch = useDispatch();
  const today = DefaultDate();
  const [error, setError] = useState("");
  const [tktAmount, setTktAmount] = useState(b2bAdultPrice);
  const [formData, setFormData] = useState({
    adult: 1,
    child: 0,
    infant: 0,
    travelDate: today,
  });

  useEffect(() => {
    const calculateTktAmount = () => {
      if (sharedOrPrivate === 2) {
        const totalCount = Number(formData.adult) + Number(formData.child);
        const filteredTrans = transportCat.filter(
          (item) => item.nofPassengers >= totalCount
        );

        if (filteredTrans.length) {
          setError("");
          const total =
            b2bAdultPrice * formData.adult +
            b2bChildPrice * formData.child +
            filteredTrans[0].cost;
          setTktAmount(total);
        } else {
          setError("Transport Not Available");
          setTktAmount(0);
        }
      } else if (sharedOrPrivate === 1) {
        const total =
          b2bAdultPrice * formData.adult +
          formData.child * b2bChildPrice +
          transCost;
        setTktAmount(total);
      } else {
        const total =
          b2bAdultPrice * formData.adult +
          formData.child * b2bChildPrice * transCost;
        setTktAmount(total);
      }
    };

    calculateTktAmount();
  }, [
    formData.adult,
    formData.child,
    attractionId,
    b2bAdultPrice,
    b2bChildPrice,
    transCost,
    sharedOrPrivate,
    ticketTypeId,
    transportId,
    transportCat,
    transportName,
  ]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  const handleSubmit = () => {
    const popstObject = {
      ticketName: ticketName,
      attractionName: attractionName,
      bookingType: 1,
      CartInfoId: "",
      userType: "1", // 1 - Agent, 2 - Agent User, 3 - B2C user
      b2bId: 1,
      b2bUserId: "",
      b2cId: "",
      ticketCategory: Number(sharedOrPrivate) + 1, // 1 - Ticket Only, 2 - Shared Transfer, 3 - Private Transfer
      travelDate: formData.travelDate,
      attractionId: attractionId,
      ticketTypeId: ticketTypeId,
      transportId: transportId,
      hotelId: "",
      mealId: "",
      nofAdult: formData.adult,
      nofChild: formData.child,
      nofinfant: formData.infant,
      bookTotal: tktAmount,
      bookAdultPrice: b2bAdultPrice,
      bookChildPrice: b2bChildPrice,
      bookInfantPrice: 0,
    };

    axios
      .post(BaseUrl + "setCartInfo", popstObject)
      .then((res) => {
        Swal.fire("Added Success", "Ticket Added To Cart", "success");
        dispatch(
          fetchCartInfoList({
            userType: 1,
            b2bId: 1,
            b2bUserId: 0,
            b2cId: 0,
            secretKey: keyChain,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const description = () => {
    if (sharedOrPrivate === 0) {
      return <>Without Transfer:- No Transfer will be provided</>;
    } else if (sharedOrPrivate === 1) {
      return (
        <>
          During your tour You will be Sharing the vehicle with some more people
        </>
      );
    } else if (sharedOrPrivate === 2) {
      return <>During your tour You will be provided private vehicle.</>;
    }
  };

  return (
    <>
      <div className="flex items-center mb-1 space-x-1 text-sm font-medium text-gray-700">
        <div className="w-2/12 text-md">
          <p>{transportName}</p>
        </div>

        <div className="w-1/12 ">
          <div className="ml-6 cursor-pointer">
            <Tooltip
              className="px-4 py-3 bg-yellow-200 border shadow-xl border-blue-gray-50 shadow-black/10"
              content={
                <div className="w-auto">
                  <Typography color="black" className="font-medium ">
                    <p>{description()}</p>
                  </Typography>
                </div>
              }
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div className="text-sm cursor-pointer">
                <BsFillInfoCircleFill />
              </div>
            </Tooltip>
          </div>
        </div>
        {/* <div className="w-1/12">AED {b2bAdultPrice}</div> */}
        <div className="w-2/12">
          <InputComp
            type="date"
            id="travelDate"
            placeholder="date"
            value={formData.travelDate}
            defaultValue={today}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="w-2/12">
          <DropDown
            id="adult"
            placeholder="adult"
            options={ticketCountAdult}
            value={formData.adult}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="w-2/12">
          <DropDown
            id="child"
            options={ticketCountChild}
            value={formData.child}
            placeholder="child"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="w-2/12">
          <DropDown
            id="infant"
            options={ticketCountInfant}
            value={formData.infant}
            onChange={(e) => handleChange(e)}
            placeholder="infant"
          />
        </div>

        <div className="w-2/12"> Total Amount {tktAmount}</div>
        <div className="w-2/12">
          <button
            type="button"
            className="inline-block rounded bg-indigo-800 px-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            onClick={handleSubmit}
          >
            <div className="flex items-center text-sm">ADD TO CART</div>
          </button>
        </div>
      </div>
      {error && (
        <div className="items-center text-center text-red-700">{error}</div>
      )}
    </>
  );
};

export default BookingForm;
