const {Router} = require('express');

const {studentController} = require('../../controllers');
const {checkIsNewStudentValid, checkIsStudentToUpdateValid} = require('../../middlewares');

const {createStudent, deleteStudent, getAllStudents, getStudentById, updateStudentById} = studentController;

const studentRouter = Router();

studentRouter.delete('/:id', deleteStudent);

studentRouter.get('/', getAllStudents);
studentRouter.get('/:id', getStudentById);

studentRouter.post('/', checkIsNewStudentValid, createStudent);

studentRouter.put('/:id', checkIsStudentToUpdateValid, updateStudentById);

module.exports = studentRouter;
