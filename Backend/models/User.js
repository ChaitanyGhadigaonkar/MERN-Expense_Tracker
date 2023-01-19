const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: 'Name is required'
    },
    email:{
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Please enter a valid email");
            }
        },
        required:true,
        index:true,
        unique:true
    },
    password:{
        type : String,
        minLength: 8,
        required:"password is too small"
    },
    createAt:{
        type:Date,
        default: Date.now
    }
}); 

const User = mongoose.model("User",userSchema);

module.exports = User;