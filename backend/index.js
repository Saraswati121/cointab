const express= require('express')
const connections= require('./config/db')
const app= express()
const cors= require('cors')
const userRoute= require('./controller/user')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use('/auth',userRoute)

app.get('/',(req,res)=>{
    res.send("hello world!")
})
app.use('/auth',userRoute)

const port = process.env.PORT || 8080;

app.listen(port,async()=>{
    await connections;
    console.log("server listening on port 8080")
})