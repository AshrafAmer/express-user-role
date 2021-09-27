const { DataTypes } = require('sequelize');
import {sequelize} from './../../../models/sequelize';
import {User} from './User';

const Profile = sequelize.define('Profile', 
    {
        first_name: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(16),
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'profiles'
    }
);

Profile.hasOne(User);

export {Profile};
