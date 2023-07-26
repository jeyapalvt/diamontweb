import React, { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { MdOutlineModeEdit } from "react-icons/md";
import { ImUpload3 } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import EditQutation from "../Models/EditQutation";
import { useNavigate } from "react-router-dom";
import AddQutation from "../Models/AddQutation";
import ConfirmationModel from "../Models/ConfirmationModel";
import AddGuest from "../Models/AddGuest";
const Quatation = () => {
  const navigate = useNavigate();
  const TABLE_HEAD = [
    "",
    "Title",
    "Destination",
    "Pax",
    "Duration",
    "Status",
    "Action",
  ];

  const TABLE_ROWS = [
    {
      id: "1234",
      title: "Dubai Packages",
      destination: "Dubai",
      pax: "5",
      duration: "5 days",
      status: "pending",
      action: "",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
    // Add additional logic or actions to handle closing the modal in the parent component
  };
  const [showInserQuery, setshowInserQuery] = useState(false);
  const [showAddQuery, setshowAddQuery] = useState(false);
  const [showConfirmModel, setshowConfirmModel] = useState(false);
  const [showAddGuest, setshowAddGuest] = useState(false);
  const handleCloseInsert = () => {
    setshowInserQuery(false);
  };
  const handleCloseAdd = () => {
    setshowAddQuery(false);
  };
  const handleCloseConfirm = () => {
    setshowConfirmModel(false);
    setshowAddGuest(true);
  };
  const handleCloseGuest = () => {
    setshowAddGuest(false);
  };
  return (
    <div>
      {showModal && (
        <EditQutation onCloseModal={handleCloseModal} qutationId={"1234"} />
      )}
      {showAddQuery === true && <AddQutation onCloseModal={handleCloseAdd} />}
      {showConfirmModel === true && (
        <ConfirmationModel onCloseModal={handleCloseConfirm} />
      )}
      {showAddGuest === true && <AddGuest onCloseModal={handleCloseGuest} />}
      <div className="flex items-center justify-between py-3">
        <div className="text-sm font-bold text-gray-700">Quotation Builder</div>
        <div className="flex space-x-3 text-sm font-medium">
          <span
            className="flex items-center p-1 space-x-1 text-sm text-white bg-blue-500 cursor-pointer"
            onClick={() => setshowInserQuery(true)}
          >
            <div>
              <ImUpload3 />
            </div>
            <div>Inser Query</div>
          </span>
          <span
            className="flex items-center p-1 space-x-1 text-sm text-white bg-orange-500 cursor-pointer"
            onClick={() => setshowAddQuery(true)}
          >
            <div>
              <AiOutlinePlus />
            </div>
            <div>Add Quatation</div>
          </span>
        </div>
      </div>
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
                    className="font-normal leading-none "
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
                { title, destination, pax, duration, status, action, id },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={title}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        <MdOutlineModeEdit
                          size={20}
                          color="blue"
                          className="cursor-pointer"
                          onClick={() => setShowModal(true)}
                        />
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
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
                        {destination}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {pax}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {duration}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {status}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        <div className="space-x-3">
                          <span
                            className="p-2 text-white bg-blue-500 rounded-sm shadow-md cursor-pointer"
                            onClick={() =>
                              navigate(`/qutationdetailview/${id}`)
                            }
                          >
                            View
                          </span>
                          <span
                            className="p-2 text-white bg-orange-500 rounded-sm shadow-md cursor-pointer"
                            onClick={() => setshowConfirmModel(true)}
                          >
                            Final
                          </span>
                        </div>
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

export default Quatation;
