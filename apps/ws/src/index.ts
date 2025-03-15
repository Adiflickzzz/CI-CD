import { Client } from "@repo/db/client";
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080})

wss.on("connection", async function connection(ws){
    await Client.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString()
        }
    })
    ws.send("You are connected to the server")
})

console.log("The web socket server is running on port : 8080");