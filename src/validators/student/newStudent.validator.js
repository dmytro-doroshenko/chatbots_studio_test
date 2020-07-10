const Joi = require('joi');

module.exports = Joi.object().keys({
    name: Joi.string().trim().min(1).max(95).required(),
    surname: Joi.string().trim().min(1).max(95).required(),
    gender: Joi.string().trim().min(1).max(10).required(),
    class_id: Joi.number().min(1).max(10 ** 11).required()
});
