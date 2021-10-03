import {rolePermissionRepository} from '../repositories/RolePermissionRepository';
import {userRepository} from '../repositories/UserRepository';
import {permissionRepository} from '../repositories/PermissionRepository';


class Controller{

    protected async has_permission(userId: number, permission: string){
        if(!(userId && permission)){
            return false;
        }

        try{

            let user = await userRepository.findById(userId);
            user = user.get({ plain: true });

            let permissionRole = await permissionRepository.findByName(permission);
            permissionRole = permissionRole.get({ plain: true });

            let hasPermission = await rolePermissionRepository.findByUserIdAndRoleId(user.RoleId, permissionRole.id);
            if(!hasPermission) return false;

            return true;
        }catch(err: any){
            return false;
        }
    }
}


export default Controller;