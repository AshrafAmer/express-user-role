const { DataTypes } = require('sequelize');
import {sequelize} from './../../../models/sequelize';

export const Payment = sequelize.define('Payment', 
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        provider: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'payments'
    }
);
