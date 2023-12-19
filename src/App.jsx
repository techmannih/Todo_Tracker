import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import ForgotPassword from "./Pages/ForgotPassword"
 import Home from "./Pages/Homepage/todolist"
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

      <Route exact path="/home" element={<Home/>} />
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/forgot" element={<ForgotPassword/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

