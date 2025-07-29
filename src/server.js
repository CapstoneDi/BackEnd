import 'dotenv/config';

import Hapi from '@hapi/hapi';
import Jwt from '@hapi/jwt';

// users
import users from './api/users';
import UsersService from './services/UsersService.js';
import UsersValidator from './validator/users.js';

// authentications
import login from './api/login';
import AuthenticationsService from './services/AuthenticationsService.js';
import TokenManager from './tokenize/TokenManager.js';
import LoginValidator from './validator/login.js';

// collaborations
import collaborations from './api/collaborations';
import CollaborationsService from './services/CollaborationsService.js';
import CollaborationsValidator from './validator/collaborations.js';

// dokter
import dokter from './api/dokter';
import DokterService from './services/DokterService.js';
import DokterValidator from './validator/dokter.js';

const init = async () => {
  const usersService = new UsersService();
  const authenticationsService = new AuthenticationsService();
  const dokterService = new DokterService();
  const collaborationsService = new CollaborationsService();

  const server = Hapi.server({
    port: process.env.PORT || 5000,
    host: process.env.HOST || '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register([
    {
      plugin: Jwt,
    },
  ]);

  server.auth.strategy('jagasehatapp_jwt', 'jwt', {
    keys: process.env.ACCESS_TOKEN_KEY,
    verify: {
      aud: false,
      iss: false,
      sub: false,
      exp: true,
    },
    validate: (artifacts) => ({
      isValid: true,
      credentials: {
        id: artifacts.decoded.payload.id,
      },
    }),
  });

  await server.register([
    {
      plugin: users,
      options: {
        service: usersService,
        validator: UsersValidator,
      },
    },
    {
      plugin: login,
      options: {
        authenticationsService,
        usersService,
        tokenManager: TokenManager,
        validator: LoginValidator,
      },
    },
    {
      plugin: dokter,
      options: {
        service: dokterService,
        validator: DokterValidator,
      },
    },
    {
      plugin: collaborations,
      options: {
        service: collaborationsService,
        validator: CollaborationsValidator,
      },
    }
  ]);

  await server.start();
  console.log(`Server is running on ${server.info.uri}`);
};

init();