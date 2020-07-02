const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');

dotenv.config();

const {PORT} = require('./config');
const {lessonRouter} = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('dev'));

app.use('/lessons', lessonRouter);

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

