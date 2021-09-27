import {User} from './../Models/User';

export class UserRepository {
    
    static returnUserByUsername(_username: string) {
        return User.findOne({ where: {username: _username} });
    }

    static createUser(_username: string, _pass: string) {
        return User.create({ username: _username, password: _pass });
    }
}