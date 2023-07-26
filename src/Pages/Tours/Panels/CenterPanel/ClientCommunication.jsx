import React, { useState } from "react";
import { BsFillReplyFill } from "react-icons/bs";
import { reduxForm, Field } from "redux-form";
import {
  TextField,
  FileUpload,
  FNoteEditor,
} from "../../../../Components/ReduxField";
import Button from "../../../../Components/Button";
const ClientCommunication = () => {
  const clientContact = [
    {
      id: 1,
      mail: "vinod@gmail.com",
    },
    {
      id: 2,
      mail: "raman@gmail.com",
    },
    {
      id: 3,
      mail: "jasper@gmail.com",
    },
  ];
  const [showMailBox, setshowMailBox] = useState(false);
  return (
    <div className="p-3">
      <div className="flex ">
        <div className="flex w-11/12 space-x-2 font-medium text-gray-500">
          {clientContact.map((item) => (
            <li key={item.id}>{item.mail}</li>
          ))}
        </div>
        <div className="text-sm font-bold cursor-pointer 1/12">
          <div
            className="flex items-center"
            onClick={() => setshowMailBox(true)}
          >
            <BsFillReplyFill />
            reply
          </div>
        </div>
      </div>

      {showMailBox === true && (
        <div className="mt-10 border">
          <div className="p-3">
            <Field
              name="ccmails"
              type="text"
              label="CC Mails"
              component={TextField}
            />
            <Field
              name="attachment"
              type="file"
              label="Attach Files"
              component={FileUpload}
            />
            <Field name="subject" label="Subject" component={FNoteEditor} />
            <div className="flex mt-10 space-x-5">
              <Button
                color="red"
                name="Cancel"
                onClick={() => setshowMailBox(false)}
              />{" "}
              <Button color="green" name="Send" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default reduxForm({
  form: "ClientCommunication",
})(ClientCommunication);
