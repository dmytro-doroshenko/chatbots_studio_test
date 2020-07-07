const {CLASS_MODEL, CLASSES_TABLE} = require('../../config');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(CLASS_MODEL, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: CLASSES_TABLE,
        timestamps: false,
    });
};
