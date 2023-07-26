import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import TicketLogo from "./tktLogo.jpeg";
import qrcode from "./qrcode.png";
import { BiCalendar } from "react-icons/bi";
import { GrMap } from "react-icons/gr";
import { Button } from "../../Components";
import { useLocation } from "react-router-dom";
import "./pdfStyle.css";
const TicketPdf = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "TICKET",
    onAfterPrint: () => alert("Print success"),
  });

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tempObj = Object.fromEntries(searchParams.entries());

  const dataObject = JSON.parse(tempObj.data);
  console.log("activityList", dataObject);
  return (
    <div>
      <div className="flex justify-end p-5">
        <Button name="Print" onClick={handlePrint} />
      </div>

      <div ref={componentRef}>
        {dataObject.map((item, index) => (
          <div
            key={index}
            className="page-break"
            style={{ width: "100%", height: window.innerHeight }}
          >
            <div className="flex items-center justify-between w-full p-5 h-28">
              <div className="w-auto h-auto">
                <img
                  src={`http://103.235.106.127:8080/filestorage/diamondtoursdubai/images/${item.bannerImage}`}
                  alt="ticketLogo"
                  style={{ width: "100%", height: "auto", maxWidth: "100px" }}
                />
              </div>
              <div className="font-bold text-gray-500">
                {item.attractionName}
              </div>
            </div>
            <div className="px-5">
              <div className="flex items-center p-5 space-x-5 border border-gray-300 rounded-md">
                <div className="flex-col w-1/2">
                  <div className="font-bold text-gray-600 text-xls">
                    {item.ticketName}
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-semibold text-gray-600">
                    <div>
                      <BiCalendar />
                    </div>
                    <div>{item.bookTravellDate}</div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-semibold text-gray-600">
                    <div>
                      <GrMap />
                    </div>
                    <div>{item.attAddress}</div>
                  </div>
                </div>
                <div className="flex justify-end w-1/2">
                  <img
                    src={qrcode}
                    alt="qrcode"
                    style={{ width: "100%", height: "auto", maxWidth: "150px" }}
                  />
                </div>
              </div>
            </div>
            <div className="px-5 mt-3">
              <div className="p-5 border border-gray-300 rounded-md">
                <div className="font-bold text-gray-600 text-xls"></div>
                <div className="text-esm">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}
                  />
                </div>
                {/* <div>{item.description}</div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketPdf;
