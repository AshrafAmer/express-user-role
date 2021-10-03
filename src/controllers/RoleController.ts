import * as express from 'express';
import {userRepository} from '../repositories/UserRepository';


class RoleController{

    public async createUserRole(req: express.Request, res: express.Response){
        if(!(req.body.username && req.body.role_id)){
            return res.status(500).json({success: false, message: 'missed user or role'});
        }

        try{
            let username = req.body.username.trim();
            let user = await userRepository.update(username, {RoleId: req.body.role_id});
            user = user.get({ plain: true });
            return res.status(200).json({success: true, data: user});
        }catch(err: any){
            return res.status(500).json({success: false, error: 'username or role is not correct'});
        }
        
    }
}


export default new RoleController();