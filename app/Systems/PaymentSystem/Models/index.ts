
export default (sequelize: any) => {
    sequelize.Payment = require("./Payment");
    sequelize.PaymentAttribute = require("./PaymentAttribute");

    sequelize.sync()
    .then(() => {
        console.log(`Payment system database & tables created!`);
    });
};