import runUserSystemQueries from "../Systems/UserSystem/Models";
import runServiceSystemQueries from "../Systems/ServiceSystem/Models";
import runPaymentSystemQueries from "../Systems/PaymentSystem/Models";
import runOrderSystemQueries from "../Systems/OrderSystem/Models";

const { Sequelize, DataTypes } = require('sequelize');


export default async() => {

    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    });

    try {
        await sequelize.authenticate();
        console.log('DB connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    runUserSystemQueries(sequelize, DataTypes);
    runServiceSystemQueries(sequelize, DataTypes);
    runPaymentSystemQueries(sequelize, DataTypes);
    runOrderSystemQueries(sequelize, DataTypes);
}