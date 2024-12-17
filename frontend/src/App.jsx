import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeProvider from './Components/ThemeProvider';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import Navbar from './Components/navbar';
function App() {
  const [user, setUser] = useState(null);

  // Check for user token on app load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Simulating fetching user data (replace with real API call)
      const loggedInUser = { name: 'John Doe' }; // Replace with decoded JWT token
      setUser(loggedInUser);
    }
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser}/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
