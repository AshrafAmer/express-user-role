const { DataTypes } = require('sequelize');
import {sequelize} from './../../../models/sequelize';

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
        profile_id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            allowNull: true
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