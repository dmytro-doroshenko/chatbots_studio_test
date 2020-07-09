const {Router} = require('express');

const {teacherController} = require('../../controllers');

const {createTeacher, deleteTeacher, getAllTeachers, getTeacherById, updateTeacherById} = teacherController;

const teacherRouter = Router();

teacherRouter.delete('/:id', deleteTeacher);

teacherRouter.get('/', getAllTeachers);
teacherRouter.get('/:id', getTeacherById);

teacherRouter.post('/', createTeacher);

teacherRouter.put('/:id', updateTeacherById);

module.exports = teacherRouter;
