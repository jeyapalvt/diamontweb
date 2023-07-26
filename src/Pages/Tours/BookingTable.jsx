import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const BookingTable = ({ dataList }) => {
  const TABLE_HEAD = [
    "Id",
    "Title",
    "Type",
    "Company",
    "Contact Info",
    "Destination",
    "Query Date",
    "Travel Date",
    "Status",
    "Operation",
    "Sales",
    "action",
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

  return (
    <div className="p-5">
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
            {TABLE_ROWS.map(
              (
                {
                  id,
                  title,
                  type,
                  company,
                  contactInfo,
                  destination,
                  queryDate,
                  travelDate,
                  status,
                  operation,
                  sales,
                  action,
                },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography
                        as={Link}
                        to={`/querydetails/${id}`}
                        variant="small"
                        color="blue"
                        className="font-normal"
                      >
                        {id}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue"
                        className="font-normal"
                      >
                        {title}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {type}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {company}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {contactInfo}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        as="a"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {destination}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {queryDate}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {travelDate}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {status}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {operation}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {sales}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue"
                        className="font-medium"
                      >
                        {action}
                      </Typography>
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
