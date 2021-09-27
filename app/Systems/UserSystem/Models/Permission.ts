const { DataTypes } = require('sequelize');
import {sequelize} from './../../../models/sequelize';
import {Role} from './Role';

const Permission = sequelize.define('Permission', 
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'permissions'
    }
);

//RelationShips
Permission.belongsToMany(Role, { through: 'role_permissions' }); // permissions BelongsToMany roles through the junction table role_permissions

export {Permission};