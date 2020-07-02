const {Router} = require('express');

const lessonRouter = Router();

lessonRouter.get('/', (req, res) => {
    res.send('hello');
})

module.exports = lessonRouter;