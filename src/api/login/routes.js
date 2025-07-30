const routes = (handler) => [
  {
    method: 'POST',
    path: '/login',
    handler: handler.postLoginHandler,
    options: {
      auth: false,
      cors: {
        origin: ['https://front-ad15uyo86-harrys-projects-56b2de38.vercel.app'],
      }
    }
  }
];

export default routes;