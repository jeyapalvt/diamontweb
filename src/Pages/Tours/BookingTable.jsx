import React, { useEffect } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllQueryList } from "../../Reducers/customQuerySlice";
import { MdDateRange, MdLuggage, MdEmail } from "react-icons/md";
import { GiDuration } from "react-icons/gi";
import { FaChild, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { FaFilter, FaMobileAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { fetchAllAgency } from "../../Reducers/allAgencySlice";
import { AiTwotoneMail, AiOutlineFieldTime } from "react-icons/ai";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { BiPencil } from "react-icons/bi";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const BookingTable = ({ dataList }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const queryList = useSelector((state) => state.allCustomQuerySlice.data);
  const isLoading = useSelector((state) => state.allCustomQuerySlice.isLoading);
  const allAgents = useSelector((state) => state.allAgents.data);
  useEffect(() => {
    dispatch(fetchAllQueryList({ tourQueryId: 1 }));
    dispatch(
      fetchAllAgency({
        agenctId: 1,
        secretKey: "uZFEucIHAbqvgT7p87qC4Ms4tjqG34su",
      })
    );
  }, [dispatch]);
  const TABLE_HEAD = [
    "Id",
    "Title",
    "Destination",
    "Agent/Client",
    "Query Date",
    "Status",
    "Operation",
    "Sales",
    "",
  ];

  const TABLE_ROWS = [
    {
      id: "1234",
      title: "Dubai Package",
      type: "Complete Package",
      company: "Vinod",
      contactInfo: "",
      destination: "Dubai",
      queryDate: "20/6/2023",
      travelDate: "20/8/2023",
      status: "pending",
      operation: "Raman",
      sales: "Jasper",
      action: "",
    },
  ];

  const servicetype = [
    { value: "1", label: "Complete Package" },
    { value: "2", label: "Extra Service" },
    { value: "3", label: "Flight Only" },
    { value: "4", label: "Hotel Service" },
    { value: "5", label: "Land Part" },
    { value: "6", label: "Transfer only" },
  ];

  const getServiceType = (serviceId) => {
    const singleserviceType = servicetype.find(
      (item) => item.value == serviceId
    );
    return singleserviceType?.label;
  };

  const loadSource = [
    { value: "1", label: "FaceBook" },
    { value: "2", label: "Reference" },
    { value: "3", label: "Meating" },
    { value: "4", label: "Others" },
  ];
  const operationPersion = [
    { value: "Vinod", label: "Vinod" },
    { value: "Vivek", label: "Vivek" },
    { value: "Raman", label: "Raman" },
  ];
  const contactPersion = [
    { value: "Vinod", label: "Vinod" },
    { value: "Raman", label: "Raman" },
  ];
  const companyName = [
    { value: "diamont", label: "diamont" },
    { value: "usetours", label: "usetours" },
  ];
  const getloadSource = (serviceId) => {
    const loadSourcename = loadSource.find((item) => item.value == serviceId);
    return loadSourcename?.label;
  };

  const getAgentName = (serviceId) => {
    const agnets = allAgents?.find((item) => item.agencyId == serviceId);
    return agnets?.agencyName;
  };

  const getCompanyName = (serviceId) => {
    const company = companyName?.find((item) => item.value == serviceId);
    return company?.label;
  };
  const getOperationPersion = (serviceId) => {
    const optPersion = operationPersion?.find(
      (item) => item.value == serviceId
    );
    return optPersion?.label;
  };
  const getContactPersion = (serviceId) => {
    const ctPersion = contactPersion?.find((item) => item.value == serviceId);
    return ctPersion?.label;
  };
  const getStatus = (id) => {
    if (id == "1") {
      return "Pending";
    } else if (id == 2) {
      return "Confirm";
    } else if (id == 3) {
      return "Cancel";
    }
  };

  const formatDateWithAMPM = (dateString) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true, // Use 12-hour clock format
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Function to format date and time separately with AM/PM
  const formatDateAndTimeWithAMPM = (dateString) => {
    const optionsDate = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };

    const optionsTime = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true, // Use 12-hour clock format
    };

    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", optionsDate);
    const formattedTime = date.toLocaleTimeString("en-US", optionsTime);

    return {
      date: formattedDate,
      time: formattedTime,
    };
  };

  const getDatesBetweenRange = (dateRange) => {
    const from = dateRange[0].fromDate;
    const nthRow = dateRange.length - 1; // Replace with the desired row index
    let to = "";
    if (dateRange[nthRow]) {
      to = dateRange[nthRow].toDate;
    } else {
      to = dateRange[0].toDate;
    }

    return {
      fromDate: new Date(from).toLocaleDateString(),
      toDate: new Date(to).toLocaleDateString(),
    };
    // const dates = [];
    // const currentDate = new Date(from);

    // while (currentDate <= new Date(to)) {
    //   dates.push(new Date(currentDate));
    //   currentDate.setDate(currentDate.getDate() + 1);
    // }

    // return dates;
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
    <div className="p-5">
      <Card className="w-full h-full overflow-scroll">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="p-4 border-b border-blue-gray-100 bg-gradient-to-r from-[#384775] to-[#192a59]"
                >
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal leading-none"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {queryList.map(
              ({
                tourQueryId,
                queryTitle,
                serviceType,
                arrivalDestination,
                nofAdult,
                nofChild,
                nofInfant,
                mobileNumber,
                companyName,
                landlineNumber,
                contactPersonName,
                contactPersonEmail,
                operationPerson,
                leadSource,
                guestName,
                status,
                queryDate,
                destList,
                lastUpdated,
              }) => {
                const { date, time } = formatDateAndTimeWithAMPM(queryDate);

                const { fromDate, toDate } = getDatesBetweenRange(destList);
                return (
                  <tr
                    key={tourQueryId}
                    className={`font-semibold   text-sm ${
                      status == "1"
                        ? "bg-teal-100"
                        : status == "2"
                        ? "bg-blue-100"
                        : status == "3"
                        ? "bg-gray-100"
                        : "bg-green-100"
                    }`}
                  >
                    <td className="p-4 font-semibold ">
                      <Typography
                        as={Link}
                        to={`/querydetails/${tourQueryId}`}
                        variant="small"
                        color="blue"
                        className="font-semibold"
                      >
                        {`#00000${tourQueryId}`}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        as={Link}
                        to={`/querydetails/${tourQueryId}`}
                        variant="small"
                        className="font-semibold text-blue-500"
                      >
                        {queryTitle}
                      </Typography>
                      <div className="flex items-center">
                        <div>
                          <MdDateRange />
                        </div>
                        <div>Travel Date:</div>
                        <div>{fromDate}</div> - <div>{toDate}</div>
                      </div>
                      <div className="flex items-center">
                        <div>
                          <GiDuration />
                        </div>
                        <div>Duration: </div>
                        <div>{getTotalNights(fromDate, toDate)} Days</div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="flex mr-2 space-x-1">
                          <div>
                            <FaChild />
                          </div>
                          <div> Adult</div>
                          <div> {nofAdult} </div>
                        </div>
                        <div className="flex mr-2 space-x-1">
                          <div>
                            <FaChild />
                          </div>
                          <div> Child</div>
                          <div> {nofChild} </div>
                        </div>
                        <div className="flex mr-2 space-x-1">
                          <div>
                            <FaChild />
                          </div>
                          <div> Infant</div>
                          <div> {nofInfant} </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex-col">
                        <div className="flex items-center space-x-1 text-blue-500">
                          <div>
                            <FaMapMarkerAlt />
                          </div>
                          <div>{arrivalDestination}</div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div>
                            <MdLuggage />
                          </div>
                          <div>{getServiceType(serviceType)}</div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div>
                            <FaFilter />
                          </div>
                          <div>{getloadSource(leadSource)}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <div className="text-blue-500">{companyName}</div>
                        <div className="flex flex-row items-center space-x-1">
                          <div>
                            <IoIosContact />
                          </div>
                          <div className="font-normal">{contactPersonName}</div>
                        </div>
                        <div className="flex flex-row items-center">
                          <div>
                            <AiTwotoneMail />
                          </div>
                          <div className="flex justify-center space-x-1">
                            <div>E:Mail:</div>
                            <div className="font-normal">
                              {contactPersonEmail}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center">
                          <div>
                            <FaMobileAlt />
                          </div>
                          <div className="flex justify-center space-x-1">
                            <div>Mobile:</div>
                            <div className="font-normal">{mobileNumber}</div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center">
                          <div>
                            <TbDeviceLandlinePhone />
                          </div>
                          <div className="flex justify-center space-x-1">
                            <div>Landline No:</div>
                            <div className="font-normal">{landlineNumber}</div>
                          </div>
                        </div>
                        {status === 2 && (
                          <div className="flex flex-row items-center">
                            <div>{/* <IoIosContact /> */}</div>
                            <div className="flex justify-center space-x-1 text-red-500">
                              <div>Guest Name:</div>
                              <div className="font-normal">{guestName}</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <div className="flex flex-row items-center space-x-1">
                          <div>
                            <BsFillCalendarWeekFill />
                          </div>
                          <div>Date:</div>
                          <div className="font-normal">{date}</div>
                        </div>
                        <div className="flex flex-row items-center">
                          <div>
                            <AiOutlineFieldTime />
                          </div>
                          <div className="flex justify-center space-x-1">
                            <div>Time:</div>
                            <div className="font-normal">{time}</div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center">
                          <div>
                            <FaUserAlt />
                          </div>
                          <div className="flex justify-center space-x-1">
                            <div>Added By:</div>
                            <div className="font-normal">Raman</div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center">
                          <div>
                            <AiOutlineFieldTime />
                          </div>
                          <div className="flex justify-center space-x-1">
                            <div>Last Update:</div>
                            <div className="font-normal">
                              {formatDateWithAMPM(lastUpdated)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      {" "}
                      <span
                        className={`text-white p-1 rounded-md  ${
                          status == 1
                            ? "bg-yellow-500"
                            : status == 2
                            ? "bg-green-500"
                            : "bg-gray-900"
                        }`}
                      >
                        {getStatus(status)}
                      </span>
                    </td>

                    <td className="p-4">{operationPerson}</td>
                    <td className="p-4"></td>
                    <td className="p-4">
                      <BiPencil
                        className="cursor-pointer"
                        size={20}
                        onClick={() => navigate(`/toursmaster/${tourQueryId}`)}
                      />
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default BookingTable;
