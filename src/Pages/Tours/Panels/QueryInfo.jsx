import React, { useState, useEffect } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { Card, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAgency } from "../../../Reducers/allAgencySlice";
const QueryInfo = (props) => {
  const { queryDetail } = props;
  const TABLE_HEAD = ["Adult", "Child", "Infant"];
  const TABLE_ROWS = [
    {
      adult: "John Michael",
      child: "Manager",
      infant: "23/04/18",
    },
  ];

  const dispatch = useDispatch();
  const allAgents = useSelector((state) => state.allAgents.data);
  const isLoading = useSelector((state) => state.allAgents.isLoading);
  const [agentList, setagentList] = useState([]);

  useEffect(() => {
    fetchList();
  }, [dispatch]);

  const fetchList = async () => {
    dispatch(
      fetchAllAgency({
        agenctId: 1,
        secretKey: "uZFEucIHAbqvgT7p87qC4Ms4tjqG34su",
      })
    );

    console.log(`${JSON.stringify(allAgents, null, 2)}`);

    let tempVal = [];
    for (let i = 0; i < allAgents.length; i++) {
      tempVal.push({
        value: allAgents[i].agencyId,
        label: allAgents[i].agencyName,
      });
    }

    setagentList(tempVal);
  };

  const agentName = (agentId) => {
    const agentName = allAgents?.find((item) => item.agencyId == agentId);
    return agentName?.agencyName;
  };

  const servicetype = [
    { value: "1", label: "Complete Package" },
    { value: "2", label: "Extra Service" },
    { value: "3", label: "Flight Only" },
    { value: "4", label: "Hotel Service" },
    { value: "5", label: "Land Part" },
    { value: "6", label: "Transfer only" },
  ];

  const serviceName = (serviceId) => {
    const serName = servicetype.find((item) => item.value == serviceId);
    return serName?.label;
  };

  const loadSource = [
    { value: "1", label: "FaceBook" },
    { value: "2", label: "Reference" },
    { value: "3", label: "Meating" },
    { value: "4", label: "Others" },
  ];
  const sourceName = (sourceId) => {
    const sorName = loadSource.find((item) => item.value == sourceId);
    return sorName?.label;
  };

  const childAgeList = queryDetail?.childAgeList || [];
  return (
    <div className="p-3">
      <div className="flex flex-col mb-5">
        <div className="self-end">
          <MdOutlineModeEdit
            size={20}
            color="blue"
            className="cursor-pointer"
          />
        </div>
        <div className="mt-3 font-bold text-center text-gray-600">
          {queryDetail?.queryTitle}
        </div>
        <div className="font-bold text-center text-blue-600 text-md">
          {queryDetail?.tourQueryId}
        </div>
        <div className="p-1 mt-5 text-center text-md">
          <span className="p-2 text-white bg-orange-500 rounded-sm shadow-md">
            pending
          </span>
        </div>
      </div>

      <div>
        <Card className="w-full h-full overflow-scroll">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="p-4 bg-[#577fa8]  border-b border-blue-gray-100 "
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
              {TABLE_ROWS.map(({ adult, child, infant }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {queryDetail?.nofAdult}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        <div className="flex flex-col">
                          <div>{queryDetail?.nofChild}</div>
                          <div>
                            {" "}
                            {queryDetail?.childOrInfant === 2 &&
                              // Render child age list only if the group is 2
                              childAgeList.map((childAge, index) => (
                                <div key={index}>{childAge}</div>
                              ))}
                          </div>
                          {/* {childAgeList} */}
                        </div>
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {queryDetail?.nofInfant}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
      <div className="flex flex-col p-5 text-gray-500">
        <div className="flex items-center mb-5">
          <div className="font-bold">Destination:</div>
          <div className="ml-5 text-md">
            {queryDetail?.departureDestination}
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <div className="font-bold">Travel Date:</div>
          <div className="font-bold text-md">
            {queryDetail.destList?.map((item, index) => {
              <div key={index}>
                {item.fromDate} - {item.toDate}
              </div>;
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="font-light">Agent</div>
            <div className="font-bold text-md">
              {agentName(queryDetail?.agencyId)}
            </div>
          </div>
          <div>
            <div className="font-light">Service Type</div>
            <div className="font-bold text-md">
              {serviceName(queryDetail?.serviceType)}
            </div>
          </div>
          <div>
            <div className="font-light">Contact Persion</div>
            <div className="font-bold text-md">
              {queryDetail?.contactPersonName}
            </div>
          </div>
          <div>
            <div className="font-light">Guest Name</div>
            <div className="font-bold text-md"> {queryDetail?.salesPerson}</div>
          </div>

          <div class="col-span-2">
            <div className="font-light">E-Mail</div>
            <div className="font-bold text-md">
              {queryDetail?.contactPersonEmail}{" "}
            </div>
          </div>
          <div>
            <div className="font-light">Mobile</div>
            <div className="font-bold text-md">
              {" "}
              {queryDetail?.mobileNumber}{" "}
            </div>
          </div>
          <div>
            <div className="font-light">Telephone</div>
            <div className="font-bold text-md">
              {" "}
              {queryDetail?.landlineNumber}{" "}
            </div>
          </div>
          <div>
            <div className="font-light">Lead Source</div>
            <div className="font-bold text-md">
              {sourceName(queryDetail?.leadSource)}
            </div>
          </div>
          <div>
            <div className="font-light">Query Created </div>
            <div className="font-bold text-md">1/7/2023</div>
          </div>
          <div>
            <div className="font-light">Operation Persion</div>
            <div className="font-bold text-md">
              {" "}
              {queryDetail?.operationPerson}{" "}
            </div>
          </div>
          <div>
            <div className="font-light">Sales Persion </div>
            <div className="font-bold text-md">
              {" "}
              {queryDetail?.salesPerson}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryInfo;
