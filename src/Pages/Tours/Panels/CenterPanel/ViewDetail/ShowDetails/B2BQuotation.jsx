import React, { useEffect, useState } from "react";
import { MdArrowBack, MdAdd } from "react-icons/md";
import { RiGalleryFill } from "react-icons/ri";
import { BsWhatsapp, BsDownload } from "react-icons/bs";
import { ImCopy } from "react-icons/im";
import { AiTwotoneMail } from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";
import { usePDF } from "react-to-pdf";
import axios from "axios";
import { BaseUrl } from "../../../../../../Reducers/Api";
const B2BQuotation = (props) => {
  const { handleBack } = props;
  const { id, qid } = useParams();
  const navigate = useNavigate();
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const [quotationDetails, setquotationDetails] = useState();

  useEffect(() => {
    getQutationDetail();
  }, []);
  const getQutationDetail = async () => {
    //getQueryQuotationDetails

    await axios
      .post(BaseUrl + "getQueryQuotationDetails", { queryQuotationId: qid })
      .then((res) => {
        setquotationDetails(res.data);
        console.log("getQueryQuotationDetails", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <div className="p-20">
          <div className="border border-b-2 border-gray-800">
            <div className="grid grid-cols-1 divide-y">
              <div className="p-5">
                <div className="font-semibold text-center"> Quotation</div>
                <div className="text-center "> Holyday pack</div>
                <div className="flex justify-between text-sm">
                  <div className="flex flex-col">
                    <div>To :</div>
                    <div className="font-bold">Diamond Tours</div>
                    <div>Albania</div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex justify-end text-right">
                      <div>Quotation No:</div>
                      <div className="font-bold"> #000156</div>
                    </div>
                    <div className="flex justify-end text-right">
                      <div>Quotation Date:</div>
                      <div className="font-bold">09 Sep 2023</div>
                    </div>
                    <div className="flex justify-end text-right">
                      <div>Destination:</div>
                      <div className="font-bold"> Shimla,Manali</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-4 gap-4 text-sm text-center">
                  <div className="flex flex-col">
                    <div className="font-bold">Travel Period</div>
                    <div>07 Sep 2023 To 09 Sep 2023</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">No. of Adult</div> <div>3</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">No. of Child</div> <div>0</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">No. of Infant</div> <div>0</div>
                  </div>
                </div>
              </div>
              <div className="text-white bg-blue-500">
                <div className="px-5 py-2 text-sm font-bold">
                  <div className="flex justify-between">
                    <div>HOTEL + TRANSFER</div>
                    <div>AED /- Per Person</div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-1 text-sm text-white bg-orange-500">
                  <div className="px-5 py-2 text-sm font-bold">
                    <div className="flex flex-col text-center">
                      <div>HOTEL OPTION 1</div>
                    </div>
                  </div>
                </div>
                <div className="text-sm border-b-2 border-l-2 border-blue-800">
                  <div class="grid grid-cols-1 divide-y">
                    <div className="flex p-1 space-x-2">
                      <div className="font-bold">Room:</div>
                      <div>01</div>
                    </div>
                    <div className="flex p-1 space-x-2">
                      <div className="font-bold">Meal:</div>
                      <div>01</div>
                    </div>
                    <div className="flex p-1 space-x-2">
                      <div className="font-bold ">Nights:</div>
                      <div>01</div>
                    </div>
                    <div className="flex p-1 space-x-2">
                      <div className="font-bold ">Dates:</div>
                      <div>07-09-2023 To 09-09-2023</div>
                    </div>
                  </div>
                </div>

                <div className="mt-1 text-sm text-white bg-green-500">
                  <div className="px-5 py-2 text-sm font-bold">
                    <div className="flex flex-col text-center">
                      <div>AED 0.00/-</div>
                      <div>Total Package Cost</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-200">
                <div className="px-5 py-2 text-sm font-bold">
                  DAY WISE ITINERARY DETAILS
                </div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-2 text-sm ">
                  <div className="flex flex-col">
                    <div className="font-bold">Inclusion</div>
                    <div className="font-bold">Important Notes</div>
                    <ul className="p-5 list-disc">
                      <li>Payment Policy & Our Scope of Services</li>
                      <li>Token Booking Amount for confirming the booking. </li>
                      <li>
                        Within 24 hours: Flights Payment or same day (Depending
                        on the information given by the sales rep.){" "}
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">Exclusion</div>
                    <div className="font-bold">Cancellation Policy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default B2BQuotation;
