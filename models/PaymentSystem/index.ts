
export default (sequelize: any, DataTypes: any) => {
    sequelize.Payment = require("./Payment")(sequelize, DataTypes);
    sequelize.PaymentAttribute = require("./PaymentAttribute")(sequelize, DataTypes);

    sequelize.sync({ force: true })
    .then(() => {
        console.log(`Payment system database & tables created!`);
    });
};