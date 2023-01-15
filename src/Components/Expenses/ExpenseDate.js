import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-BD", { month: "long" });
  const day = props.date.toLocaleString("en-BD", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div>
      <div>{day}</div>
      <div className="">{month}</div>
      <div>{year}</div>
    </div>
  );
};

export default ExpenseDate;
