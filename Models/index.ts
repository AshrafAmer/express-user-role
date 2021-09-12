import runUserSystemQueries from "./UserSystem";
import runServiceSystemQueries from "./ServiceSystem";
import runPaymentSystemQueries from "./PaymentSystem";
import runOrderSystemQueries from "./OrderSystem";

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