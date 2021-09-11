module.exports = (sequelize: any, DataTypes: any) => {
    const Role = sequelize.define('Role', 
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'roles'
        }
    );
  
    return Role;
};
