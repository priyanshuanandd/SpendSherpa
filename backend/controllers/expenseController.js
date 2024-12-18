const User = require("../models/User");
//ADD
const addExpenses = async (req,res) =>{
    const dataReceived = req.body;
    const _id = req.user.userId;
    console.log(dataReceived,_id);
    try{
        const UserData = await User.findByIdAndUpdate(_id,{
            $push : {expenses:req.body}
        },
        {new : true} // for returning updated docs
    );
    return res.status(200).json({
        message : "Data sent and added",
        success : true,
        data : UserData.expenses
    });
    }
    catch(err){
        return res.status(500).send("Expense Controller Error")
    }
}
//FETCH
const fetchExpenses = async (req,res) =>{
    const _id = req.user.userId;
   
    console.log(_id);
    try{
         const data = await User.findById(_id);
    ;
    return res.status(200).json({
        message : "Data received",
        success : true,
        data : data.expenses
    });
    }
    catch(err){
        return res.status(500).send("Expense Fetch Controller Error")
    }
}
//DELETE
const deleteExpenses = async (req,res) =>{
    const Mainid = req.user.userId;
    const {expenseId}= req.params;
    console.log(Mainid,expenseId);
    try{
        const UserData = await User.findByIdAndUpdate(Mainid,{
            $pull : {expenses:{_id :expenseId}}
        },
        {new : true} // for returning updated docs
    );
    return res.status(200).json({
        message : "Data deleted successfully",
        success : true,
        data : UserData.expenses
    });
    }
    catch(err){
        return res.status(500).send("Delete Expense Controller Error")
    }
}

module.exports= {
    addExpenses,
    fetchExpenses,
    deleteExpenses
}
