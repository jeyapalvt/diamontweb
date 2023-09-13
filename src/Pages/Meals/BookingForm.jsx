import React, { useState, useEffect } from "react";
import { DefaultDate, InputComp } from "../../Components";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";

const BookingForm = (props) => {
  const {
    b2bAdultPrice,
    b2bChildPrice,
    transCost,
    sharedOrPrivate,
    ticketTypeId,
    transportId,
    transportCat,
    transportName,
  } = props;

  const today = DefaultDate();
  const [error, seterror] = useState("");

  const [tktAmount, setTktAmount] = useState(b2bAdultPrice);
  const [formData, setformData] = useState({
    adult: 1,
    child: 0,
  });
  useEffect(() => {
    const calculateTktAmount = () => {
      if (sharedOrPrivate === 2) {
        const totalCount = Number(formData.adult) + Number(formData.child);

        const filteredTrans = transportCat.filter(
          (item) => item.nofPassengers >= totalCount
        );

        if (filteredTrans.length) {
          seterror("");
          const total =
            b2bAdultPrice * formData.adult +
            b2bChildPrice * formData.child +
            filteredTrans[0].cost;
          setTktAmount(total);
        } else {
          seterror("Transport Not Available");
          const total = tktAmount; // Set total to tktAmount when filteredTrans is empty
          setTktAmount(total);
        }
      } else {
        const total =
          b2bAdultPrice * formData.adult +
          formData.adult * transCost +
          b2bChildPrice * formData.child +
          formData.child * transCost;
        setTktAmount(total);
      }
    };

    calculateTktAmount();
  }, [
    formData.adult,
    formData.child,
    sharedOrPrivate,
    b2bAdultPrice,
    b2bChildPrice,
    transportCat,
    transCost,
    tktAmount,
  ]);

  const handleChange = (event) => {
    const { id, value } = event.target;

    setformData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  // const handleSubmit = () => {
  //   console.log("values", formData);
  // };

  const description = () => {
    if (sharedOrPrivate === 0) {
      return (
        <>
          This Ticket Type Adult price is {b2bAdultPrice} And Child Price is{" "}
          {b2bChildPrice}
        </>
      );
    } else if (sharedOrPrivate === 1) {
      return (
        <>
          This Ticket Type Adult price is {b2bAdultPrice} And Child Price is{" "}
          {b2bChildPrice}
        </>
      );
    } else if (sharedOrPrivate === 2) {
      return (
        <>
          This Ticket Type Adult price is {b2bAdultPrice} And Child Price is{" "}
          {b2bChildPrice}
        </>
      );
    }
  };

  return (
    <>
      <div className="flex items-center mb-1 space-x-1 text-sm font-medium text-gray-700">
        <div className="w-2/12">{transportName}</div>
        <div className="w-2/12">
          <InputComp
            type="date"
            id="date"
            placeholder="date"
            defaultValue={today}
          />
        </div>
        <div className="w-2/12">
          <InputComp
            type="number"
            id="adult"
            placeholder="adult"
            value={formData.adult}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="w-2/12">
          <InputComp
            type="number"
            id="child"
            value={formData.child}
            placeholder="child"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="w-2/12">
          <InputComp type="number" id="infant" placeholder="infant" />
        </div>

        <div className="w-1/12 ">
          <div className="ml-6 cursor-pointer">
            <BsFillInfoCircleFill
              data-tooltip-target="tooltip-light"
              data-tooltip-style="light"
            />
            <div
              id="tooltip-light"
              role="tooltip"
              class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"
            >
              Tooltip content
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
        </div>
        <div className="w-1/12">AED {tktAmount} </div>
        <div className="w-2/12">
          <button
            type="button"
            className="inline-block rounded bg-blue-950 px-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            onClick={() => handleSubmit()}
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
