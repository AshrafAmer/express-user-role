
export default (sequelize: any) => {
    sequelize.Order = require("./Order");
    sequelize.Ticket = require("./Ticket");

    sequelize.sync()
    .then(() => {
        console.log(`Order system database & tables created!`);
    });
};