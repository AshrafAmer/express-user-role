// import all required packages
require('dotenv').config();
import express from "express";
import dbConnection from "./app/models";
import middleWare from "./app/routes/middleWares";
import apiRoutes from "./app/routes/api";

const server = express();

dbConnection();
middleWare(server, express);
apiRoutes(server);

// up our app server
server.listen(3000, () => {
    console.log("Server started Successfully...");
});