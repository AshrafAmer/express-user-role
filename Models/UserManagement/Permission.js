"use strict";
module.exports = function (sequelize, DataTypes) {
    var Permission = sequelize.define('Permission', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'permissions'
    });
    //RelationShips
    Permission.belongsToMany(sequelize.Role, { through: 'role_permissions' }); // permissions BelongsToMany roles through the junction table role_permissions
    return Permission;
};
