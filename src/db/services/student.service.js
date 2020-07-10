const db = require('../').getInstance();
const {CLASS_MODEL, STUDENT_MODEL} = require('../../config');

module.exports = {
    createStudent: (studentToCreate) => {
        const StudentModel = db.getModel(STUDENT_MODEL);

        return StudentModel.create(studentToCreate);
    },

    deleteStudent: (id) => {
        const StudentModel = db.getModel(STUDENT_MODEL);

        return StudentModel.destroy({
            where: {id}
        });
    },

    getAllStudents: () => {
        const StudentModel = db.getModel(STUDENT_MODEL);
        const ClassModel = db.getModel(CLASS_MODEL);

        return StudentModel.findAll({
            attributes: {exclude: ['class_id']},
            include: [{
                model: ClassModel,
                as: 'class',
                required: true,
            }],
            nest: true,
            raw: true
        });
    },

    getStudentById: (id) => {
        const StudentModel = db.getModel(STUDENT_MODEL);
        const ClassModel = db.getModel(CLASS_MODEL);

        return StudentModel.findAll({
            where: {id},
            attributes: {exclude: ['class_id']},
            include: [{
                model: ClassModel,
                as: 'class',
                required: true,
            }],
            nest: true,
            raw: true
        });
    },

    updateStudentById: async (id, newParams) => {
        const StudentModel = db.getModel(STUDENT_MODEL);

        const [status] = await StudentModel.update(
            newParams,
            {where: {id}}
        );

        return status;
    },
};
