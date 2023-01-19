const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desscription:{
        type:String
    },
    amount: {
        type: Number,
        required:true
    },
    updatedAt:{
        type:Date,
        default: Date.now
    },
    recordedBy:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    },
    budgetName:{
        type:mongoose.Schema.ObjectId,
        ref:'Budget'
    }
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;