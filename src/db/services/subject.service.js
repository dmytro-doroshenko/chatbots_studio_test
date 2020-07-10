const db = require('../').getInstance();
const {SUBJECT_MODEL} = require('../../config');

module.exports = {
    createSubject: (subjectToCreate) => {
        const SubjectModel = db.getModel(SUBJECT_MODEL);

        return SubjectModel.create(subjectToCreate);
    },

    deleteSubject: (id) => {
        const SubjectModel = db.getModel(SUBJECT_MODEL);

        return SubjectModel.destroy({
            where: {id}
        });
    },

    getAllSubjects: () => {
        const SubjectModel = db.getModel(SUBJECT_MODEL);

        return SubjectModel.findAll({});
    },

    getSubjectById: (id) => {
        const SubjectModel = db.getModel(SUBJECT_MODEL);

        return SubjectModel.findAll({
            where: {id}
        });
    },

    updateSubjectById: async (id, newParams) => {
        const SubjectModel = db.getModel(SUBJECT_MODEL);

        const [status] = await SubjectModel.update(
            newParams,
            {where: {id}}
        );

        return status;
    },
};
