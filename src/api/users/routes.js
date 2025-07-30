const routes = (handler) => [
  {
    method: 'POST',
    path: '/register',
    handler: handler.postUserHandler,
    options: {
      auth: false,
      cors: {
        origin: (origin, request) => true, // izinkan semua origin
        credentials: true, // jika frontend kirim cookie / header auth
      },
    }
  },
  {
    method: 'GET',
    path: '/users/me',
    handler: handler.getUserByIdHandler,
    options: {
      auth: 'jagasehatapp_jwt',
      cors: {
        origin: (origin, request) => true, // izinkan semua origin
        credentials: true, // jika frontend kirim cookie / header auth
      },
    }
  }
];

export default routes;