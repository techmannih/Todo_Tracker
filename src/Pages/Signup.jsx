import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add logic to send the form data to your backend for user registration
      console.log("Form data submitted:", formData);

      // Make an API call to your server to handle user registration
      const response = await fetch("http://localhost:8888/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful, you can redirect or perform other actions
        console.log("User registered successfully!");
        console.log(formData)
      } else {
        // Registration failed, handle errors
        console.error("Registration failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="container-login bg-black flex p-8 m-8 text-white border-white border-2 rounded-2 rounded-xl">
        <div className="box">
          <div className="head">
            <span className=""></span>
            <div className="text-center py-6 text-xl font-bold">Sign Up</div>
            <span className=""></span>
          </div>
          <div className="content">
            <form onSubmit={handleSubmit} className="form">
              <div className="m-5">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="bg-black p-2 hover:border-white hover:border-2  hover:rounded-xl"
                  required
                />
              </div>
              <div className="m-5">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email ID"
                  className="bg-black p-2 hover:border-white hover:border-2  hover:rounded-xl"
                  required
                />
              </div>
              <div className="m-5">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="bg-black p-2 hover:border-white hover:border-2  hover:rounded-xl"
                  required
                />
              </div>

              <div className="cursor-pointer text-center py-3 m-5 hover:bg-white hover:text-black  border-white border-2 rounded-2 rounded-xl">
                <button
                  type="submit"
                  className="submit cursor-pointer font-bold"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="flex m-5 justify-between font-bold">
              <Link to="/">
                {" "}
                <button className="cursor-pointer" type="button">
                  Login
                </button>
              </Link>
              <Link to="/forgot">
                {" "}
                <button className="cursor-pointer submit" type="button">
                  Need Help ?
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
