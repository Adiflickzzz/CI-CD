import express from "express"
import { Client } from "@repo/db/client"

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.json({
        message:"Hi from express"
    })
})

app.post("/signup",async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const user  = await Client.user.create({
        data:{
            username:username,
            password:password
        }
    })

    res.json({
        message:"User created",
        id:user.id
    })

})

app.listen(3001,()=>{
    console.log("The express server is running on the port : 3001")
})