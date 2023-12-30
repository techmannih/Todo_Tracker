import React, { useState,useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ForgotPassword from './Pages/ForgotPassword';
import Home from './Pages/Homepage/todolist';

const App = () => {
  // Assuming you have some authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to simulate authentication (replace this with your actual authentication logic)
  useEffect(() => {
    // Implement your authentication check here
    // For simplicity, let's use a local storage variable as an example
    const storedToken = localStorage.getItem("userToken");
    if (storedToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route
            path="/"
            element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<ForgotPassword />} />

          {/* Protected route: Home (renders only if authenticated) */}
          <Route
            path="/home"
            element={  isLoggedIn ? (
              <Home />
            ) : (
              // Redirect to authentication page if not logged in
              <Navigate to="/" replace />
            )}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
