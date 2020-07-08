const {classService} = require('../db/services');
const ErrorsHandler = require('../errors/ErrorsHandler');
const {errors, httpStatusCodes} = require('../constants');

const {createClass, deleteClass, getAllClasses, getClassById, updateClassById} = classService;
const {CLASS_NOT_FOUND, CLASS_NOT_FOUND_TO_DELETE, CLASS_NOT_FOUND_TO_UPDATE} = errors;
const {CREATED, NOT_FOUND, OK} = httpStatusCodes;

module.exports = {
    createClass: async (req, res, next) => {
        try {
            const classToCreate = req.body;

            await createClass(classToCreate);

            res.sendStatus(CREATED);
        }
        catch (e) {
            return next(new ErrorsHandler(e));
        }
    },

    deleteClass: async (req, res, next) => {
        try {
            const {id} = req.params;

            const isDeleted = await deleteClass(+id);

            if (!isDeleted) {
                return next(new ErrorsHandler(
                    CLASS_NOT_FOUND_TO_DELETE.message(id),
                    NOT_FOUND,
                    CLASS_NOT_FOUND_TO_DELETE.code
                ));
            }

            res.sendStatus(OK);
        }
        catch (e) {
            return next(new ErrorsHandler(e));
        }
    },

    getAllClasses: async (req, res) => {
        const allClasses = await getAllClasses();

        res.json(allClasses);
    },

    getClassById: async (req, res, next) => {
        const {id} = req.params;

        const classInfo = await getClassById(+id);

        if (!classInfo.length) {
            return next(new ErrorsHandler(
                CLASS_NOT_FOUND.message(id),
                NOT_FOUND,
                CLASS_NOT_FOUND.code
            ));
        }

        res.json(classInfo);
    },

    updateClassById: async (req, res, next) => {
        const {id} = req.params;
        const newParams = req.body;

        const isUpdated = await updateClassById(id, newParams);

        if (!isUpdated) {
            return next(new ErrorsHandler(
                CLASS_NOT_FOUND_TO_UPDATE.message(id),
                NOT_FOUND,
                CLASS_NOT_FOUND_TO_UPDATE.code));
        }

        res.sendStatus(OK);
    }
};
