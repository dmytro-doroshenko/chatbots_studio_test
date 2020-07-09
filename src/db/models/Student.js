const {STUDENT_MODEL, STUDENTS_TABLE} = require('../../config');

module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define(STUDENT_MODEL, {
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
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        class_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        tableName: STUDENTS_TABLE,
        timestamps: false,
    });

    const Class = (require('./Class'))(sequelize, DataTypes);

    Student.belongsTo(Class, {foreignKey: 'class_id', as: 'class'});

    return Student;
};
