const routes = (handler) => [
  {
    method: 'POST',
    path: '/login',
    handler: handler.postLoginHandler,
  },
];

module.exports = routes;