const {LESSON_MODEL, LESSONS_TABLE} = require('../../config');

module.exports = (sequelize, DataTypes) => {
    const Lesson = sequelize.define(LESSON_MODEL, {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        subject_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        teacher_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        class_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        room: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_at: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        end_at: {
            type: DataTypes.TIME,
            allowNull: false,
        },
    }, {
        tableName: LESSONS_TABLE,
        timestamps: false,
    });

    const Class = (require('./Class'))(sequelize, DataTypes);
    const Subject = (require('./Subject'))(sequelize, DataTypes);
    const Teacher = (require('./Teacher'))(sequelize, DataTypes);

    Lesson.belongsTo(Class, {foreignKey: 'class_id', as: 'class'});
    Lesson.belongsTo(Subject, {foreignKey: 'subject_id', as: 'subject'});
    Lesson.belongsTo(Teacher, {foreignKey: 'teacher_id', as: 'teacher'});

    return Lesson;
};
