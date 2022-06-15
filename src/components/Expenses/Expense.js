import React, { useState } from "react";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
const Expense = (props) => {
  const [selectedYear, filterSelectedyear] = useState("2022");
  const addFilteredYearHandler = (filteredYear) => {
    filterSelectedyear(filteredYear);
  };

  const filteredFromList = props.data.filter(
    (item) => item.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onFilteredYear={addFilteredYearHandler}
      />
      <ExpensesChart expenses={filteredFromList} />
      <ExpenseList items={filteredFromList} />
    </Card>
  );
};

export default Expense;
