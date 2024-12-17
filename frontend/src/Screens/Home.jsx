import React from "react";
import { Link } from "react-router-dom";

const Home = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      {user ? (
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Welcome, {user.name}!
          </h1>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Welcome, Guest!
          </h1>
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;