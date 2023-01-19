import React, { useContext } from 'react'
import Budget from './Budget'
import BudgetContext from '../../Context/BudgetContext'

function BudgetContainer() {
    const data = useContext(BudgetContext);
    return (
        <div className='min-h-screen px-3'>
            <div className="addbutton h-24 flex items-center justify-center">
                <button className='border-[2px] bg-blue-400 rounded-lg px-4 py-2 cursor-pointer'>ADD Budget</button>
            </div>
            <div className="all-budgets flex flex-col gap-5 items-center justify-evenly">
                <Budget name="Grocery" MaxSpending={2000} TotalSpending={2000}/>
                <Budget name="Entettainment" MaxSpending={2000} TotalSpending={1000}/>
                <Budget name="Grocery" MaxSpending={2000} TotalSpending={500}/>
                <Budget name="Grocery" MaxSpending={2000} TotalSpending={250}/>
            </div>
            
        </div>
    )
}

export default BudgetContainer
