import {User} from './../Models/User';

class UserRepository {
    
    public returnUserByUsername(_username: string) {
        return User.findOne({ where: {username: _username} });
    }

    public createUser(_username: string, _pass: string) {
        return User.create({ username: _username, password: _pass });
    }
}


export const userRepository = new UserRepository();