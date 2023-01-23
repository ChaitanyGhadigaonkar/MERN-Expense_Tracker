import React from 'react'
import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'


function Login() {

  const Host = "http://localhost:3001";
  const [credentials, setCredentals] = useState({ email: "", password: "" });
  const Navigator  = useNavigate();
  
  async function handleLogin(e) {
    e.preventDefault();
    console.log(credentials);
    const response =await fetch(`${Host}/api/auth/`, {
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({email:credentials.email[0],password:credentials.password[0]})
    });
    const result = await response.json();
    if(result.success === true){
      localStorage.setItem("authToken",result.jwtToken);
      Navigator("/budgets");
    }else{
      Navigator("/login");
    }
  }
  function handleOnChange(e) {
    setCredentals({ ...credentials, [e.target.name]: [e.target.value] })
  }
  
  useEffect(()=>{
    if(localStorage.getItem("authToken")){
      Navigator("/budgets");
    }
  },[])

  return (
    <div className='w-screen h-[calc(100vh-4rem)] flex flex-col items-center justify-center gap-3 '>
      <h1 className='font-semifold text-lg'>Login to <strong>Expense Tracker</strong></h1>
      <form className='form w-9/12 flex flex-col gap-4 justify-around items-center sm:px-8 sm:w-full'>
        <input type="email" name="email"
          className="w-full px-3 py-2 rounded-lg border-[1px] border-blue-500 focus:outline-blue-600 "
          placeholder="Enter Email" value={credentials.email} onChange={handleOnChange} />
        <input type="password" name="password"
          className="w-full px-3 py-2 rounded-lg border-[1px] border-blue-500  focus:outline-blue-600 "
          placeholder="Enter Password" value={credentials.password} onChange={handleOnChange} />
        <button className="btn border-blue-500 border-[1px] hover:bg-blue-500 hover:text-white cursor-pointer px-2 py-2 rounded-lg text-base" type='submit' onClick={handleLogin}>Login</button>
      </form>
      <p className='text-left'>Haven't Registered? <Link className='text-blue-400 font-semibold' to="/signup">Register here</Link></p>
    </div>
  )
}

export default Login
