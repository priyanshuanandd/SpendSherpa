import React from 'react';
import { useTheme } from './ThemeProvider';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const { darkMode, toggleTheme } = useTheme(); // Theme context
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear stored token
    setUser(null); // Reset user state
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="p-4 bg-gray-800 dark:bg-gray-900 text-white flex justify-between items-center shadow-md">
      {/* Logo or Brand Name */}
      <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate('/')}>
        SpendSherpa
      </h1>

      {/* Right Section: Theme Toggle & User Menu */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 text-xl"
        >
          {darkMode ? '🌞' : '🌙'}
        </button>

        {/* User Info or Login/Signup */}
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-lg font-medium">Hello, {user.name}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-md text-white font-medium"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <button
              onClick={() => navigate('/login')}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md font-medium"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-md font-medium"
            >
              Signup
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
