import React from "react";
import isValidDateTime from "./validateDateTimeFormat.js";
const DateTime = ({ data }) => {
  // console.log("datetime se ", data);
  let date, time;
  if (isValidDateTime(data)) {
    date = new Date(data).toDateString();
    time = new Date(data).toLocaleTimeString();
  } else {
    date = new Date().toDateString();
    time = new Date().toLocaleTimeString();
  }

  return <>{date && time && <div>{`${date} | ${time}`}</div>}</>;
};

export default DateTime;
