require("dotenv").config();

const express = require("express");
const http = require("http");

const configExpress = require("./config/express");
const routes = require("./routes");
const connectDB = require("./config/database");

const app = express();
const server = http.createServer(app);

connectDB();
configExpress(app);
routes(app);

module.exports = { app, server };
