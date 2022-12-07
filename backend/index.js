const express= require('express')
const connections= require('./config/db')
const app= express()
const cors= require('cors')
const userRoute= require('./routes/user')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use('/auth',userRoute)

app.get('/',(req,res)=>{
    res.send("hello world!")
})
app.use('/auth',userRoute)

app.listen(8080,async()=>{
    await connections;
    console.log("server listening on port 8080")
})