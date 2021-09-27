const { DataTypes } = require('sequelize');
import {sequelize} from './sequelize';

export const User = sequelize.define('User', 
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        status: {
            type: DataTypes.STRING(20),
            allowNull: false,
            defaultValue: process.env.USER_STATUS_REGISTERED
        },
    },
    {
        tableName: 'users'
    }
);