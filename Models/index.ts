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

    sequelize.User = require("./UserManagement/User")(sequelize, DataTypes);
    sequelize.Profile = require("./UserManagement/Profile")(sequelize, DataTypes);
    sequelize.Role = require("./UserManagement/Role")(sequelize, DataTypes);
    sequelize.Permission = require("./UserManagement/Permission")(sequelize, DataTypes);

    sequelize.sync({ force: true })
    .then(() => {
        console.log(`Database & tables created!`);
    });
}