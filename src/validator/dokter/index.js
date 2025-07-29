import InvariantError from '../../exceptions/InvariantError.js';
import { DokterPayloadSchema } from './schema';

const DokterValidator = {

  validateDokterPayload: (payload) => {
    const validationResult = DokterPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = DokterValidator;
