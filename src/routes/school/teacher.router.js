const {Router} = require('express');

const {teacherController} = require('../../controllers');
const {checkIsNewTeacherValid, checkIsTeacherToUpdateValid} = require('../../middlewares');

const {createTeacher, deleteTeacher, getAllTeachers, getTeacherById, updateTeacherById} = teacherController;

const teacherRouter = Router();

teacherRouter.delete('/:id', deleteTeacher);

teacherRouter.get('/', getAllTeachers);
teacherRouter.get('/:id', getTeacherById);

teacherRouter.post('/', checkIsNewTeacherValid, createTeacher);

teacherRouter.put('/:id', checkIsTeacherToUpdateValid, updateTeacherById);

module.exports = teacherRouter;
