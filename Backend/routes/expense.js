const express = require('express');
const hasAuth = require('../middleware/AuthUser');
const Expense = require('../models/Expense');
const ExpenseRoute = express.Router();
const Budget = require("../models/Budget");

// get all expenses from budget
ExpenseRoute.get("/:budget/",hasAuth,async(req,res)=>{
    try {
        const {id} = req.user;
        const budgetName= req.params.budget;
        let budget = await Budget.findById({_id:budgetName});
        if(budget.recordedBy.valueOf() !== id ){
            res.status(404).json({ success: false, err:"Please authenticate with valid user" });
        }else{
            const expense = await Expense.find({budgetName});
            res.status(203).json({success:true,expense});
        }
        } catch (err) {
            res.status(404).json({ success: false, err:"Please authenticate with valid user" });
        }
});

// add a expense in particaular budget 
ExpenseRoute.post("/:budget/",hasAuth,async(req,res)=>{
    try {
    const {id} = req.user;
    const budgetName= req.params.budget;
    const {name,description,amount} = req.body;
    let budget = await Budget.findById({_id:budgetName});
    if(budget.recordedBy.valueOf() !== id ){
        res.status(404).json({ success: false, err:"Please authenticate with valid user" });
    }else{
        const expense = new Expense({name,description,amount,recordedBy:id,budgetName});
        const result = await expense.save();
        res.status(203).json({success:true,expense:{result}});
    }
    } catch (err) {
        res.status(404).json({ success: false, err:"Please authenticate with valid user" });
    }
})

// update the expense 
ExpenseRoute.put("/:budget/:expenseId",hasAuth,async(req,res)=>{
    try {
    const {id} = req.user;
    const budgetName= req.params.budget;
    const expenseId = req.params.expenseId;
    const {name,description,amount} = req.body;

    const newExpenses = {
        name,description,amount,recordedBy:id,budgetName
    };

    let budget = await Budget.findById({_id:budgetName});
    if(budget.recordedBy.valueOf() !== id ){
        res.status(404).json({ success: false, err:"Please authenticate with valid user" });
    }else{
        const expense = await Expense.findByIdAndUpdate({_id:expenseId},{$set:newExpenses},{new:true});
        res.status(203).json({success:true,expense});
    }
    } catch (err) {
        res.status(404).json({ success: false, err:"Expense is not present" });
    }
})

// delete specific expense
ExpenseRoute.delete("/:budget/:expenseId",hasAuth,async(req,res)=>{
    try {
    const {id} = req.user;
    const budgetName= req.params.budget;
    const expenseId = req.params.expenseId;

    let budget = await Budget.findById({_id:budgetName});
    if(budget.recordedBy.valueOf() !== id ){
        res.status(404).json({ success: false, err:"Please authenticate with valid user" });
    }else{
        const expense = await Expense.findByIdAndDelete({_id:expenseId},{new:true});
        res.status(203).json({success:true,expense});
    }
    } catch (err) {
        res.status(404).json({ success: false, err:"Expense is not present" });
    }
})


module.exports = ExpenseRoute;