import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeProvider from './Components/ThemeProvider';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import ProtectedAuthRoute from './Components/Authentication/ProtectedAuthRoute'
import Home from './Screens/Home';
import Navbar from './Components/navbar';

function App() {
  const [user, setUser] = useState(null);

  // Check for user token on app load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        console.log(localStorage)
      const loggedInUser = { name: localStorage.name }; 
      setUser(loggedInUser);
    }f
  }, []);

  return (
    <ThemeProvider>

      <Router>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={<ProtectedAuthRoute> <Login setUser={setUser} /></ProtectedAuthRoute>} />
          <Route path="/signup" element={<ProtectedAuthRoute> <Signup setUser={setUser} /></ProtectedAuthRoute>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
