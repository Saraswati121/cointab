const {Router} = require("express")
const userRoute= Router()
const user= require("../models/userModel")

//Signed
userRoute.post("/signup",(req,res)=>{
    const User= new user(req.body)
    User.save((err,success)=>{
        if(err){
            return res.status(500).send({message:"Error occured"})
        }
        return res.status(201).send({message:"signup successful", User:success._doc})
    })
})


//Login 
userRoute.post("/login",async(req,res)=>{
    const {email, password} = req.body;
    const validUser= await user.find({email,password})
    if(validUser.length < 1){
        return res.status(401).send({message:"Invalid Credentials"})
    }
    return res.send(validUser)
})

module.exports= userRoute