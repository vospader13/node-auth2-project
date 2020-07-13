const express = require('express');

const loginRouter = require("./auth-routers/auth-login-router")
const registerRouter = require("./auth-routers/auth-register-router")
const logoutRouter = require("./auth-routers/auth-logout-router")
const usersRouter = require("./routers/users-router")
const cookieParser = require("cookie-parser")

const server = express();

server.use(express.json());
server.use(cookieParser())
server.use('/api/auth-users', loginRouter, registerRouter, logoutRouter);
server.use('/api/users', usersRouter);


server.use("/", (req, res) => {
    res.json("API is running, welcome!!")
})

module.exports = server;