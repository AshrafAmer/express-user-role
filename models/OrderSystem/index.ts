
export default (sequelize: any, DataTypes: any) => {
    sequelize.Order = require("./Order")(sequelize, DataTypes);
    sequelize.Ticket = require("./Ticket")(sequelize, DataTypes);

    sequelize.sync({ force: true })
    .then(() => {
        console.log(`Order system database & tables created!`);
    });
};