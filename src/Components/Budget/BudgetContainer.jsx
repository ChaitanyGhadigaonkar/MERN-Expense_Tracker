import React, { useContext, useEffect, useState } from 'react'
import Budget from './Budget'
import BudgetContext from '../../Context/BudgetContext'

function BudgetContainer() {
    const { budgets,createBudget,deleteBudget,updateBudget} = useContext(BudgetContext);

    // onClick={()=>createBudget("new",2828)}
    // updateBudget("63ca41a8b3dcfeb401b46570","Grocery to 6 name",2828)}
    // deleteBudget("63cb941b799172a61e7422de")
    return (
        <div className='min-h-screen px-3'>
            <div className="addbutton h-24 flex items-center justify-center">
                <button className='border-[2px] bg-blue-400 rounded-lg px-4 py-2 cursor-pointer' >ADD Budget</button>
            </div>
            <div className="all-budgets flex flex-col gap-5 items-center justify-evenly">
                {budgets.map((e)=>{
                    return <Budget key={e._id} name={e.name}  TotalSpending={0} MaxSpending={e.MaxSpending} />
                })}
            </div>

        </div>
    )
}

export default BudgetContainer
