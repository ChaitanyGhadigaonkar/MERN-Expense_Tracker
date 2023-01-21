import { useEffect, useState } from "react";
import BudgetContext from "./BudgetContext";

const Host ="http://localhost:3001";

const BudgetProvider =(props)=>{
    const [budgets,setBudgets] = useState([]);


    // getting the users all budgets 
    async function getAllBudgets(){
        const response =await fetch(`${Host}/api/budget/`,{
            method:"GET",
            headers:{
                "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc5NTgzNGJiNGRjZTc5MDgxMjUzOSIsImlhdCI6MTY3NDAyNDMzOH0.ByQv3cGBdrfcxkfKOTyBci53JFku__cHNvNVy8m6aH4"
            }
        })
        const result = await response.json();
        const {success , budget} = result;
        setBudgets(budget);
        console.log(budget)
    };


    useEffect(() => {
        getAllBudgets();
    }, []);
    return(
        <BudgetContext.Provider value={{budgets,setBudgets,getAllBudgets}}>
            {props.children}
        </BudgetContext.Provider>
    )
}
export default BudgetProvider