import Joi from 'joi';

const DokterPayloadSchema = Joi.object({
  nama: Joi.string().required(),
  email: Joi.string().email().required(),
  spesialis: Joi.string().required(),
  noWa: Joi.string().required(),
  alamat: Joi.string().required(),
});

export default { DokterPayloadSchema };
