const { DataTypes } = require('sequelize');
import {sequelize} from './../../../models/sequelize';
import {User} from './User';

const Merchant = sequelize.define('Merchant', 
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            allowNull: false,
            unique: true
        },
        status: {
            type: DataTypes.STRING(20),
            allowNull: false,
            defaultValue: process.env.USER_STATUS_REGISTERED
        },
    },
    {
        tableName: 'merchants'
    }
);


Merchant.belongsTo(User);

export {Merchant};