const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');

dotenv.config();

const {PORT} = require('./config');
const db = require('./db').getInstance();
const {classRouter, lessonRouter, studentRouter, subjectRouter} = require('./routes');

db.setModels();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use('/classes', classRouter);
app.use('/lessons', lessonRouter);
app.use('/students', studentRouter);
app.use('/subjects', subjectRouter);

app.listen(PORT, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});

process.on('unhandledRejection', reason => {
    console.log('Unhandled Error:', reason);

    process.exit(0);
});
