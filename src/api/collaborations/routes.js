const routes = (handler) => [
  {
    method: 'POST',
    path: '/collaborations',
    handler: handler.postCollaborationsHandler,
    options: {
      auth: 'jagasehatapp_jwt',
      cors: {
        origin: ['https://front-ad15uyo86-harrys-projects-56b2de38.vercel.app'],
      },
    },
  },
];

export default routes;