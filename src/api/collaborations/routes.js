const routes = (handler) => [
  {
    method: 'POST',
    path: '/collaborations',
    handler: handler.postCollaborationsHandler,
    options: {
      auth: 'jagasehatapp_jwt',
      cors: {
        origin: ['*'],
      }
    },
  },
];

export default routes;