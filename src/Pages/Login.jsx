import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();

  const [emailid, setEmailid] = useState('')
  const [password, setPassword] = useState('')


  async function handleSignup(e) {
    e.preventDefault()


    const req = {
      email: emailid,
      password: password
    }
  //  
    try {
      const response = await fetch(`${import.meta.env.REACT_APP_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
      });
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        document.cookie = "userToken=" + data.success;
        navigate('/home')
        console.log("1")
      } else{
        alert("Please  Check Your Email and Password ")
      }console.log("2")
    } catch (error) {
      console.error('Error occurred while authenticating', error);
      console.log("3")
    }
  }


  return (
    <div className="container-login bg-black flex  p-8 m-8 text-white border-white border-2  rounded-xl">
      <div className="box ">
        <div className="head">
          <span className=''></span>
          <div className='text-center py-6 text-xl font-bold '>Log In</div>
          <span className=''></span>
       
        <div className="content">
          <div className='form'>
            <div className="m-5">
              <input
              className='bg-black p-2 hover:border-white hover:border-2  hover:rounded-xl'
                type="email"
                value={emailid}
                onChange={(e) => setEmailid(e.target.value)}
                name='email'
                placeholder='Email ID'
                spellCheck="false"
                autoComplete='true' required />
            </div>
            <div className="m-5 ">
              <input
              className='bg-black p-2 hover:border-white hover:border-2  hover:rounded-xl'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name='password'
                placeholder='Password' required />
            </div>
            <div className=" cursor-pointer text-center py-3 m-5 hover:bg-white hover:text-black  border-white border-2 rounded-2 rounded-xl" >
              <input
             className='cursor-pointer font-bold  '
                type="submit"
                value={"Login"}
                onClick={handleSignup} />
            </div>
            <div className="flex m-5 justify-between font-bold ">
              <input className='cursor-pointer' type="button" value="Sign Up" onClick={() => navigate('/signup')} />
            
              <input className='cursor-pointer submit' type="submit" value={"Need Help ?"} onClick={() => navigate('/forgot')} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
            
  )
}

export default Login