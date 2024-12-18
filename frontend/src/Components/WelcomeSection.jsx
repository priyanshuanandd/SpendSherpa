import React from "react";
import { Link } from "react-router-dom";

const WelcomeSection = ({ user }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-300 to-indigo-600 dark:from-gray-800 dark:to-gray-900 text-white">
      <h1 className="text-7xl font-bold mb-4">
        Welcome {user ? user.name : "Guest"}!!!
      </h1>
      {user ? (
        <p className="text-lg">Scroll down to manage your expenses!</p>
      ) : (
        <div className="flex space-x-4 mt-4">
          <Link
            to="/login"
            className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default WelcomeSection;
