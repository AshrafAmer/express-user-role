import {User} from './../Models/User';

class UserRepository {
    
    public findById(_id: number) {
        return User.findOne({ where: {id: _id} });
    }

    public returnByUsername(_username: string) {
        return User.findOne({ where: {username: _username} });
    }

    public create(_username: string, _pass: string) {
        return User.create({ username: _username, password: _pass });
    }

    public update(_name: string, _user: Object) {
        return User.update(
            _user,
            { where: { name: _name }}
          );
    }

    public remove(_name: string) {
        return User.destroy({ where: {name: _name} });
    }
}


export const userRepository = new UserRepository();