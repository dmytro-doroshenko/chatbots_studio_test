const {Router} = require('express');

const {classController} = require('../../controllers');
const {checkIsClassValid} = require('../../middlewares');

const {createClass, deleteClass, getAllClasses, getClassById, updateClassById} = classController;

const classRouter = Router();

classRouter.delete('/:id', deleteClass);

classRouter.get('/', getAllClasses);
classRouter.get('/:id', getClassById);

classRouter.post('/', checkIsClassValid, createClass);

classRouter.put('/:id', checkIsClassValid, updateClassById);

module.exports = classRouter;
