const InvariantError = require('../../exceptions/InvariantError');
const { DokterPayloadSchema } = require('./schema');

const DokterValidator = {

  validateDokterPayload: (payload) => {
    const validationResult = DokterPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = DokterValidator;
