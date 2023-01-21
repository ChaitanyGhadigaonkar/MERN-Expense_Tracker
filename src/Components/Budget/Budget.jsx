import React from 'react'

function Budget({ name, MaxSpending ,TotalSpending }) {
  const percentage = Math.floor((TotalSpending/MaxSpending)*100);

  return (
    <div className='budget w-full border-[1px] py-2 px-2 flex flex-col gap-3 justify-between rounded-lg shadow-xl'>
      <div className="name flex items-center justify-between">
        <p className='text-base font-semibold'>{name}</p>
        <p className='text-base font-semibold'>${TotalSpending}/${MaxSpending}</p>
      </div>
      <div className={`progressbar w-[100%] border-[1px] h-4 rounded-full bg-gray-300 relative  before:content-[''] before:flex before:items-center before:absolute before:min-w-[10%]  before:w-[${percentage}%] before:max-w-[calc(100%)] before:bg-blue-400 before:left-[0em] before:bottom-[0em] before:top-[0em] before:rounded-[1em] `}>
      </div>
      <div className="expense-section flex items-center justify-between">
        <button className='border-[2px] text-blue-500 rounded-lg px-4 py-2 cursor-pointer'>ADD Expense</button>
        <button className='border-[2px]  rounded-lg px-2 py-2 cursor-pointer'>View Deatails</button>
      </div>
    </div>
  )
}

export default Budget
