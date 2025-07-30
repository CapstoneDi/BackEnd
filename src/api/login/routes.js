import nameOrigin from '../../utils/nameOrigin.js';

const routes = (handler) => [
  {
    method: 'POST',
    path: '/login',
    handler: handler.postLoginHandler,
    options: {
      auth: false,
      cors: {
        origin: nameOrigin,
      }
    }
  }
];

export default routes;