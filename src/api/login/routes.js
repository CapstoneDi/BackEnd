const routes = (handler) => [
  {
    method: 'POST',
    path: '/login',
    options: {
      auth: 'jagasehatapp_jwt',
      handler: handler.postLoginHandler,
      cors: true, // ⬅️ ini yang penting!
    },
  },
];

export default routes;