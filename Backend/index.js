import express from 'express';
import { Server } from 'socket.io';
import http from 'http'; 
import router from './routes/userRoutes.js';
import { addUser, removeUser, getUser, getUsersInRoom } from './users.js';


const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
   console.log("A user connected");

   socket.on("join", ({ name, room }, callback) => {
       const { error, user } = addUser({ id: socket.id, name, room });
       if(error) return console.log(error);

       socket.emit("message", {user: "admin", text: `${user.name}, welcome to the room ${user.room}`});
       socket.broadcast.to(user.room).emit("message", {user: "admin", text: `${user.name}, has joined the room`});

       socket.join(user.room);

       callback();
   })

   socket.on("sendMessage",(message,callback) => {
    const user = getUser(socket.id); 

    io.to(user.room).emit("message", {user: user.name, text: message});
    callback();
   })

   socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});

app.use(router);

server.listen(3000, () => {
    console.log("Server is running on 3000");
});