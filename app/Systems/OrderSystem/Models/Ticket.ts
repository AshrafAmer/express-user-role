import {User} from './../../UserSystem/Models/User';
import {Merchant} from './../../UserSystem/Models/Merchant';
import {Order} from './Order';
const { DataTypes } = require('sequelize');
import {sequelize} from './../../../models/sequelize';

const Ticket = sequelize.define('Ticket', 
    {
        status: {
            type: DataTypes.STRING(20),
            allowNull: false,
            defaultValue: process.env.TICKET_STATUS_INIT
        },
        status_note: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'tickets'
    }
);

Ticket.belongsTo(User);
Ticket.belongsTo(Order);
Ticket.belongsTo(Merchant);

export {Ticket};
