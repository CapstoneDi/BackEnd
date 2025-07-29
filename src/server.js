import 'dotenv/config';

import Hapi from '@hapi/hapi';
import Jwt from '@hapi/jwt';

// users
import users from './api/users/index.js';
import UsersService from './services/UsersService.js';
import UsersValidator from './validator/users/index.js';

// authentications
import login from './api/login/index.js';
import AuthenticationsService from './services/AuthenticationsService.js';
import TokenManager from './tokenize/TokenManager.js';
import LoginValidator from './validator/login/index.js';

// collaborations
import collaborations from './api/collaborations/index.js';
import CollaborationsService from './services/CollaborationsService.js';
import CollaborationsValidator from './validator/collaborations/index.js';

// dokter
import dokter from './api/dokter/index.js';
import DokterService from './services/DokterService.js';
import DokterValidator from './validator/dokter/index.js';

const init = async () => {
  const usersService = new UsersService();
  const authenticationsService = new AuthenticationsService();
  const dokterService = new DokterService();
  const collaborationsService = new CollaborationsService();

  try {
    const result = await usersService._pool.query('SELECT NOW()');
    console.log('✅ Database connected at:', result.rows[0].now);
  } catch (err) {
    console.error('❌ Database connection failed:', err.message);
  }

  const server = Hapi.server({
    port: process.env.PORT,
    host: '0.0.0.0',
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

  console.log('🚀 Port yang akan digunakan:', process.env.PORT);
  await server.start();
  console.log(`Server is running on ${server.info.uri}`);

  server.table().forEach((route) => {
  console.log(`➡️  ${route.method.toUpperCase()} ${route.path}`);
});
};

init();