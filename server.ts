// import all required packages
require('dotenv').config();
import express from "express";
import dbConnection from "./models";
import middleWare from "./routes/middleWares";
import apiRoutes from "./routes/api";

const server = express();

dbConnection();
middleWare(server, express);
apiRoutes(server);

// up our app server
server.listen(3000, () => {
    console.log("Server started Successfully...");
});