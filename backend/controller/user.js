const {Router} = require("express")
const userRoute= Router()
const User= require("../models/userModel")

//SignUp
userRoute.post("/signup",async(req,res)=>{
    const user=await new User(req.body)
    user.save((err,success)=>{
        if(err){
            return res.status(500).send({message:"Error occured"})
        }
        return res.status(201).send({message:"signup successful", user:success._doc})
    })
})


//Login 
userRoute.post("/login",async(req,res)=>{
    const {email, password} = req.body;
    const validUser= await User.find({email,password})
    if(validUser.length < 1){
        return res.status(401).send({message:"Invalid Credentials"})
    }
    return res.send(validUser)
    // const hash=validUser.password
    // const userId= validUser._id
   
    // bcrypt.compare(password, hash, async function(err, res){
    //     if(res && (validUser.blockTill<6) && (validUser.time==0) ){
    //     validUser.blockTill=0
    //     await validUser.save()
    //     return res.send({"message":"login success",'validuser':validUser})
    //  }
    //  else if(validUser.blockTill >= 5){
    //     const tym= dataObj.getHours()
    //     validUser.time=tym
    //     await validUser.save()
    //      return validUser.send({"message":"you can try after 24 hours","time":tym})
    //  }
    //  else{
    //     validUser.blockTill++;
    //     await validUser.save()
    //      return res.send({"message": "login failed", "try": validUser.blockTill})
    //  }
    //})
})

module.exports= userRoute