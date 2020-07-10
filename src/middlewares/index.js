const checkIsClassValid = require('./class/checkIsClassValid.middleware');
const checkIsNewLessonValid = require('./lesson/checkIsNewLessonValid.middleware');
const checkIsLessonToUpdateValid = require('./lesson/checkIsLessonToUpdateValid.middleware');
const checkIsSubjectValid = require('./subject/checkIsSubjectValid.middleware');
const checkIsNewStudentValid = require('./student/checkIsNewStudentValid.middleware');
const checkIsStudentToUpdateValid = require('./student/checkIsStudentToUpdateValid.middleware');
const checkIsNewTeacherValid = require('./teacher/checkIsNewTeacherValid.middleware');
const checkIsTeacherToUpdateValid = require('./teacher/checkIsTeacherToUpdateValid.middleware');

module.exports = {
    checkIsClassValid,
    checkIsLessonToUpdateValid,
    checkIsNewLessonValid,
    checkIsNewStudentValid,
    checkIsNewTeacherValid,
    checkIsStudentToUpdateValid,
    checkIsSubjectValid,
    checkIsTeacherToUpdateValid
};
