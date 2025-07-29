const routes = (handler) => [
  {
    method: 'POST',
    path: '/register',
    options: {
      auth: false,
      cors: true, // ⬅️ ini yang penting!
      handler: handler.postUserHandler,
    },
  },
  {
    method: 'GET',
    path: '/users/me',
    handler: handler.getUserByIdHandler,
    options: {
      auth: 'jagasehatapp_jwt',
      cors: true, // ⬅️ ini yang penting!
    },
  }
];

export default routes; 