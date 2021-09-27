const express = require("express");
const userRouters = express.Router();
const Cryptr = require('cryptr');
const jwt = require("jsonwebtoken");
const jwtKey = process.env.JWT_KEY;
const crypt = new Cryptr(process.env.SECRET_KEY);
import {UserRepository} from './../Repository/UserRepository';


userRouters.post("/login", async(req: any, res: any) => {
    
    if(!(req.body.username && req.body.password)){
        res.status(500).json({success: false, error: 'username and password are required'});
        return
    }
    
    try{
        let username = req.body.username.trim();
        let user = await UserRepository.returnUserByUsername(username);
        if(!user){
            res.status(500).json({success: false, error: 'username or password is not correct'});
            return;
        }

        user = user.get({ plain: true });
        let password = req.body.password.trim();
        if(password !== crypt.decrypt(user.password)){
            res.status(500).json({success: false, error: 'username or password is not correct'});
            return;
        }
        
        delete user.id;
        delete user.password;
        user._token = await jwt.sign({user}, jwtKey, {algorithm: "HS256"});
        res.status(200).json({success: true, data: user});
    }
    catch(err){
        res.status(500).json({success: false, error: err});
    }
});

userRouters.post("/register", async(req: any, res: any) => {
    
    if(!(req.body.username && req.body.password)){
        res.status(500).json({success: false, error: 'username or password is missed'});
        return;
    }

    try{

        let username = req.body.username.trim();

        let user = await UserRepository.returnUserByUsername(username);

        if(user){
            res.status(401).json({success: false, error: 'This user has already exist'});
            return;
        }

        let password = crypt.encrypt(req.body.password.trim());
        user = await UserRepository.createUser(username, password);
        user = user.get({ plain: true });
        delete user.id;
        delete user.password;
        user._token = await jwt.sign({user}, jwtKey, {algorithm: "HS256"});

        res.status(200).json({success: true, data: user});
    }
    catch(err){
        res.status(500).json({success: false, error: err});
    }
});

export {userRouters};
