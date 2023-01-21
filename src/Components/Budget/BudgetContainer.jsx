import React, { useContext, useEffect, useState } from 'react'
import Budget from './Budget'
import BudgetContext from '../../Context/BudgetContext'

function BudgetContainer() {
    const { budgets} = useContext(BudgetContext);

    return (
        <div className='min-h-screen px-3'>
            <div className="addbutton h-24 flex items-center justify-center">
                <button className='border-[2px] bg-blue-400 rounded-lg px-4 py-2 cursor-pointer'>ADD Budget</button>
            </div>
            <div className="all-budgets flex flex-col gap-5 items-center justify-evenly">
                {budgets.map((e)=>{
                    return <Budget key={e._id} name={e.name} MaxSpending={e.MaxSpending} TotalSpending={500} />
                })}
            </div>

        </div>
    )
}

export default BudgetContainer
