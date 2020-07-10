const db = require('../').getInstance();
const {CLASS_MODEL, LESSON_MODEL, SUBJECT_MODEL, TEACHER_MODEL} = require('../../config');

module.exports = {
    createLesson: (lessonToCreate) => {
        const LessonModel = db.getModel(LESSON_MODEL);

        return LessonModel.create(lessonToCreate);
    },

    deleteLesson: (id) => {
        const LessonModel = db.getModel(LESSON_MODEL);

        return LessonModel.destroy({
            where: {id}
        });
    },

    getAllLessons: () => {
        const ClassModel = db.getModel(CLASS_MODEL);
        const LessonModel = db.getModel(LESSON_MODEL);
        const SubjectModel = db.getModel(SUBJECT_MODEL);
        const TeacherModel = db.getModel(TEACHER_MODEL);

        return LessonModel.findAll({
            attributes: {exclude: ['class_id', 'subject_id', 'teacher_id']},
            include: [
                {
                    model: ClassModel,
                    as: 'class',
                    required: true,
                },
                {
                    model: SubjectModel,
                    as: 'subject',
                    required: true,
                },
                {
                    model: TeacherModel,
                    as: 'teacher',
                    required: true,
                    attributes: {exclude: ['salary']}
                }
            ],
            nest: true,
            raw: true
        });
    },

    getLessonById: (id) => {
        const ClassModel = db.getModel(CLASS_MODEL);
        const LessonModel = db.getModel(LESSON_MODEL);
        const SubjectModel = db.getModel(SUBJECT_MODEL);
        const TeacherModel = db.getModel(TEACHER_MODEL);

        return LessonModel.findAll({
            where: {id},
            attributes: {exclude: ['class_id', 'subject_id', 'teacher_id']},
            include: [
                {
                    model: ClassModel,
                    as: 'class',
                    required: true,
                },
                {
                    model: SubjectModel,
                    as: 'subject',
                    required: true,
                },
                {
                    model: TeacherModel,
                    as: 'teacher',
                    required: true,
                    attributes: {exclude: ['salary']}
                }
            ],
            nest: true,
            raw: true
        });
    },

    updateLessonById: async (id, newParams) => {
        const LessonModel = db.getModel(LESSON_MODEL);

        const [status] = await LessonModel.update(
            newParams,
            {where: {id}}
        );

        return status;
    },
};
