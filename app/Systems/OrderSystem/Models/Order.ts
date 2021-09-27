import {User} from './../../UserSystem/Models/User';

module.exports = (sequelize: any, DataTypes: any) => {
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
    Order.belongsTo(sequelize.Service);
    Order.belongsTo(sequelize.Payment);
  
    return Order;
};
