import Joi from 'joi';

const collaborationsPayloadSchema = Joi.object({
  doctorId: Joi.string().required(),
});

module.exports = { collaborationsPayloadSchema };