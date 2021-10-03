const { DataTypes } = require('sequelize');
import {sequelize} from './sequelize';
import {User} from './User';
import {Permission} from './Permission';
import {RolePermissions} from './RolePermissions';

export const Role = sequelize.define('Role', 
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'roles'
    }
);

Role.hasOne(User);
// permissions BelongsToMany roles through the junction table role_permissions
Role.belongsToMany(Permission, { through: {model : RolePermissions}, as: "permissions" });