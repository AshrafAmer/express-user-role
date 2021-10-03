import {RolePermissions} from './../Models/RolePermissions';

class RolePermissionRepository {

    public create(_roleId: number, _permissionId: number) {
        return RolePermissions.create({ RoleId: _roleId, PermissionId: _permissionId });
    }

    public remove(_id: number) {
        return RolePermissions.destroy({ where: {id: _id} });
    }

    public findByUserIdAndRoleId(_roleId: number, _permissionId: number) {
        return RolePermissions.find({ where: {RoleId: _roleId, PermissionId: _permissionId} });
    }
}


export const rolePermissionRepository = new RolePermissionRepository();