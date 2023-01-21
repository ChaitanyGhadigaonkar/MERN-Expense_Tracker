import React from 'react'
import {Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <nav className='w-screen h-16 border-[1px] flex flex-row items-center justify-between px-3' >
        <div className="logo">
          <h1 className='font-bold text-lg'>Expense Tracker</h1>
        </div>
        <div
          className="hidden routes absolute h-fit text-left gap-8 top-16  right-0 left-0 bottom-0 bg-white md:static md:bg-inherit md:text-white md:flex md:flex-row md:justify-end md:h-auto">
          <li before="" className="list-none text-[#7d8ac4] font-bold  py-2 relative before:content-[attr(before)] before:absolute before:right-0 before:bottom-0 before:left-0 before:top-[1]  before:bg-[white] before:h-[2px] before:opacity-0 before:scale-x-0 before:origin-left before:duration-300 before:hover:opacity-100 hover:before:transition-transform before:hover:scale-x-100 md:text-white md:m-0  "><Link
            className="" to="">Home</Link></li>
          <li before="" className="list-none text-[#7d8ac4] font-bold  py-2 relative before:content-[attr(before)] before:absolute before:right-0 before:bottom-0 before:left-0 before:top-[1]  before:bg-[white] before:h-[2px] before:opacity-0 before:scale-x-0 before:origin-left before:duration-300 before:hover:opacity-100 hover:before:transition-transform before:hover:scale-x-100 md:text-white md:m-0  "><Link
            className="" to="">About</Link></li>
          <li before="" className="list-none text-[#7d8ac4] font-bold mx-16 py-2 relative before:content-[attr(before)] before:absolute before:right-0 before:bottom-0 before:left-0 before:top-[1]  before:bg-[white] before:h-[2px] before:opacity-0 before:scale-x-0 before:origin-left before:duration-300 before:hover:opacity-100 hover:before:transition-transform before:hover:scale-x-100 md:text-white md:m-0  "><Link
            className="" to="">PortFolio</Link></li>
          <li before="" className="list-none text-[#7d8ac4] font-bold  py-2 relative before:content-[attr(before)] before:absolute before:right-0 before:bottom-0 before:left-0 before:top-[1]  before:bg-[white] before:h-[2px] before:opacity-0 before:scale-x-0 before:origin-left before:duration-300 before:hover:opacity-100 hover:before:transition-transform before:hover:scale-x-100 md:text-white md:m-0  "><Link
            className="" to="">Testmonial</Link></li>
          <li before="" className="list-none text-[#7d8ac4] font-bold  py-2 relative before:content-[attr(before)] before:absolute before:right-0 before:bottom-0 before:left-0 before:top-[1]  before:bg-[white] before:h-[2px] before:opacity-0 before:scale-x-0 before:origin-left before:duration-300 before:hover:opacity-100 hover:before:transition-transform before:hover:scale-x-100 md:text-white md:m-0  "><Link
            className="" to="">Contact</Link></li>
          <li before="" className="list-none text-[#7d8ac4] font-bold  py-2 relative before:content-[attr(before)] before:absolute before:right-0 before:bottom-0 before:left-0 before:top-[1]  before:bg-[white] before:h-[2px] before:opacity-0 before:scale-x-0 before:origin-left before:duration-300 before:hover:opacity-100 hover:before:transition-transform before:hover:scale-x-100 md:text-white md:m-0  "></li>
        </div>
        <div className="hamburger cursor-pointer md:hidden">
          <div className="line w-8 h-1 bg-black rounded-sm my-1"></div>
          <div className="line w-8 h-1 bg-black rounded-sm my-1"></div>
          <div className="line w-8 h-1 bg-black rounded-sm my-1"></div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
