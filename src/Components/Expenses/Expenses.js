import React from "react";
import ExpensesItems from "./ExpensesItems";

const Expenses = () => {
  const expenses = [
    {
      id: "1",
      title: "Camera",
      amount: 400,
      date: new Date(2020, 7, 14),
    },
    { id: "2", title: "iPhone", amount: 900, date: new Date(2021, 2, 12) },
    {
      id: "3",
      title: "Cycle",
      amount: 200,
      date: new Date(2021, 2, 28),
    },
    {
      id: "4",
      title: "Monitor",
      amount: 300,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <ExpensesItems
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpensesItems
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpensesItems
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpensesItems
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
};

export default Expenses;
