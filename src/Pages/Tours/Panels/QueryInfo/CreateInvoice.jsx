import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InvoiceDetail from "./InvoiceDetail";
import PaymentHistory from "./PaymentHistory";
import axios from "axios";
import { BaseUrl } from "../../../../Reducers/Api";
const CreateInvoice = () => {
  const { id, qid } = useParams();

  useEffect(() => {
    getQuatationDetail();
  }, []);

  const getQuatationDetail = async () => {
    await axios
      .post(BaseUrl + "listQueryQuotation", { queryId: id })
      .then((res) => {
        // if (res.data.errCode === 0) {
        //   dispatch(addQutationState(res.data));
        // }
        console.log(`${JSON.stringify(res.data, null, 2)}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-5">
      <div className="flex space-x-5">
        <div className="w-3/12">
          <InvoiceDetail />
        </div>
        <div className="w-9/12">
          <PaymentHistory />
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
