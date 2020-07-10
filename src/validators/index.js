const classValidationSchema = require('./class/class.validator');
const lessonToUpdateValidationSchema = require('./lesson/lessonToUpdate.validator');
const newLessonValidationSchema = require('./lesson/newLesson.validator');
const newStudentValidationSchema = require('./student/newStudent.validator');
const newTeacherValidationSchema = require('./teacher/newTeacher.validator');
const studentToUpdateValidationSchema = require('./student/studentToUpdate.validator');
const subjectValidationSchema = require('./subject/subject.validator');
const teacherToUpdateValidationSchema = require('./teacher/teacherToUpdate.validator');

module.exports = {
    classValidationSchema,
    lessonToUpdateValidationSchema,
    newLessonValidationSchema,
    newStudentValidationSchema,
    newTeacherValidationSchema,
    studentToUpdateValidationSchema,
    subjectValidationSchema,
    teacherToUpdateValidationSchema,
}
