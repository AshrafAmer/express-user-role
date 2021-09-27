
export default (sequelize: any) => {
    sequelize.User = require("./User");
    sequelize.Merchant = require("./Merchant");
    sequelize.Profile = require("./Profile");
    sequelize.Role = require("./Role");
    sequelize.Permission = require("./Permission");

    sequelize.sync()
    .then(() => {
        console.log(`User system database & tables created!`);
    });
};