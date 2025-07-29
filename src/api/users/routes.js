const routes = (handler) => [
  {
    method: 'POST',
    path: '/register',
    handler: handler.postUserHandler,
    options: {
      auth: 'jagasehatapp_jwt',
      cors: {
        origin: ['*'],
      }
    },
  },
  {
    method: 'GET',
    path: '/users/me',
    handler: handler.getUserByIdHandler,
    options: {
      auth: 'jagasehatapp_jwt',
      cors: {
        origin: ['*'],
      }
    },
  }
];

export default routes;