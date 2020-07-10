const Joi = require('joi');

module.exports = Joi.object().keys({
    name: Joi.string().trim().min(1).max(95).required(),
    surname: Joi.string().trim().min(1).max(95).required(),
    salary: Joi.number().min(1).max(10 ** 11).required(),
    subject_id: Joi.number().min(1).max(10 ** 11).required()
});
