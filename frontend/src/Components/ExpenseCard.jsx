import React, { useState } from "react";

const ExpenseCard = ({ expense, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    text: expense.text,
    amount: expense.amount,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-700 shadow rounded-md flex justify-between items-center">
      {isEditing ? (
        <div className="flex-grow space-y-2">
          <input
            type="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            className="w-full px-2 py-1 rounded border dark:bg-gray-600 dark:text-white"
          />
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full px-2 py-1 rounded border dark:bg-gray-600 dark:text-white"
          />
        </div>
      ) : (
        <div>
          <h4 className="font-bold text-lg text-gray-800 dark:text-white">
            {expense.text}
          </h4>
          <p className="text-gray-600 dark:text-gray-400">₹{expense.amount}</p>
        </div>
      )}
      <div className="flex space-x-2">
        <button
          onClick={() => onDelete(expense._id)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseCard;
