const {Router} = require("express")
const userRoute= Router()
const bcrypt = require('bcrypt');
const user= require("../models/userModel")

//SignUp
userRoute.post("/signup",(req,res)=>{
    const {email, password} = req.body
    bcrypt.hash(password, 6, async function(err, hash) {
        if(err){
            console.log("Something went wrong please try again")
        }
        else{
            const userdata = new user({
                email,
                password : hash,
                count_incorrect : 0, 
            })
            await userdata.save()
            res.send("Signup Successful")
        }
    });
})


//Login 
userRoute.post("/login",async(req,res)=>{
    const {email, password} = req.body;
    const validUser= await user.find({email, password})
    if(validUser.length < 1){
        return res.status(401).send({message:"Invalid Credentials"})
    }
    const hash=validUser.password
    const userId= validUser._id
   
    bcrypt.compare(password, hash, async function(err, res){
        if(res && (validUser.blockTill<6) && (validUser.time==0) ){
        validUser.blockTill=0
        await validUser.save()
        return res.send({"message":"login success",'validuser':validUser})
     }
     else if(validUser.blockTill >= 5){
        const tym= dataObj.getHours()
        validUser.time=tym
        await validUser.save()
         return validUser.send({"message":"you can try after 24 hours","time":tym})
     }
     else{
        validUser.blockTill++;
        await validUser.save()
         return res.send({"message": "login failed", "try": validUser.blockTill})
     }
    })
   return res.save(validUser)
})

module.exports= userRoute