import React from "react";
import { usePDF } from "react-to-pdf";
import { useNavigate } from "react-router-dom";
import { MdArrowBack, MdAdd } from "react-icons/md";
import { RiGalleryFill } from "react-icons/ri";
import { BsWhatsapp, BsDownload } from "react-icons/bs";
import { ImCopy } from "react-icons/im";
import { AiTwotoneMail } from "react-icons/ai";
import b2b from "../../../../../../assets/images/b2b.png";
const MultipleHotel = (props) => {
  const { id, handleBack, qutationQueryDetail, queryDetails } = props;

  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const navigate = useNavigate();
  return (
    <div>
      <div className="p-5">
        <div className="flex justify-between p-5 space-x-3 bg-gray-300">
          {/* Left-aligned elements */}
          <div className="flex space-x-2">
            <span
              className="flex items-center p-1 space-x-1 text-sm text-white bg-orange-500 cursor-pointer"
              onClick={handleBack}
            >
              <MdArrowBack size={15} />
              Go Back
            </span>
            <span
              className="flex items-center p-1 space-x-1 text-sm text-white bg-teal-500 cursor-pointer"
              onClick={() => navigate(`/querydetails/${id}`)}
            >
              <MdArrowBack size={15} />
              Back To Query
            </span>
          </div>

          {/* Right-aligned elements */}
          <div className="flex space-x-2">
            <span className="flex items-center p-1 space-x-1 text-sm text-white bg-red-500 cursor-pointer">
              <MdAdd size={15} />
              Change Banner Image
            </span>
            <span className="flex items-center p-1 space-x-1 text-sm text-white bg-green-500 cursor-pointer">
              <ImCopy />
              Copy URL
            </span>
            <span
              className="flex items-center p-1 space-x-1 text-sm text-white bg-blue-500 cursor-pointer"
              onClick={() => toPDF()}
            >
              <BsDownload />
              Download PDF
            </span>
            <span className="flex items-center p-1 space-x-1 text-sm text-white bg-green-500 cursor-pointer">
              <BsWhatsapp />
              Share to Whatsapp
            </span>
            <span className="flex items-center p-1 space-x-1 text-sm text-white bg-blue-500 cursor-pointer">
              <AiTwotoneMail />
              Share to Email
            </span>
          </div>
        </div>
      </div>
      <div ref={targetRef}>
        <div className="p-5 ">
          <div className="border border-gray-600 ">
            <div className="grid items-center grid-cols-3 gap-4 p-5">
              <div>
                <img src={b2b} alt="logo" className="w-40" />
              </div>
              <div className="col-span-2 ">
                <div className="flex items-center justify-between space-x-4 text-center">
                  <div>
                    <div className="font-bold text-blue-900 text-xls">
                      Hotel Booking Confirmation
                    </div>
                    <div className="font-bold text-gray-600">Voucher</div>
                  </div>
                  <div>
                    <div className="font-bold text-blue-700 text-xls">
                      Status
                    </div>
                    <div className="px-1 mt-2 text-white bg-green-700 rounded-md">
                      Confirmed
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* first section end here */}

            <div className="grid items-center grid-cols-3 gap-4 p-5 bg-cyan-200">
              <div className="col-span-2">
                <div className="font-bold text-blue-900 text-xls">
                  Hotel Booking Details:
                </div>
              </div>

              <div className="flex flex-col items-start justify-end text-right">
                <div className="flex">
                  <div className="font-bold text-blue-900 ">Booked On : </div>
                  <div className="text-blue-800 ">06 Sept 2023</div>
                </div>

                <div className="flex">
                  <div className="font-bold text-blue-900 ">
                    Reference Number :{" "}
                  </div>
                  <div className="text-blue-800 ">DT8124</div>
                </div>
                <div className="flex">
                  <div className="font-bold text-blue-900 ">
                    Travel Agency :{" "}
                  </div>
                  <div className="text-blue-800 "> New Brahmani Travels</div>
                </div>
              </div>
            </div>
            {/* second sectioon end here */}
            <div className="grid items-center grid-cols-4 gap-4 p-5">
              <div className="col-span-2 ">
                <div className="font-bold text-blue-900 text-xls">
                  Hotel Booked
                </div>
                <div className="font-bold text-gray-700 ">
                  Royal Ascot Hotel
                </div>
                <div className="font-bold text-gray-700 ">
                  Khaleed bin Walid Road, Bur Dubai, 
                </div>
                <div className="font-bold text-gray-700 ">
                  Dubai, United Arab Emirates  
                </div>
                <div className="font-bold text-gray-700 ">
                  P.O. Box 115160 // Tel. +971 04 3558502 
                </div>
                <div className="font-bold text-blue-900 text-xls">
                  LEAD GUEST NAME
                </div>
                <div className="font-bold text-gray-700 ">Mr Tejas Nimavat</div>
              </div>
              <div>
                <div>
                  <div className="font-bold text-blue-900 text-xls">
                    HOTEL CONF NUMBER
                  </div>
                  <div className="font-bold text-gray-700 "> #278124</div>
                </div>
                <div>
                  <div className="font-bold text-blue-900 text-xls">
                    NATIONALITY
                  </div>
                  <div className="font-bold text-gray-700 ">Indian</div>
                </div>
                <div>
                  <div className="font-bold text-blue-900 text-xls">BOARD</div>
                  <div className="font-bold text-gray-700 ">Breakfast</div>
                </div>
              </div>
              <div className="font-bold text-center">
                <div className="py-2 mb-3 text-white rounded-md bg-violet-800">
                  <div>CHECK IN DATE</div>
                  <div>05-09-2023</div>
                </div>
                <div className="py-2 mb-3 text-white rounded-md bg-violet-800">
                  <div>CHECK OUT DATE</div>
                  <div>10-09-2023</div>
                </div>
                <div className="py-2 text-white bg-red-800 rounded-md">
                  <div>NO OF NIGHTS</div>
                  <div>5</div>
                </div>
              </div>
            </div>
            {/* third section end here */}
            <div className="mt-5">
              <table className="w-full border border-collapse table-auto">
                <thead className="text-sm font-bold text-gray-800 bg-slate-300">
                  <tr className="p-5">
                    <th className="w-2/12 p-2 border"></th>
                    <th className="w-1/12 p-2 border">Sinle</th>
                    <th className="w-1/12 p-2 border">Double/Twin</th>
                    <th className="w-1/12 p-2 border">Trible</th>
                    <th className="w-1/12 p-2 border">CWB</th>
                    <th className="w-1/12 p-2 border">CNB</th>
                    <th className="w-1/12 p-2 border">Infant</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-normal">
                  <tr className="p-5">
                    <th className="w-2/12 p-2 ">Type of Rooms</th>
                    <th className="w-1/12 p-2 border">-</th>
                    <th className="w-1/12 p-2 border">-</th>
                    <th className="w-1/12 p-2 border">-</th>
                    <th className="w-1/12 p-2 border">-</th>
                    <th className="w-1/12 p-2 border">-</th>
                    <th className="w-1/12 p-2 border">-</th>
                  </tr>
                  <tr className="p-5">
                    <th className="w-2/12 p-2 "> </th>
                    <th className="w-1/12 p-2 border">-</th>
                    <th className="w-1/12 p-2 border">-</th>
                    <th className="w-1/12 p-2 border">-</th>
                    <th className="w-1/12 p-2 border">-</th>
                    <th className="w-1/12 p-2 border">-</th>
                    <th className="w-1/12 p-2 border">-</th>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* fifth ection end here */}
            <div className="mt-5">
              <table className="w-full border border-collapse table-auto">
                <thead className="text-sm font-bold text-gray-800 bg-slate-300">
                  <tr className="p-5">
                    <th className="w-1/12 p-2 border">No Of Rooms</th>
                    <th className="w-3/12 p-2 border">Room Type</th>
                    <th className="w-1/12 p-2 border">Adult</th>
                    <th className="w-1/12 p-2 border">Child</th>
                    <th className="w-1/12 p-2 border">Child Age</th>
                    <th className="w-1/12 p-2 border">Extra Beds</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-normal">
                  <tr className="p-5">
                    <th className="w-1/12 p-2 border"></th>
                    <th className="w-3/12 p-2 border"></th>
                    <th className="w-1/12 p-2 border"></th>
                    <th className="w-1/12 p-2 border"></th>
                    <th className="w-1/12 p-2 border"></th>
                    <th className="w-1/12 p-2 border"></th>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* sixth section end here */}
            <div className="mt-5">
              <table className="w-full border border-collapse table-auto">
                <tbody className="text-sm font-normal">
                  <tr>
                    <th className="w-2/12 p-5 text-white bg-blue-900 border">
                      Remarks
                    </th>
                    <th className="w-10/12 p-5 text-left border">
                      Remarks condent
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* seventh section end here */}
            <div className="mt-5">
              <table className="w-full border border-collapse table-auto">
                <tbody className="text-sm font-normal">
                  <tr>
                    <th className="w-2/12 p-5 text-white bg-red-900 border">
                      Cancellation Policy
                    </th>
                    <th className="w-10/12 p-5 text-left border">
                      Cancellation Policy content
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* eighth row end here */}
            <div className="mt-5">
              <div className="p-5 text-center text-white bg-blue-900 border">
                Important Information : Hotel
              </div>
              <div className="p-5 text-sm border border-gray-500">
                <div>
                  Important Information : HotelImportant Information : Hotel
                </div>
              </div>
            </div>
            {/* ninth row end here */}
            <div className="mt-5">
              <table className="w-full border border-collapse table-auto">
                <tbody className="text-sm font-normal">
                  <tr>
                    <th className="w-2/12 p-5 text-white bg-blue-900 border">
                      Notes
                    </th>
                    <th className="w-10/12 p-5 text-left border">
                      Cancellation Policy content
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 10th section end here */}
            <div className="mt-5 text-sm border border-gray-800">
              <div className="p-5">
                Please get in touch with our Support Team for any booking
                related queries.
              </div>
            </div>
            {/* 11th section end here */}
            <div className="mt-5 text-sm border border-gray-800">
              <div className="p-5">
                Guest Relations Name & Number :- Mr Tejas Mo:- +971 50 354 5408,
                Tel:- +971 4 355 9218
              </div>
            </div>
            {/* 12th section end here */}
            <div className="mt-5 font-bold text-center border border-gray-800">
              <div className="p-5">THANK YOU FOR YOUR BUSINESS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleHotel;
