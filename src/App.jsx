import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import Home from "./Pages/Homepage/todolist";

const App = () => {
  //authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedToken = localStorage.getItem("userId");
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
          <Route
            path="/"
            element={
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route
            path="/home"
            element={
              isLoggedIn ? (
                <Home />
              ) : (
                // Redirect to authentication page if not logged in
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
