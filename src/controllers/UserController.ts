import * as express from 'express';
import {userRepository} from '../repositories/UserRepository';
const Cryptr = require('cryptr');
const jwt = require("jsonwebtoken");
const jwtKey = process.env.JWT_KEY;
const crypt = new Cryptr(process.env.SECRET_KEY);


class UserController{
    private checkPassword(existPassword:string, comparedPassword:string){
        return existPassword == crypt.decrypt(comparedPassword);
    }

    private createJwtToken(_user: object){
        return jwt.sign({_user}, jwtKey, {algorithm: "HS256"});
    }

    public async login(req: express.Request, res: express.Response){

        if(!(req.body.username && req.body.password)){
            return res.status(500).json({success: false, error: 'username and password are required'});
        }

        try{
            let username = req.body.username.trim();
            let user = await userRepository.returnByUsername(username);
            if(!user){
                return res.status(500).json({success: false, error: 'username or password is not correct'});
            }

            user = user.get({ plain: true });
            let password = req.body.password.trim();
            if(!this.checkPassword(password, user.password)){
                return res.status(500).json({success: false, error: 'username or password is not correct'});
            }

            delete user.id;
            delete user.password;
            // generate jwt token to user
            user._token = await this.createJwtToken(user);
            return res.status(200).json({success: true, data: user});
        }
        catch(err){
            return res.status(500).json({success: false, error: err});
        }
    }

    public async register(req: express.Request, res: express.Response){
        if(!(req.body.username && req.body.password)){
            return res.status(500).json({success: false, error: 'username or password is missed'});
        }
            
        try{
            let username = req.body.username.trim();
            let user = await userRepository.returnByUsername(username);
    
            if(user){
                return res.status(401).json({success: false, error: 'This user has already exist'});
            }
    
            let password = crypt.encrypt(req.body.password.trim());
            user = await userRepository.create(username, password);
            user = user.get({ plain: true });
            delete user.id;
            delete user.password;
            user._token = await this.createJwtToken(user);

            // success => login and return with jwt token to complete its process [ex, profile after registered]
            return res.status(200).json({success: true, data: user});
        }
        catch(err){
            return res.status(500).json({success: false, error: err});
        }
    }
}


export default new UserController();