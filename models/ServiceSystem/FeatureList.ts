module.exports = (sequelize: any, DataTypes: any) => {
    const FeatureList = sequelize.define('FeatureList', 
        {
            feature: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'featureLists'
        }
    );

    FeatureList.belongsToMany(sequelize.Service, { through: 'service_checkList' }); // features BelongsToMany services through the junction table service_checkList
  
    return FeatureList;
};
