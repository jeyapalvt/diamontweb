import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { Card, Typography } from "@material-tailwind/react";
const QueryInfo = () => {
  const TABLE_HEAD = ["Adult", "Child", "Infant"];
  const TABLE_ROWS = [
    {
      adult: "John Michael",
      child: "Manager",
      infant: "23/04/18",
    },
  ];
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
          Dubai Package
        </div>
        <div className="font-bold text-center text-blue-600 text-md">#1234</div>
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
                        10
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        2
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        2
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
          <div className="ml-5 text-md">Dubai</div>
        </div>
        <div className="flex flex-col mb-5">
          <div className="font-bold">Travel Date:</div>
          <div className="font-bold text-md">1/8/2023 to 5/8/2023</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="font-light">Agent</div>
            <div className="font-bold text-md">Vinod kumar</div>
          </div>
          <div>
            <div className="font-light">Service Type</div>
            <div className="font-bold text-md">Complete Package</div>
          </div>
          <div>
            <div className="font-light">Contact Persion</div>
            <div className="font-bold text-md">Vinod kumar</div>
          </div>
          <div>
            <div className="font-light">Guest Name</div>
            <div className="font-bold text-md">Raman</div>
          </div>

          <div class="col-span-2">
            <div className="font-light">E-Mail</div>
            <div className="font-bold text-md">
              contact@vinodkumar@gmail.com
            </div>
          </div>
          <div>
            <div className="font-light">Mobile</div>
            <div className="font-bold text-md">9876543210</div>
          </div>
          <div>
            <div className="font-light">Telephone</div>
            <div className="font-bold text-md">987 43210</div>
          </div>
          <div>
            <div className="font-light">Lead Source</div>
            <div className="font-bold text-md">FaceBook</div>
          </div>
          <div>
            <div className="font-light">Query Created </div>
            <div className="font-bold text-md">1/7/2023</div>
          </div>
          <div>
            <div className="font-light">Operation Persion</div>
            <div className="font-bold text-md">Amit </div>
          </div>
          <div>
            <div className="font-light">Sales Persion </div>
            <div className="font-bold text-md">Joshi</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryInfo;
