import React, { useState, useEffect } from "react";
import axios from "axios";
import ExpenseList from "../components/ExpenseList";
import AddExpenseSection from "../Components/AddExpenseSection";
import WelcomeSection from "../Components/WelcomeSection";
import { API_URL } from "../Components/apiConfig";

const Home = ({ user }) => {
  const [expenses, setExpenses] = useState([]); // State to store expenses
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [Checker, setChecker] = useState(false)

  // Fetch expenses from the API
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get(`${API_URL}/expense`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        setExpenses(response.data.data); // Update state with fetched expenses
      } catch (err) {
        setError("Failed to fetch expenses.");
      } finally {
        setLoading(false);
      }
    };
    setChecker(false);
    fetchExpenses();
  }, [Checker]);

  // Handle adding a new expense
  const onAddExpense = async (newExpense) => {
    try {
      const response = await axios.post(
        `${API_URL}/expense`,
        newExpense,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      // Update state with the new expense
      setExpenses((prevExpenses) => [...prevExpenses, response.data.data]); 
      setChecker(true);// response.data.data will contain the newly added expense
    } catch (err) {
      setError("Failed to add expense.");
    }
  };

  // Handle deleting an expense
  const onDeleteExpense = async (expenseId) => {
    try {
      const response = await axios.delete(`${API_URL}/expense/${expenseId}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setExpenses((prevExpenses) =>
        prevExpenses.filter((expense) => expense._id !== expenseId)
      );
    } catch (err) {
      setError("Failed to delete expense.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      <WelcomeSection user={user} />
      {user && (
        <div className="p-6 space-y-6">
          <AddExpenseSection onAddExpense={onAddExpense} />
          <ExpenseList
            expenses={expenses}
            onDeleteExpense={onDeleteExpense}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
