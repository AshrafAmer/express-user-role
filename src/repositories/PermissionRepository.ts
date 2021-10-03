import {Permission} from '../Models/Permission';

class PermissionRepository {
    
    public findByName(_permission: string) {
        return Permission.findOne({ where: {permission: _permission} });
    }

    public findById(_id: number) {
        return Permission.findOne({ where: {id: _id} });
    }

    public create(_permission: string) {
        return Permission.create({ permission: _permission });
    }

    public remove(_permission: string) {
        return Permission.destroy({ where: {permission: _permission} });
    }

    public rename(old_permission: string, new_permission: string) {
        return Permission.update(
            { permission: old_permission },
            { where: { permission: new_permission }}
          );
    }
}


export const permissionRepository = new PermissionRepository();