
export default (sequelize: any, DataTypes: any) => {
    sequelize.User = require("./User")(sequelize, DataTypes);
    sequelize.Merchant = require("./Merchant")(sequelize, DataTypes);
    sequelize.Profile = require("./Profile")(sequelize, DataTypes);
    sequelize.Role = require("./Role")(sequelize, DataTypes);
    sequelize.Permission = require("./Permission")(sequelize, DataTypes);

    sequelize.sync({ force: true })
    .then(() => {
        console.log(`User system database & tables created!`);
    });
};