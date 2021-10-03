import {Role} from '../Models/Role';
import {Permission} from '../Models/Permission';

class RoleRepository {
    
    public findByName(_name: string) {
        return Role.findOne({ where: {name: _name} });
    }

    public permissions(_name: string) {
        return Role.findOne({ where: {name: _name}, include:[
                {
                    model: Permission,
                    as: "permissions"
                },
            ], 
        });
    }

    public create(_name: string) {
        return Role.create({ name: _name });
    }

    public remove(_name: string) {
        return Role.destroy({ where: {name: _name} });
    }

    public rename(old_name: string, new_name: string) {
        return Role.update(
            { name: new_name },
            { where: { name: old_name }}
          );
    }
}


export const roleRepository = new RoleRepository();