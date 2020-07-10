const db = require('../').getInstance();
const {SUBJECT_MODEL, TEACHER_MODEL} = require('../../config');

module.exports = {
    createTeacher: (teacherToCreate) => {
        const TeacherModel = db.getModel(TEACHER_MODEL);

        return TeacherModel.create(teacherToCreate);
    },

    deleteTeacher: (id) => {
        const TeacherModel = db.getModel(TEACHER_MODEL);

        return TeacherModel.destroy({
            where: {id}
        });
    },

    getAllTeachers: () => {
        const TeacherModel = db.getModel(TEACHER_MODEL);
        const SubjectModel = db.getModel(SUBJECT_MODEL);

        return TeacherModel.findAll({
            attributes: {exclude: ['subject_id']},
            include: [{
                model: SubjectModel,
                as: 'subject',
                required: true,
            }],
            nest: true,
            raw: true
        });
    },

    getTeacherById: (id) => {
        const TeacherModel = db.getModel(TEACHER_MODEL);
        const SubjectModel = db.getModel(SUBJECT_MODEL);

        return TeacherModel.findAll({
            where: {id},
            attributes: {exclude: ['subject_id']},
            include: [{
                model: SubjectModel,
                as: 'subject',
                required: true,
            }],
            nest: true,
            raw: true
        });
    },

    updateTeacherById: async (id, newParams) => {
        const TeacherModel = db.getModel(TEACHER_MODEL);

        const [status] = await TeacherModel.update(
            newParams,
            {where: {id}}
        );

        return status;
    },
};
