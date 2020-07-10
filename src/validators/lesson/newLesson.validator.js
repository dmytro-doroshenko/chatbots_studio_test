const Joi = require('joi');

module.exports = Joi.object({
    class_id: Joi.number().min(1).max(10 ** 11).required(),
    subject_id: Joi.number().min(1).max(10 ** 11).required(),
    teacher_id: Joi.number().min(1).max(10 ** 11).required(),
    room: Joi.string().trim().min(1).max(10).required(),
    start_at: Joi.string().regex(/^([01]\d|2[0-3]):?([0-5]\d)$/).required(),
    end_at: Joi.string().regex(/^([01]\d|2[0-3]):?([0-5]\d)$/).required()
});
