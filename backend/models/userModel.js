const mongoose = require('mongoose')

const userSchema= mongoose.Schema({
    email:String,
    password:String,
    blockTill:Number,
    time:Number
})

const userModel = mongoose.model("users",userSchema)
module.exports=userModel