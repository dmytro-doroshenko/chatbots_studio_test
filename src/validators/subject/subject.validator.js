const Joi = require('joi');

module.exports = Joi.object().keys({
    name: Joi.string().trim().min(1).max(255).required(),
});
