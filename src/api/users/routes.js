const routes = (handler) => [
  {
    method: 'POST',
    path: '/register',
    options: {
      auth: false,
      handler: handler.postUserHandler,
    },
  },
  {
    method: 'GET',
    path: '/users/me',
    options: {
      auth: 'jagasehatapp_jwt',
      handler: handler.getUserByIdHandler,
    },
  }
];

export default routes;