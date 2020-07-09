const {Router} = require('express');

const {lessonController} = require('../../controllers');

const {createLesson, deleteLesson, getAllLessons, getLessonById, updateLessonById} = lessonController;

const lessonRouter = Router();

lessonRouter.delete('/:id', deleteLesson);

lessonRouter.get('/', getAllLessons);
lessonRouter.get('/:id', getLessonById);

lessonRouter.post('/', createLesson);

lessonRouter.put('/:id', updateLessonById);

module.exports = lessonRouter;
