import Joi from 'joi';

const UserPayloadSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  fullname: Joi.string().required(),
});

module.exports = { UserPayloadSchema };