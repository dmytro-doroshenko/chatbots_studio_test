const {errors, httpStatusCodes} = require('../constants');
const ErrorsHandler = require('../errors/ErrorsHandler');
const {teacherService} = require('../db/services');

const {createTeacher, deleteTeacher, getAllTeachers, getTeacherById, updateTeacherById} = teacherService;
const {TEACHER_NOT_FOUND, TEACHER_NOT_FOUND_TO_DELETE, TEACHER_NOT_FOUND_TO_UPDATE} = errors;
const {CREATED, NOT_FOUND, OK} = httpStatusCodes;

module.exports = {
    createTeacher: async (req, res, next) => {
        try {
            const teacherToCreate = req.body;

            await createTeacher(teacherToCreate);

            res.sendStatus(CREATED);
        }
        catch (e) {
            return next(new ErrorsHandler(e));
        }
    },

    deleteTeacher: async (req, res, next) => {
        try {
            const {id} = req.params;

            const isDeleted = await deleteTeacher(+id);

            if (!isDeleted) {
                return next(new ErrorsHandler(
                    TEACHER_NOT_FOUND_TO_DELETE.message(id),
                    NOT_FOUND,
                    TEACHER_NOT_FOUND_TO_DELETE.code
                ));
            }

            res.sendStatus(OK);
        }
        catch (e) {
            return next(new ErrorsHandler(e));
        }
    },

    getAllTeachers: async (req, res) => {
        const allTeachers = await getAllTeachers();

        res.json(allTeachers);
    },

    getTeacherById: async (req, res, next) => {
        const {id} = req.params;

        const teacherInfo = await getTeacherById(+id);

        if (!teacherInfo.length) {
            return next(new ErrorsHandler(
                TEACHER_NOT_FOUND.message(id),
                NOT_FOUND,
                TEACHER_NOT_FOUND.code
            ));
        }

        res.json(teacherInfo);
    },

    updateTeacherById: async (req, res, next) => {
        const {id} = req.params;
        const newParams = req.body;

        const isUpdated = await updateTeacherById(id, newParams);

        if (!isUpdated) {
            return next(new ErrorsHandler(
                TEACHER_NOT_FOUND_TO_UPDATE.message(id),
                NOT_FOUND,
                TEACHER_NOT_FOUND_TO_UPDATE.code));
        }

        res.sendStatus(OK);
    }
};
