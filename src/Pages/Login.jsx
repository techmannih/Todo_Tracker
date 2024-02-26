import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [error1, setError1] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home", { replace: true });
    }
  }, [isLoggedIn]);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Add logic to send the login data to backend for authentication
      console.log("Login data submitted:", loginData);
      const response = await fetch("http://localhost:8888/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const { userId } = await response.json();
      localStorage.setItem("userId", userId);
      // Clear the form fields
      setLoginData({
        fullName: "",
        email: "",
        password: "",
      });
      if (response.ok) {
        setSuccessMessage("User Logged In  successfully!");

        setTimeout(() => {
          setSuccessMessage(null);
          navigate("/home");
        }, 1000);
        setIsLoggedIn(true);
        console.log("User authenticated successfully!");
      } else {
        setIsLoggedIn(false);
        // Authentication failed, handle errors
        const responseBody = await response.json();
        if (
          responseBody.errors &&
          (responseBody.errors.email ||
            responseBody.errors.password === "Invalid credentials")
        ) {
          // Display an error message to the user indicating invalid credentials
          setError("Invalid email. Please try again.");
          setTimeout(() => {
            setError(null);
            navigate("/");
          }, 1000);
        } else {
          console.error("Authentication failed:", response.statusText);
          setError1("Invalid email or password. Please try again.");
          setTimeout(() => {
            setError1(null);
            navigate("/");
          }, 1000);
        }
      }
    } catch (error) {
      console.error("Error during authentication:", error.message);
      setIsLoggedIn(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="container-login bg-black flex p-8 m-8 text-white border-white border-2 rounded-xl">
        <div className="box">
          {successMessage && (
            <div className="text-green-500 text-center p-2">
              {successMessage}
            </div>
          )}
          <div className="head">
            <span className=""></span>
            <div className="text-center py-6 text-xl font-bold">Log In</div>
            <span className=""></span>
          </div>
          <div className="content">
            <form onSubmit={handleLogin} className="form">
              <div className="m-5">
                <input
                  className="bg-black p-2 hover:border-white hover:border-2  hover:rounded-xl"
                  type="email"
                  value={loginData.email}
                  onChange={handleChange}
                  name="email"
                  placeholder="Email ID"
                  spellCheck="false"
                  autoComplete="true"
                  required
                />
              </div>
              <div className="m-5 ">
                <input
                  className="bg-black p-2 hover:border-white hover:border-2  hover:rounded-xl"
                  type="password"
                  value={loginData.password}
                  onChange={handleChange}
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <p className="text-red-500 m-2 p-2">{error}</p>
              <p className="text-red-500 m-2 p-2">{error1}</p>
              <div className=" text-center">
                <button
                  type="submit"
                  className="submit cursor-pointer text-center  hover:bg-white hover:text-black  border-white border-2 rounded-2 rounded-xl font-bold py-3 px-24"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="flex m-5 justify-between font-bold">
              <Link to="/signup">
                {" "}
                <input
                  className="cursor-pointer"
                  type="button"
                  value="Sign Up"
                />
              </Link>

              <Link to="/forgot">
                {" "}
                <input
                  className="cursor-pointer submit"
                  type="button"
                  value={"Need Help ?"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
