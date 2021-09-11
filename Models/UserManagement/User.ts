module.exports = (sequelize: any, DataTypes: any) => {
    const User = sequelize.define('User', 
        {
            username: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            profile_id: {
                type: DataTypes.INTEGER(11).UNSIGNED,
                allowNull: false
            },
            status: {
                type: DataTypes.STRING(20),
                allowNull: false,
                defaultValue: 'registered'
            },
        },
        {
            tableName: 'users'
        }
    );
  
    return User;
};
