import 'dotenv/config';
import Jwt from '@hapi/jwt';
import InvariantError from '../exceptions/InvariantError';

const TokenManager = {
  generateAccessToken: (payload) => Jwt.token.generate(payload, process.env.ACCESS_TOKEN_KEY),
  generateRefreshToken: (payload) => Jwt.token.generate(payload, process.env.REFRESH_TOKEN_KEY),
  verifyRefreshToken: (refreshToken) => {
    try {
      const artifacts = Jwt.token.decode(refreshToken);
      Jwt.token.verifySignature(artifacts, process.env.REFRESH_TOKEN_KEY);
      const { payload } = artifacts.decoded;
      return payload;
    } catch (error) {
      if (error instanceof InvariantError) {
        throw new InvariantError('Refresh token tidak valid');
      }

    }
  },
};

module.exports = TokenManager;