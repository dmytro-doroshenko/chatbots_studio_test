const {Router} = require('express');

const {studentController} = require('../../controllers');

const {createStudent, deleteStudent, getAllStudents, getStudentById, updateStudentById} = studentController;

const studentRouter = Router();

studentRouter.delete('/:id', deleteStudent);

studentRouter.get('/', getAllStudents);
studentRouter.get('/:id', getStudentById);

studentRouter.post('/', createStudent);

studentRouter.put('/:id', updateStudentById);

module.exports = studentRouter;
