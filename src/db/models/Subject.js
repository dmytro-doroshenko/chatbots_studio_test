const {SUBJECT_MODEL, SUBJECTS_TABLE} = require('../../config');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(SUBJECT_MODEL, {
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
        tableName: SUBJECTS_TABLE,
        timestamps: false,
    });
};
