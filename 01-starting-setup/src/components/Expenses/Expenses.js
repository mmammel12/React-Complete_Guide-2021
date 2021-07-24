import { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [expenses, setExpenses] = useState(props.expenses);
  const [selectedYear, setSelectedYear] = useState("2021");

  const expenseItems = expenses.map((item) => (
    <ExpenseItem date={item.date} title={item.title} amount={item.amount} />
  ));

  const selectedYearChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onSelectedYearChange={selectedYearChangeHandler}
      />
      {expenseItems}
    </Card>
  );
};

export default Expenses;
