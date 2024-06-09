import { Server } from "socket.io";
import http from 'http';
import express from 'express';
import cors from 'cors';

const app = express();
const server = http.createServer(app);

app.use(cors())
const io = new Server(server, {
    cors: {
        origin: ["http://127.0.0.1:3000"],

        methods: ["GET", "POST"]
    }
});

const userSocketMap = {};

io.on('connection', (socket) => { 
    
    console.log("A user connected", socket.id);
    
    const userId = socket.handshake.query.userId;
    
    if (userId !== "undefined") {
        userSocketMap[userId] = socket.id;
    }
    

    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    
    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
        
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});
export const getReceiverSocketId = (receiverId) =>{
    return userSocketMap[receiverId];
}
 

export { app, io, server };
