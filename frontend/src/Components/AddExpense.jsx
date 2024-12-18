import React, { useState } from "react";

const AddExpense = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) {
      alert("Please fill in all fields.");
      return;
    }

    onAdd({ text, amount: parseFloat(amount) });
    setText("");
    setAmount("");
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Add New Expense</h3>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Expense Name"
          className="px-4 py-2 border rounded-md focus:outline-none dark:bg-gray-700 dark:text-white"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="px-4 py-2 border rounded-md focus:outline-none dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
