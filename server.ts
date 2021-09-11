// import all required packages
require('dotenv').config();
import express from "express";
import db from "./Models";

const server = express();

db();

server.get('/', (req, res)=>{
    res.send('worked');
});

// up our app server
server.listen(3000, () => {
    console.log("Server started Successfully...");
});