const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require("socket.io")(server, {
    cors: { origin: "*" }
});

// Use the environment's port or default to 3000
const PORT = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log('A device connected:', socket.id);

    socket.on('signal', (data) => {
        console.log('Relaying signal...');
        socket.broadcast.emit('signal', data);
    });

    socket.on('disconnect', () => {
        console.log('Device disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});