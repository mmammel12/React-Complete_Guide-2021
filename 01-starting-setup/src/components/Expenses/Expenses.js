import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  const expenseItems = props.expenses.map((item) => (
    <ExpenseItem date={item.date} title={item.title} amount={item.amount} />
  ));

  return <Card className="expenses">{expenseItems}</Card>;
};

export default Expenses;
