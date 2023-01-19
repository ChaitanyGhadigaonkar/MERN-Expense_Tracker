import BudgetContext from "./BudgetContext";


const BudgetProvider =(props)=>{
    return(
        <BudgetContext.Provider value="chinmay">
            {props.children}
        </BudgetContext.Provider>
    )
}
export default BudgetProvider