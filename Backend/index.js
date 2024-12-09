import express from 'express';
import { Server } from 'socket.io';
import http from 'http'; 
import router from './routes/userRoutes.js';


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

   socket.on("join", ({ username, room }) => {
       
   })

   socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});

app.use(router);

server.listen(3000, () => {
    console.log("Server is running on 3000");
});