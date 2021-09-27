const { DataTypes } = require('sequelize');
import {sequelize} from './../../../models/sequelize';
import {Payment} from './Payment';


const PaymentAttribute = sequelize.define('PaymentAttribute', 
    {
        key: {
            type: DataTypes.STRING,
            allowNull: false
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'payment_attributes'
    }
);

PaymentAttribute.belongsTo(Payment);

export {PaymentAttribute};