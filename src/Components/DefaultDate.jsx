import React from "react";

const DefaultDate = () => {
  const today = new Date().toISOString().slice(0, 10);
  return today;
};

export default DefaultDate;
