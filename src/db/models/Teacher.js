const {TEACHER_MODEL, TEACHERS_TABLE} = require('../../config');

module.exports = (sequelize, DataTypes) => {
    const Teacher = sequelize.define(TEACHER_MODEL, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subject_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        salary: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        tableName: TEACHERS_TABLE,
        timestamps: false,
    });

    const Subject = (require('./Subject'))(sequelize, DataTypes);

    Teacher.belongsTo(Subject, {foreignKey: 'subject_id', as: 'subject'});

    return Teacher;
};
