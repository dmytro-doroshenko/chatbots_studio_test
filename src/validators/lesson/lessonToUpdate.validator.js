const Joi = require('joi');

module.exports = Joi.object({
    class_id: Joi.number().min(1).max(10 ** 11).optional(),
    subject_id: Joi.number().min(1).max(10 ** 11).optional(),
    teacher_id: Joi.number().min(1).max(10 ** 11).optional(),
    room: Joi.string().trim().min(1).max(10).optional(),
    start_at: Joi.string().regex(/^([01]\d|2[0-3]):?([0-5]\d)$/).optional(),
    end_at: Joi.string().regex(/^([01]\d|2[0-3]):?([0-5]\d)$/).optional()
});
