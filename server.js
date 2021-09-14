"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import all required packages
require('dotenv').config();
var express_1 = __importDefault(require("express"));
var models_1 = __importDefault(require("./models"));
var middleWares_1 = __importDefault(require("./routes/middleWares"));
var api_1 = __importDefault(require("./routes/api"));
var server = (0, express_1.default)();
(0, models_1.default)();
(0, middleWares_1.default)(server, express_1.default);
(0, api_1.default)(server);
// up our app server
server.listen(3000, function () {
    console.log("Server started Successfully...");
});
