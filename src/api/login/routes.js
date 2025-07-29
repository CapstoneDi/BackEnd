const routes = (handler) => [
  {
    method: 'POST',
    path: '/login',
    options: {
      auth: 'jagasehatapp_jwt',
      cors: {
        origin: ['*'],
      },
      handler: handler.postLoginHandler,
    },
  },
];

export default routes;