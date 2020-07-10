const Joi = require('joi');

module.exports = Joi.object().keys({
    name: Joi.string().trim().min(1).max(95).optional(),
    surname: Joi.string().trim().min(1).max(95).optional(),
    gender: Joi.string().trim().min(1).max(10).optional(),
    class_id: Joi.number().min(1).max(10 ** 11).optional()
});
