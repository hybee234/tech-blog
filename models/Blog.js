const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Brand extends Model {}

Brand.init(
    {        
        brand_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true      
        },
        brand_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        active_ind: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'brand',
    }
);

module.exports = Brand;