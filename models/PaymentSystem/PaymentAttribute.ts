module.exports = (sequelize: any, DataTypes: any) => {
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

    PaymentAttribute.belongsTo(sequelize.Payment);
  
    return PaymentAttribute;
};
