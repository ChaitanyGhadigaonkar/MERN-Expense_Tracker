import { useEffect, useState } from "react";
import BudgetContext from "./BudgetContext";

const Host ="http://localhost:3001";

const BudgetProvider =(props)=>{
    const [budgets,setBudgets] = useState([]);
    const [expenses,setExpenses] =useState([]);

    // getting the users all budgets 
    async function getAllBudgets(){
        const response =await fetch(`${Host}/api/budget/`,{
            method:"GET",
            headers:{
                'Content-Type': 'application/json',
                "authToken": localStorage.getItem("authToken")
            }
        })
        const result = await response.json();
        const {success , budget} = result;
        setBudgets(budget);
        console.log(budget)
    };

    // creating a budgets
    async function createBudget(name,MaxSpending){
        const response =await fetch(`${Host}/api/budget/`,{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                "authToken":  localStorage.getItem("authToken")
            },
            body:JSON.stringify({name,MaxSpending})
        })
        const result = await response.json();
        const {success , budget} = result;
        setBudgets(prevBudgets=>[...prevBudgets,budget]);
    };

    // delete a note
    async function deleteBudget(id){
        const response =await fetch(`${Host}/api/budget/${id}`,{
            method:"DELETE",
            headers:{
                'Content-Type': 'application/json',
                "authToken":  localStorage.getItem("authToken")
            },
        })
        const result = await response.json();
        const {success , budget} = result;
        const newArray = budgets.filter((id)=>{
            return id !==budgets._id
        })
        setBudgets(newArray);
    };

    // updating a note
    async function updateBudget(id,name,MaxSpending){
        const response =await fetch(`${Host}/api/budget/${id}`,{
            method:"PUT",
            headers:{
                'Content-Type': 'application/json',
                "authToken":  localStorage.getItem("authToken")
            },
            body:JSON.stringify({name,MaxSpending})
        })
        const result = await response.json();
        const {success , budget} = result;
        setBudgets(budgets.map(el => (el._id === id ? Object.assign({},el,budget): el)));
        
    };

    return(
        <BudgetContext.Provider value={{budgets,setBudgets,getAllBudgets,createBudget,deleteBudget,updateBudget}}>
            {props.children}
        </BudgetContext.Provider>
    )
}
export default BudgetProvider