import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Save token and name to localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.name); // Backend should return name

      setUser({ name: response.data.name }); // Set user state
      navigate("/"); // Redirect to Home
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-800">
      <div className="w-full max-w-md p-8 space-y-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="email"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white bg-white dark:bg-gray-700"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white bg-white dark:bg-gray-700"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md dark:bg-blue-600">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
