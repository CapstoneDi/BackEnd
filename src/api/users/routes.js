const routes = (handler) => [
  {
    method: 'POST',
    path: '/register',
    options: {
      auth: 'jagasehatapp_jwt',
      cors: {
        origin: ['*'],
      },
      handler: handler.postUserHandler,
    },
  },
  {
    method: 'GET',
    path: '/users/me',
    options: {
      auth: 'jagasehatapp_jwt',
      cors: {
        origin: ['*'],
      },
      handler: handler.getUserByIdHandler,
    },
  }
];

export default routes;