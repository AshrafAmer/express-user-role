const express = require("express");
const userRouters = express.Router();
import {User} from "./userSystem/User";

userRouters.get("/login", (req: any, res: any) => {
    let user = new User();
    res.json(user.login('', ''));
});

module.exports = userRouters;
