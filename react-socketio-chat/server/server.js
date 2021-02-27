const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const bodyParser = require("body-parser");
const cors = require('cors');
const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require('./users');

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3001;
const io = socketIO(server);
const router = require('./routes');

app.use(bodyParser.json());
app.use(cors());
app.use(router);

io.on("connection", (socket) => {
  console.log("소켓 접속 완료");

  socket.on('join', ({ name, room }, cb) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return cb(error);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${room}` });
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined` });

    socket.join(user.room);

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    cb();
  });

  socket.on('sendMessage', (message, cb) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });
    io.to(user.room).emit('roomData', { user: user.name, users: getUsersInRoom(user.room) });

    cb();
  });

  socket.on('disconnect', () => {
    console.log('소켓 서버 종료');
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left` });
    }
  });
});

server.listen(PORT, () => {
  console.log(`Express App on port ${PORT}!`);
});