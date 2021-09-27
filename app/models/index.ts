import runUserSystemQueries from "../Systems/UserSystem/Models";
import runServiceSystemQueries from "../Systems/ServiceSystem/Models";
import runPaymentSystemQueries from "../Systems/PaymentSystem/Models";
import runOrderSystemQueries from "../Systems/OrderSystem/Models";

import {sequelize} from './sequelize';

export default async() => {

    try {
        await sequelize.authenticate();
        console.log('DB connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    runUserSystemQueries(sequelize);
    runServiceSystemQueries(sequelize);
    runPaymentSystemQueries(sequelize);
    runOrderSystemQueries(sequelize);
}
