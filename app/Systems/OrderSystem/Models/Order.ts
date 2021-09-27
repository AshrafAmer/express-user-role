const { DataTypes } = require('sequelize');
import {sequelize} from './../../../models/sequelize';
import {User} from './../../UserSystem/Models/User';
import {Payment} from './../../PaymentSystem/Models/Payment';
import {Service} from './../../ServiceSystem/Models/Service';

const Order = sequelize.define('Order', 
    {
        status: {
            type: DataTypes.STRING(20),
            allowNull: false,
            defaultValue: process.env.ORDER_STATUS_INIT
        },
        status_note: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'orders'
    }
);

Order.belongsTo(User);
Order.belongsTo(Service);
Order.belongsTo(Payment);

export {Order};
