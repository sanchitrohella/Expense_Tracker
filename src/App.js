import React, { useState, useEffect } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyData = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 250,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 37999,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 10940,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 4500,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(dummyData);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  useEffect(() => {
    document.title = "Expense Tracker";
  }, []);
  return (
    <div>
      <head>
        <title>Expense Tracker</title>
      </head>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense data={expenses} />
    </div>
  );
};

export default App;
