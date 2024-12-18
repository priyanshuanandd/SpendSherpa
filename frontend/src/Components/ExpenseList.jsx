import React from "react";
import ExpenseCard from "./ExpenseCard";

const TotalExpense = ({ expenses }) => {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

    return (
        <div className="bottom-0 bg-gray-100 dark:bg-gray-800 p-4 text-xl font-semibold text-gray-800 dark:text-white shadow-md">
            Total Expense: ₹{total.toFixed(2)}
        </div>
    );
};

const ExpenseList = ({ expenses, onDeleteExpense }) => {
    return (
        <div className="space-y-4">
            {expenses.length > 0 ? (
                expenses.map((expense) => (
                    <ExpenseCard
                        key={expense._id}
                        expense={expense}
                        onDelete={onDeleteExpense}
                    />
                ))
            ) : (
                <p className="text-gray-600 dark:text-gray-400">
                    No expenses found. Start adding your expenses!
                </p>
            )}
            <TotalExpense expenses={expenses} />
        </div>
    );
};

export default ExpenseList;
