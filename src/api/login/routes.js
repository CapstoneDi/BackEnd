const routes = (handler) => [
  {
    method: 'POST',
    path: '/login',
    handler: handler.postLoginHandler,
    options: {
      auth: false,
      cors: {
        origin: ['https://front-end-two-red-68.vercel.app'],
      }
    }
  }
];

export default routes;