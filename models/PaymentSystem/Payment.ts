module.exports = (sequelize: any, DataTypes: any) => {
    const Payment = sequelize.define('Payment', 
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
  
    return Payment;
};
