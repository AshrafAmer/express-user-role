const { DataTypes } = require('sequelize');
import {sequelize} from './../../../models/sequelize';
import {Service} from './Service';


const FeatureList = sequelize.define('FeatureList', 
    {
        feature: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'featureLists'
    }
);

FeatureList.belongsToMany(Service, { through: 'service_checkList' }); // features BelongsToMany services through the junction table service_checkList

export {FeatureList};
