const mongoose = require('mongoose');

const budgetSchema = mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required'
    },
    MaxSpending: {
        type: Number,
        required:"max spending is required"
    },
    updatedAt:{
        type:Date,
        default: Date.now
    },
    recordedBy:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    }
});

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;