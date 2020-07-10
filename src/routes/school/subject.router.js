const {Router} = require('express');

const {subjectController} = require('../../controllers');
const {checkIsSubjectValid} = require('../../middlewares');

const {createSubject, deleteSubject, getAllSubjects, getSubjectById, updateSubjectById} = subjectController;

const subjectRouter = Router();

subjectRouter.delete('/:id', deleteSubject);

subjectRouter.get('/', getAllSubjects);
subjectRouter.get('/:id', getSubjectById);

subjectRouter.post('/', checkIsSubjectValid, createSubject);

subjectRouter.put('/:id', checkIsSubjectValid, updateSubjectById);

module.exports = subjectRouter;
