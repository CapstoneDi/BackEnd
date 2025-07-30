const routes = (handler) => [
  {
    method: 'POST',
    path: '/register',
    handler: handler.postUserHandler,
    options: {
      auth: false,
      cors: {
        origin: ['https://front-ad15uyo86-harrys-projects-56b2de38.vercel.app'],
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
        origin: ['https://front-ad15uyo86-harrys-projects-56b2de38.vercel.app'],
      },
    },
  }
];

export default routes; 