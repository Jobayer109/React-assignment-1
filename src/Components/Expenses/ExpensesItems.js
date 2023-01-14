import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpensesItems.css";

const ExpensesItems = (props) => {
  return (
    <div className="expense-items">
      <div className="expense__left">
        <div className="date__div">
          <ExpenseDate date={props.date} />
        </div>
        <h3>{props.title}</h3>
      </div>
      <div className="expense__right"> $ {props.amount}</div>
    </div>
  );
};

export default ExpensesItems;
