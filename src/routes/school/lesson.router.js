const {Router} = require('express');

const {lessonController} = require('../../controllers');
const {checkIsNewLessonValid, checkIsLessonToUpdateValid} = require('../../middlewares');

const {createLesson, deleteLesson, getAllLessons, getLessonById, updateLessonById} = lessonController;

const lessonRouter = Router();

lessonRouter.delete('/:id', deleteLesson);

lessonRouter.get('/', getAllLessons);
lessonRouter.get('/:id', getLessonById);

lessonRouter.post('/', checkIsNewLessonValid, createLesson);

lessonRouter.put('/:id', checkIsLessonToUpdateValid, updateLessonById);

module.exports = lessonRouter;
