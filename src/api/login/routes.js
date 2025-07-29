const routes = (handler) => [
  {
    method: 'POST',
    path: '/login',
    handler: handler.postLoginHandler,
    options: {
      auth: 'jagasehatapp_jwt',
      cors: {
        origin: ['*'],
      }
    },
  },
];

export default routes;