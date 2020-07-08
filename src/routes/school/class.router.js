const {Router} = require('express');

const {classController} = require('../../controllers');

const {createClass, deleteClass, getAllClasses, getClassById, updateClassById} = classController;

const classRouter = Router();

classRouter.delete('/:id', deleteClass);

classRouter.get('/', getAllClasses);
classRouter.get('/:id', getClassById);

classRouter.post('/', createClass);

classRouter.put('/:id', updateClassById);

module.exports = classRouter;
