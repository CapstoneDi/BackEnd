import nameOrigin from './utils/nameOrigin.js';

const routes = (handler) => [
  {
    method: 'POST',
    path: '/collaborations',
    handler: handler.postCollaborationsHandler,
    options: {
      auth: 'jagasehatapp_jwt',
      cors: {
        origin: nameOrigin,
      },
    },
  },
];

export default routes;