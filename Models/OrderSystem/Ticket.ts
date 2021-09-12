module.exports = (sequelize: any, DataTypes: any) => {
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

    Ticket.belongsTo(sequelize.User);
    Ticket.belongsTo(sequelize.Order);
    Ticket.belongsTo(sequelize.Merchant);
  
    return Ticket;
};
