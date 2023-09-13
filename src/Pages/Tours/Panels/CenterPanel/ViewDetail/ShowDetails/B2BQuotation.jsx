import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import { BaseUrl } from "../../../../../../Reducers/Api";
import SingleHotel from "./SingleHotel";
import MultipleHotel from "./MultipleHotel";
const B2BQuotation = (props) => {
  const { handleBack, qutationQueryDetail, queryDetails } = props;
  const { id, qid } = useParams();

  const [singleOrMultiple, setsingleOrMultiple] = useState(1);

  useEffect(() => {
    if (qutationQueryDetail) {
      if (qutationQueryDetail.queryHotelList.length > 1) {
        for (let i = 0; i < qutationQueryDetail.queryHotelList.length; i++) {
          if (qutationQueryDetail.queryHotelList[i] > 1) {
            setsingleOrMultiple(2);
          }
        }
      } else {
        setsingleOrMultiple(2);
      }
    }
  }, []);

  return (
    <div>
      {singleOrMultiple === 1 && (
        <SingleHotel
          id={id}
          handleBack={handleBack}
          qutationQueryDetail={qutationQueryDetail}
          queryDetails={queryDetails}
        />
      )}
      {singleOrMultiple === 2 && (
        <MultipleHotel
          id={id}
          handleBack={handleBack}
          qutationQueryDetail={qutationQueryDetail}
          queryDetails={queryDetails}
        />
      )}
    </div>
  );
};

export default B2BQuotation;
