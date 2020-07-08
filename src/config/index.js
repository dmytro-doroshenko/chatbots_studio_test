module.exports = {
    // ---------- database connection info ----------
    DB_DIALECT: process.env.DB_DIALECT || 'mysql',
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_NAME: process.env.DB_NAME || 'database_name',
    DB_PASSWORD: process.env.DB_PASSWORD || 'database_password',
    DB_USERNAME: process.env.DB_USERNAME || 'database_username',

    // ---------- database models ----------
    CLASS_MODEL: process.env.CLASS_MODEL || 'Model_name',
    LESSON_MODEL: process.env.LESSON_MODEL || 'Model_name',
    TEACHER_MODEL: process.env.TEACHER_MODEL || 'Model_name',
    STUDENT_MODEL: process.env.STUDENT_MODEL || 'Model_name',
    SUBJECT_MODEL: process.env.SUBJECT_MODEL || 'Model_name',

    // ---------- database tables ----------
    CLASSES_TABLE: process.env.CLASSES_TABLE || 'table',
    LESSONS_TABLE: process.env.LESSONS_TABLE || 'table',
    STUDENTS_TABLE: process.env.STUDENTS_TABLE || 'table',
    SUBJECTS_TABLE: process.env.SUBJECTS_TABLE || 'table',
    TEACHERS_TABLE: process.env.TEACHERS_TABLE || 'table',

    // ---------- server info ----------
    PORT: process.env.PORT || 8000,
}
