import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEdititng, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const startEditingHangler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEdititng && (
        <button onClick={startEditingHangler}>Add New Expense</button>
      )}
      {isEdititng && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          stopEditing={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
