const {errors, httpStatusCodes} = require('../constants');
const ErrorsHandler = require('../errors/ErrorsHandler');
const {studentService} = require('../db/services');

const {createStudent, deleteStudent, getAllStudents, getStudentById, updateStudentById} = studentService;
const {STUDENT_NOT_FOUND, STUDENT_NOT_FOUND_TO_DELETE, STUDENT_NOT_FOUND_TO_UPDATE} = errors;
const {CREATED, NOT_FOUND, OK} = httpStatusCodes;

module.exports = {
    createStudent: async (req, res, next) => {
        try {
            const studentToCreate = req.body;

            await createStudent(studentToCreate);

            res.sendStatus(CREATED);
        }
        catch (e) {
            return next(new ErrorsHandler(e));
        }
    },

    deleteStudent: async (req, res, next) => {
        try {
            const {id} = req.params;

            const isDeleted = await deleteStudent(+id);

            if (!isDeleted) {
                return next(new ErrorsHandler(
                    STUDENT_NOT_FOUND_TO_DELETE.message(id),
                    NOT_FOUND,
                    STUDENT_NOT_FOUND_TO_DELETE.code
                ));
            }

            res.sendStatus(OK);
        }
        catch (e) {
            return next(new ErrorsHandler(e));
        }
    },

    getAllStudents: async (req, res) => {
        const allStudents = await getAllStudents();

        res.json(allStudents);
    },

    getStudentById: async (req, res, next) => {
        const {id} = req.params;

        const studentInfo = await getStudentById(+id);

        if (!studentInfo.length) {
            return next(new ErrorsHandler(
                STUDENT_NOT_FOUND.message(id),
                NOT_FOUND,
                STUDENT_NOT_FOUND.code
            ));
        }

        res.json(studentInfo);
    },

    updateStudentById: async (req, res, next) => {
        const {id} = req.params;
        const newParams = req.body;

        const isUpdated = await updateStudentById(id, newParams);

        if (!isUpdated) {
            return next(new ErrorsHandler(
                STUDENT_NOT_FOUND_TO_UPDATE.message(id),
                NOT_FOUND,
                STUDENT_NOT_FOUND_TO_UPDATE.code));
        }

        res.sendStatus(OK);
    }
};
