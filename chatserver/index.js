const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

// const express = require("express");
// const http = require("http"); // Import http module
// const { Server } = require("socket.io");
// const cors = require("cors");

// const app = express();
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors());
// const PORT = 3000;

// // Create an HTTP server
// const server = http.createServer(app);

// // Create a new instance of socket.io, passing the server
// const io = new Server(server);

// io.on("connection", (socket) => {
//   console.log(`A user connected with ID: ${socket.id}`);
// })

// // Example route
// app.get("/api", (req, res) => {
//   res.json({ message: "API is working" });
// });

// // Start the server
// server.listen(PORT, () => {
//   console.log('server running at http://localhost:3000');
// });

// const express = require("express");
// const http = require("http");
// const socketIo = require("socket.io");

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//   },
// });

// // Handle socket connections
// io.on("connection", (socket) => {
//   console.log("New client connected");

//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//   });
// });
// app.get("/", (req, res) => {
//   res.send("Socket.IO server is running");
// });

// // Server listen on port 3000
// server.listen(3000, '0.0.0.0', () => {
//   console.log("Server is running on http://192.168.1.6:3000");
// });

