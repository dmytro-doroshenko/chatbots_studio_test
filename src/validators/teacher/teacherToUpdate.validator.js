const Joi = require('joi');

module.exports = Joi.object().keys({
    name: Joi.string().trim().min(1).max(95).optional(),
    surname: Joi.string().trim().min(1).max(95).optional(),
    salary: Joi.number().min(1).max(10 ** 11).optional(),
    subject_id: Joi.number().min(1).max(10 ** 11).optional()
});
