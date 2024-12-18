import React from "react";
import AddExpense from "./AddExpense";

const AddExpenseSection = ({ onAddExpense }) => {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Manage Your Expenses
      </h3>
      <AddExpense onAdd={onAddExpense} />
    </div>
  );
};

export default AddExpenseSection;
