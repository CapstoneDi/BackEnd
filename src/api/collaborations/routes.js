const routes = (handler) => [
  {
    method: 'POST',
    path: '/collaborations',
    handler: handler.postCollaborationsHandler,
    options: {
      auth: 'jagasehatapp_jwt',
      cors: {
        origin: ['https://front-end-two-red-68.vercel.app/'],
      },
    },
  },
];

export default routes;