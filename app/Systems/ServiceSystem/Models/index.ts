
export default (sequelize: any, DataTypes: any) => {
    sequelize.Service = require("./Service")(sequelize, DataTypes);
    sequelize.FeatureList = require("./FeatureList")(sequelize, DataTypes);

    sequelize.sync()
    .then(() => {
        console.log(`Service system database & tables created!`);
    });
};