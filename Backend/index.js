const express = require('express');
const cors  = require('cors');
require('dotenv').config();

const UserRoute = require("./routes/auth");
const BudgetRoute = require("./routes/budget");
const ExpenseRoute = require("./routes/expense");

const app = express();
require("./db/db");

app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());



// routes 
app.use("/api/auth",UserRoute);
app.use("/api/budget",BudgetRoute);
app.use("/api",ExpenseRoute);

app.get("",(req,res)=>{
    res.send("Hello from Express");
})

const PORT =  process.env.PORT || 8080 ;
app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`);
});