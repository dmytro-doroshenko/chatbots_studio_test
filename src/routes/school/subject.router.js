const {Router} = require('express');

const {subjectController} = require('../../controllers');

const {createSubject, deleteSubject, getAllSubjects, getSubjectById, updateSubjectById} = subjectController;

const subjectRouter = Router();

subjectRouter.delete('/:id', deleteSubject);

subjectRouter.get('/', getAllSubjects);
subjectRouter.get('/:id', getSubjectById);

subjectRouter.post('/', createSubject);

subjectRouter.put('/:id', updateSubjectById);

module.exports = subjectRouter;
