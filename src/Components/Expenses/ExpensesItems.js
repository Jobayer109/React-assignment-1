import React from "react";
import "./ExpensesItems.css";

const ExpensesItems = (props) => {
  const month = props.date.toLocaleString("en-BD", { month: "long" });
  const day = props.date.toLocaleString("en-BD", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-items">
      <div className="expense__left">
        <div className="date__div">
          <div>{month}</div>
          <div>{year}</div>
          <div>{day}</div>
        </div>
        <h3>{props.title}</h3>
      </div>
      <div className="expense__right"> $ {props.amount}</div>
    </div>
  );
};

export default ExpensesItems;
