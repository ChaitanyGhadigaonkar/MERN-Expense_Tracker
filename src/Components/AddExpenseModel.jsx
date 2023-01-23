import { useRef } from "react";
import { useState } from "react";
import { createPortal } from 'react-dom';

function AddExpenseModel({isOpen,setIsOpen}) {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const MaxSpendingRef = useRef();
    const [budgetValues, setBudgetValues] = useState({ name: nameRef.current,description:descriptionRef.current, maxSpending: MaxSpendingRef.current });

    function handleAddExpnse(e) {
        e.preventDefault();
    }
    function handleOnChange(e) {
        setBudgetValues({ ...budgetValues, [e.target.name]: [e.target.value] });
    }
    if (!isOpen) return null
    return createPortal(
        <div>
            <div className="model w-[95%] shadow-xl bg-white  border-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg z-10">
                <div className="header border-b-[1px] px-2 border-gray-400 flex justify-between items-center">
                    <h1 className="text-lg font-semibold">Add Expense</h1>
                    <button className="close font-semibold text-4xl" onClick={() => setIsOpen(false)}>&times;</button>
                </div>
                <form className="p-2 flex flex-col items-center justify-center gap-2">
                    <div className="labelInput w-full flex flex-col items-start justify-between gap-1">
                        <label htmlFor="name">Name</label>
                        <input ref={nameRef} type="text" name="name"
                            className="w-full px-2 py-1 rounded-lg border-[1px] border-blue-500  focus:outline-blue-600 "
                            placeholder="Name" value={budgetValues.name} onChange={handleOnChange} />
                    </div>
                    <div className="labelInput w-full flex flex-col items-start justify-between gap-1">
                        <label htmlFor="name">Description</label>
                        <textarea ref={descriptionRef}  name="description"
                            className="w-full px-2 py-1 rounded-lg border-[1px] border-blue-500  focus:outline-blue-600 "
                            placeholder="Name" value={budgetValues.description} onChange={handleOnChange} />
                    </div>
                    <div className="labelInput w-full flex flex-col items-start justify-between gap-1">
                        <label htmlFor="Maxspending">MaxSpending</label>
                        <input ref={MaxSpendingRef} type="numbser" name="MaxSpending"
                            className="w-full px-2 py-1 rounded-lg border-[1px] border-blue-500  focus:outline-blue-600 "
                            placeholder="Enter Maximum Spending" value={budgetValues.maxSpending} onChange={handleOnChange} />
                    </div>

                    <button className="border-[2px] bg-blue-500 rounded-lg px-4 py-2 cursor-pointer text-white" type="submit" onClick={handleAddExpnse}>Add Expense</button>
                </form>
            </div>
            <div className="overlays absolute top-0 left-0 right-0 bottom-0 bg-gray-300 ">
            </div>
        </div>, document.getElementById("portal2")
    )
}

export default AddExpenseModel
