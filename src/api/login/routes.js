const routes = (handler) => [
  {
    method: 'POST',
    path: '/login',
    options: {
      auth: 'jagasehatapp_jwt',
      handler: handler.postLoginHandler,
    },
  },
];

export default routes;