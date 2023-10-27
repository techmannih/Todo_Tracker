import React, { useRef, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import dotenv from "dotenv";

const Signup = () => {
  const navigate = useNavigate()

  const [uservalue, setUservalue] = useState('')
  const [emailvalue, setEmailvalue] = useState('')
  const [passwordvalue, setPasswordvalue] = useState('')


  async function handleSignup(e) {
    e.preventDefault()

    const req = {
      "name": uservalue,
      "email": emailvalue,
      "password": passwordvalue
    }
    
    try {
      const response = await fetch(process.env.SSSSSSS+"/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
      });
    

      if (response.ok) {
        navigate('/')
      } else {
        // Handle signup error based on the response
        alert("error")
       
      }
    } catch (error) {
      console.error('Error occurred while making the signup request', error);
    }
   
  }
  
  return (
    <div className=" h-screen flex items-center justify-center">
    <div className="container-login bg-black flex  p-8 m-8 text-white border-white border-2 rounded-2 rounded-xl  ">
      <div className="box">
        <div className="head">
          <span className=''></span>
          <div className='text-center py-6 text-xl font-bold '>Sign Up</div>
          <span className=''></span>
        </div>
        <div className="content">
          <div className='form'>
            <div className="m-5">
              <input
              className='bg-black p-2 hover:border-white hover:border-2  hover:rounded-xl'
                type="text"
                value={uservalue}
                onChange={(e) => setUservalue(e.target.value) }
                name='name'
                placeholder='Full Name'
                spellCheck="false"
                autoComplete='false' required />
            </div>
            <div className="m-5">
              <input className='bg-black p-2 hover:border-white hover:border-2  hover:rounded-xl'
                type="email"
                value={emailvalue}
                onChange={(e) => setEmailvalue(e.target.value) }
                name='email'
                placeholder='Email ID'
                spellCheck="false"
                autoComplete='true' required />
            </div>
            <div className="m-5">
              <input className='bg-black p-2 hover:border-white hover:border-2  hover:rounded-xl'
                type="password"
                value={passwordvalue}
                onChange={(e) => setPasswordvalue(e.target.value) }
                name='password'
                placeholder='Password' required />
            </div>
            <div className="cursor-pointer text-center py-3 m-5 hover:bg-white hover:text-black  border-white border-2 rounded-2 rounded-xl">
              <input
              
                type="submit"
                value={"Sign Up"}
                className='submit cursor-pointer font-bold' onClick={handleSignup} />
            </div>
            <div className="flex m-5 justify-between font-bold ">
              
              <input className='cursor-pointer' type="button" value="Login" onClick={() => navigate('/')} />

              <input className='cursor-pointer submit' type="submit" value={"Need Help ?"} onClick={() => navigate('/forgot')} />
            </div>
          </div>
        </div>
      </div>
    </div></div>
  )
}

export default Signup