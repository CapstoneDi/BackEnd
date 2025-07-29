import Joi from 'joi';

const collaborationsPayloadSchema = Joi.object({
  doctorId: Joi.string().required(),
});

export default { collaborationsPayloadSchema };