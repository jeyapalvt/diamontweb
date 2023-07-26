import React from "react";
import { SlCalender } from "react-icons/sl";
import { GiTrophyCup } from "react-icons/gi";
import { TbShieldCheckFilled } from "react-icons/tb";
import { BsShieldFillExclamation } from "react-icons/bs";
import { Tooltip, Typography } from "@material-tailwind/react";
const BookingForm = (props) => {
  const { type, cancelation, adult, child, offers, price, stayInfo } = props;
  return (
    <div className="flex items-center p-1 mb-1 space-x-1 text-sm font-medium text-gray-700">
      <div className="flex items-center w-2/12 space-x-1">{type}</div>
      <div className="flex items-center w-2/12">
        <div>
          <BsShieldFillExclamation color="red" />
        </div>
        <div>{cancelation}</div>
      </div>
      <div className="flex w-1/12">
        <div></div>

        <Tooltip
          content={
            <div className="w-auto">
              <Typography color="white" className="font-medium"></Typography>
              <table className="w-full border border-collapse table-auto">
                <thead className="text-sm font-medium text-gray-800 bg-slate-300">
                  <tr>
                    <th className="w-auto p-1 border">Room Type</th>
                    <th className="w-auto p-1 border">Adult</th>
                    <th className="w-auto p-1 border">Child</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium">
                  <tr>
                    <td className="w-auto p-1 border">{type}</td>
                    <td className="w-auto p-1 border">{adult}</td>
                    <td className="w-auto p-1 border">{child}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          }
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <div className="px-1 text-white bg-green-800 rounded-full cursor-pointer ">
            {Number(adult) + Number(child)}
          </div>
        </Tooltip>
      </div>
      <div className="w-1/12 text-blue-600">{offers}</div>
      <div className="w-1/12 text-blue-900">
        <Tooltip
          content={
            <div className="w-auto">
              <Typography color="white" className="font-medium"></Typography>
              <table className="w-full border border-collapse table-auto">
                <thead className="text-sm font-medium text-gray-800 bg-slate-300">
                  <tr>
                    <th className="w-auto p-1 border">Sun</th>
                    <th className="w-auto p-1 border"> Mon</th>
                    <th className="w-auto p-1 border">Tue</th>
                    <th className="w-auto p-1 border">Wed</th>
                    <th className="w-auto p-1 border">Thu</th>
                    <th className="w-auto p-1 border">Fri</th>
                    <th className="w-auto p-1 border">Sat</th>
                    <th className="w-auto p-1 border">Total</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium">
                  <tr>
                    <td className="w-auto p-1 text-center border ">
                      <div>10/07/2023</div>
                      <div>{price} AED</div>
                    </td>
                    <td className="w-auto p-1 text-center border">
                      <div>10/07/2023</div>
                      <div>{price} AED</div>
                    </td>
                    <td className="w-auto p-1 border"></td>
                    <td className="w-auto p-1 border"></td>
                    <td className="w-auto p-1 border"></td>
                    <td className="w-auto p-1 border"></td>
                    <td className="w-auto p-1 border"></td>
                    <td className="w-auto p-1 border">
                      AED:{Number(price * 2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          }
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <div className="text-sm cursor-pointer text-blue-950">
            {price} AED
          </div>
        </Tooltip>
      </div>
      <div className="w-1/12 text-green-800">
        <TbShieldCheckFilled size={20} />
      </div>
      <div className="w-1/12 text-yellow-800">
        <GiTrophyCup size={20} />
      </div>
      <div className="w-1/12">
        <Tooltip
          content={
            <div className="w-auto">
              <Typography color="white" className="font-medium"></Typography>
              {stayInfo}
            </div>
          }
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <div className="text-sm text-orange-600 cursor-pointer">
            <SlCalender size={20} />
          </div>
        </Tooltip>
      </div>
      <div className="w-2/12 mr-0">
        <button
          type="button"
          className="inline-block rounded bg-blue-950 px-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          // onClick={() => handleSubmit()}
        >
          <div className="flex items-center text-sm">ADD TO CART</div>
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
