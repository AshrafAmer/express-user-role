"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import all required packages
require('dotenv').config();
var express_1 = __importDefault(require("express"));
var Models_1 = __importDefault(require("./Models"));
var server = (0, express_1.default)();
(0, Models_1.default)();
server.get('/', function (req, res) {
    res.send('worked');
});
// up our app server
server.listen(3000, function () {
    console.log("Server started Successfully...");
});
