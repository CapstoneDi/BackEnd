const routes = (handler) => [
  {
    method: 'POST',
    path: '/register',
    handler: handler.postUserHandler,
    options: {
      auth: false,
      cors: {
        origin: ['https://front-end-two-red-68.vercel.app/'],
      },
    },
  },
  {
    method: 'GET',
    path: '/users/me',
    handler: handler.getUserByIdHandler,
    options: {
      auth: 'jagasehatapp_jwt',
      cors: {
        origin: ['https://front-end-two-red-68.vercel.app/'],
      },
    },
  }
];

export default routes; 