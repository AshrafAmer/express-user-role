module.exports = (sequelize: any, DataTypes: any) => {
    const Service = sequelize.define('Service', 
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            photo: {
                type: DataTypes.STRING
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            fees: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            rate: {
                type: DataTypes.INTEGER(11).UNSIGNED,
                defaultValue: 0
            },
            status: {
                type: DataTypes.STRING(20),
                allowNull: false,
                defaultValue: process.env.SERVICE_STATUS_INIT
            },
        },
        {
            tableName: 'services'
        }
    );
  
    return Service;
};
