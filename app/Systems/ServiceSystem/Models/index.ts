
export default (sequelize: any) => {
    sequelize.Service = require("./Service");
    sequelize.FeatureList = require("./FeatureList");

    sequelize.sync()
    .then(() => {
        console.log(`Service system database & tables created!`);
    });
};