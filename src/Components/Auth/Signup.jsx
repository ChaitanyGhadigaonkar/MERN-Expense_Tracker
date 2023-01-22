import React from 'react'

import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
function Signup() {

  const Host = "http://localhost:3001";
  const [credentials, setCredentals] = useState({name:"", email: "", password: "",cPassword:"" });
  const Navigator  = useNavigate();
  
  async function handleRegister(e) {
    e.preventDefault();
    const response =await fetch(`${Host}/api/auth/signup`, {
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({name:credentials.name[0],email:credentials.email[0],password:credentials.password[0],confirmPassword:credentials.cPassword[0]})
    });
    const result = await response.json();
    if(result.err === "user exists"){
      alert("Email already exists");
    }else if(result.success===true){
      Navigator("/login");
    }else{
      Navigator("/signup");
    }
  }
  function handleOnChange(e) {
    setCredentals({ ...credentials, [e.target.name]: [e.target.value] })
  }

  // useEffect(()=>{
  //   if(localStorage.getItem("authToken")){
  //     Navigator("/budgets");
  //   }
  // },[])


  return (
    <div className='w-screen h-[calc(100vh-4rem)] flex flex-col items-center justify-center gap-3 '>
      <h1 className='font-semifold text-lg'>Resgister to <strong>Expense Tracker</strong></h1>
      <form className="form w-9/12 flex flex-col gap-4 justify-around items-center sm:px-8 sm:w-full">
        <div className="name w-full flex flex-col gap-4 lg:flex-row ">
          <input type="text" name="name"
            className="w-full px-3 py-2 rounded-lg border-[1px] border-blue-500  text-base focus:outline-blue-600  shadow-lg sm:w-full" value={credentials.name} onChange={handleOnChange}
            placeholder="Your Name" />
          <input type="email" name="email"
            className="w-full px-3 py-2 rounded-lg border-[1px] border-blue-500 focus:outline-blue-600 " value={credentials.email} onChange={handleOnChange}
            placeholder="Enter Email" />
        </div>
        <input type="password" name="password"
          className="w-full px-3 py-2 rounded-lg border-[1px] border-blue-500  text-base focus:outline-blue-600  shadow-lg sm:w-full" value={credentials.password} onChange={handleOnChange}
          placeholder="Enter password" />
        <input type="password" name="cPassword"
          className="w-full px-3 py-2 rounded-lg border-[1px] border-blue-500  focus:outline-blue-600 " value={credentials.cPassword} onChange={handleOnChange}
          placeholder="Confirm password" />
        <button className="btn border-blue-500 border-[1px] hover:bg-blue-500 hover:text-white cursor-pointer px-2 py-2 rounded-lg text-base" type='submit' onClick={handleRegister}>Register</button>
      </form>
      <p className='text-left'>Already Registered? <Link className='text-blue-400 font-semibold' to="/login">Login here</Link></p>
    </div>
  )
}

export default Signup
