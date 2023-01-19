import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='w-screen h-[calc(100vh-4rem)] flex flex-col items-center justify-center gap-3 '>
      <h1 className='font-semifold text-lg'>Login to <strong>Expense Tracker</strong></h1>
      <div className="form w-9/12 flex flex-col gap-4 justify-around items-center sm:px-8 sm:w-full">
        
      <input type="email" name="email"
            className="w-full px-3 py-2 rounded-lg border-[1px] border-blue-500 focus:outline-blue-600 "
            placeholder="Enter Email" />
        <input type="password" name="password"
          className="w-full px-3 py-2 rounded-lg border-[1px] border-blue-500  focus:outline-blue-600 "
          placeholder="Enter Password" />
        <button className="btn border-blue-500 border-[1px] hover:bg-blue-500 hover:text-white cursor-pointer px-2 py-2 rounded-lg text-base">Login</button>
      </div>
      <p className='text-left'>Haven't Registered? <Link className='text-blue-400 font-semibold' to="/signup">Register here</Link></p>
    </div>
  )
}

export default Login
