const express = require('express');
const BudgetRoute = express.Router();
const hasAuth = require("../middleware/AuthUser");
const Budget = require('../models/Budget');


// Get all budget of the user - authentication required 
BudgetRoute.get("/",hasAuth,async (req,res)=>{
    try {
        const {id} = req.user;
        const budget = await Budget.find({recordedBy:id});
        res.status(203).json({success:true,budget:budget});

    } catch (err) {
        res.status(404).json({ success: false, err:"Please authenticate with valid user" });
    }
});
// creating budget
BudgetRoute.post("/",hasAuth,async (req,res)=>{
    try {
        const {id} = req.user;
        const {name,MaxSpending} = req.body;
        const budget = new Budget({name,MaxSpending,recordedBy:id});
        const result = await budget.save();
        res.status(203).json({success:true,budget:result});
    } catch (err) {
        res.status(404).json({ success: false, err:"Please authenticate with valid user" });
    }
});

// updating a budget 
BudgetRoute.put("/:budgetId",hasAuth,async (req,res)=>{
    try {
        const _id = req.params.budgetId;
        const {id} = req.user;
        const {name,MaxSpending} = req.body;
        // checking the user is valid 
        let budget = await Budget.findById({_id});
        if(budget.recordedBy.valueOf() !== id ){
            res.status(404).json({ success: false, err:"Please authenticate with valid user" });
        }else{
            const newBudget = {name,MaxSpending,recordedBy:id};
            budget = await Budget.findByIdAndUpdate(_id,{$set:newBudget}, { new: true });
            res.status(203).json({success:true,budget});
        }
    } catch (err) {
        res.status(404).json({ success: false, err:"Please authenticate with valid user" });
    }
});
// Deleting a budget 
BudgetRoute.delete("/:budgetId",hasAuth,async (req,res)=>{
    try {
        const _id = req.params.budgetId;
        const {id} = req.user;
        // checking the user is valid 
        let budget = await Budget.findById({_id});
        if(budget.recordedBy.valueOf() !== id ){
            res.status(404).json({ success: false, err:"Please authenticate with valid user" });
        }else{
            budget = await Budget.findByIdAndDelete(_id,{ new: true });
            res.status(203).json({success:true,budget});
        }
    } catch (err) {
        res.status(404).json({ success: false, err:"Please authenticate with valid user" });
    }
});

module.exports = BudgetRoute;