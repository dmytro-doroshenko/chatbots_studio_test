const {errors, httpStatusCodes} = require('../constants');
const ErrorsHandler = require('../errors/ErrorsHandler');
const {lessonService} = require('../db/services');

const {createLesson, deleteLesson, getAllLessons, getLessonById, updateLessonById} = lessonService;
const {LESSON_NOT_FOUND, LESSON_NOT_FOUND_TO_DELETE, LESSON_NOT_FOUND_TO_UPDATE} = errors;
const {CREATED, NOT_FOUND, OK} = httpStatusCodes;

module.exports = {
    createLesson: async (req, res, next) => {
        try {
            const lessonToCreate = req.body;

            await createLesson(lessonToCreate);

            res.sendStatus(CREATED);
        }
        catch (e) {
            return next(new ErrorsHandler(e));
        }
    },

    deleteLesson: async (req, res, next) => {
        try {
            const {id} = req.params;

            const isDeleted = await deleteLesson(+id);

            if (!isDeleted) {
                return next(new ErrorsHandler(
                    LESSON_NOT_FOUND_TO_DELETE.message(id),
                    NOT_FOUND,
                    LESSON_NOT_FOUND_TO_DELETE.code
                ));
            }

            res.sendStatus(OK);
        }
        catch (e) {
            return next(new ErrorsHandler(e));
        }
    },

    getAllLessons: async (req, res) => {
        const allLessons = await getAllLessons();

        res.json(allLessons);
    },

    getLessonById: async (req, res, next) => {
        const {id} = req.params;

        const lessonInfo = await getLessonById(+id);

        if (!lessonInfo.length) {
            return next(new ErrorsHandler(
                LESSON_NOT_FOUND.message(id),
                NOT_FOUND,
                LESSON_NOT_FOUND.code
            ));
        }

        res.json(lessonInfo);
    },

    updateLessonById: async (req, res, next) => {
        const {id} = req.params;
        const newParams = req.body;

        const isUpdated = await updateLessonById(id, newParams);

        if (!isUpdated) {
            return next(new ErrorsHandler(
                LESSON_NOT_FOUND_TO_UPDATE.message(id),
                NOT_FOUND,
                LESSON_NOT_FOUND_TO_UPDATE.code));
        }

        res.sendStatus(OK);
    }
};
