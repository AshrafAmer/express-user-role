// import all required packages
require('dotenv').config();
import express from "express";
import db from "./src/Models";
import apiRoutes from "./src/routes/api";
import middleWare from "./src/middlewares";

const server = express();
const cors = require("cors");

db.authenticate();
db.sync();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
middleWare(server);
server.use(apiRoutes);

// up our app server
server.listen(3000, () => {
    console.log("Server started Successfully...");
});

server.use((req, res) => {
    res.status(404).json({ success: false, error: 'Invalid Request'});
});