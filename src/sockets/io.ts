import { Socket } from "socket.io"
import { io } from "../app"

export const handleSocketConnection = (client:Socket) =>{
    console.log(`[socket.io] New Connection ${client.id}`)
    client.on('disconnect', () =>{
        console.log("Bye bye client")
    })
    client.on("newVote", ()=>{
        console.log("[NEW VOTE] has occurred in the system")
        // go tell all other connected clients to re-render their data
        io.emit("newDataHasOccurred")
    })
}


