const { DataTypes } = require('sequelize');
import {sequelize} from './sequelize';

export const RolePermissions = sequelize.define('RolePermissions', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    },
    {
        tableName: 'role_permissions'
    }
);