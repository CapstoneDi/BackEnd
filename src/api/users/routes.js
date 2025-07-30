const routes = (handler) => [
  {
    method: 'POST',
    path: '/register',
    handler: handler.postUserHandler,
    options: {
      auth: false,
      cors: {
        origin: ['https://front-end-two-red-68.vercel.app'], // ⬅️ khusus frontend kamu
      },
    },
  },
  {
    method: 'GET',
    path: '/users/me',
    handler: handler.getUserByIdHandler,
    options: {
      auth: 'jagasehatapp_jwt',
      cors: true, // ⬅️ ini yang penting!
    },
  }
];

export default routes; 