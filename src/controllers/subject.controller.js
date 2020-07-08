const {errors, httpStatusCodes} = require('../constants');
const ErrorsHandler = require('../errors/ErrorsHandler');
const {subjectService} = require('../db/services');

const {createSubject, deleteSubject, getAllSubjects, getSubjectById, updateSubjectById} = subjectService;
const {SUBJECT_NOT_FOUND, SUBJECT_NOT_FOUND_TO_DELETE, SUBJECT_NOT_FOUND_TO_UPDATE} = errors;
const {CREATED, NOT_FOUND, OK} = httpStatusCodes;

module.exports = {
    createSubject: async (req, res, next) => {
        try {
            const subjectToCreate = req.body;

            await createSubject(subjectToCreate);

            res.sendStatus(CREATED);
        }
        catch (e) {
            return next(new ErrorsHandler(e));
        }
    },

    deleteSubject: async (req, res, next) => {
        try {
            const {id} = req.params;

            const isDeleted = await deleteSubject(+id);

            if (!isDeleted) {
                return next(new ErrorsHandler(
                    SUBJECT_NOT_FOUND_TO_DELETE.message(id),
                    NOT_FOUND,
                    SUBJECT_NOT_FOUND_TO_DELETE.code
                ));
            }

            res.sendStatus(OK);
        }
        catch (e) {
            return next(new ErrorsHandler(e));
        }
    },

    getAllSubjects: async (req, res) => {
        const allSubjects = await getAllSubjects();

        res.json(allSubjects);
    },

    getSubjectById: async (req, res, next) => {
        const {id} = req.params;

        const subjectInfo = await getSubjectById(+id);

        if (!subjectInfo.length) {
            return next(new ErrorsHandler(
                SUBJECT_NOT_FOUND.message(id),
                NOT_FOUND,
                SUBJECT_NOT_FOUND.code
            ));
        }

        res.json(subjectInfo);
    },

    updateSubjectById: async (req, res, next) => {
        const {id} = req.params;
        const newParams = req.body;

        const isUpdated = await updateSubjectById(id, newParams);

        if (!isUpdated) {
            return next(new ErrorsHandler(
                SUBJECT_NOT_FOUND_TO_UPDATE.message(id),
                NOT_FOUND,
                SUBJECT_NOT_FOUND_TO_UPDATE.code));
        }

        res.sendStatus(OK);
    }
};
