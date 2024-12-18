// src/Signup.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../Components/apiConfig';
const Signup = ({setUser}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, email, password }); // Log the data you're sending

    try {
      const response = await axios.post(`${API_URL}/auth/signup`, {
        name,
        email,
        password
      });

      console.log(response.data); // Log the response to see if it's successful
      // Save the token and redirect
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('name', name);
      setUser({ name: name });
      console.log('Signup successful');
      localStorage.setItem("name", name);
      console.log(localStorage);
      navigate('/login'); // Redirect to dashboard or another page after successful signup
    } catch (error) {
      console.error('Error signing up:', error.response ? error.response.data : error);
      alert('Error signing up');
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-800">
      <div className="w-full max-w-md p-8 space-y-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white bg-white dark:bg-gray-700"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
