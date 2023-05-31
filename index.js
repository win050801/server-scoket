const express = require("express");
const cors = require("cors");
const app = express();
const socket = require("socket.io");
require("dotenv").config();

const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);
const io = socket(server, {
  cors: {
    origin: "*",
    credentials: false,
  },
});


io.on("connection", (socket) => {
  // console.log(socket);
  socket.on("send", (data) => {
    io.emit("send-ok","ok")
    console.log(data);
  });
});
