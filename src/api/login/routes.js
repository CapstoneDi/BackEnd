const routes = (handler) => [
  {
    method: 'POST',
    path: '/login',
    handler: handler.postLoginHandler,
    options: {
      auth: false,
      cors: {
        origin: (origin, request) => true, // izinkan semua origin
        credentials: true, // jika frontend kirim cookie / header auth
      },
    }
  }
];

export default routes;