
const { DataTypes } = require('sequelize');
import {sequelize} from './sequelize';

export const Permission = sequelize.define('Permission', 
    {
        permission: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'permissions'
    }
);