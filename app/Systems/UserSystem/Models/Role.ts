const { DataTypes } = require('sequelize');
import {sequelize} from './../../../models/sequelize';

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