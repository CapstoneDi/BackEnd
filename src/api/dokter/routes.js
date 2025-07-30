const routes = (handler) => [
  {
    method: 'POST',
    path: '/dokter',
    handler: handler.postDokterHandler,
    options: {
      auth: false,
      cors: {
        origin: ['https://front-end-two-red-68.vercel.app/'],
      },
    },
  },
  {
    method: 'GET',
    path: '/dokter',
    handler: handler.getDoktersHandler,
    options: {
      auth: false,
      cors: {
        origin: ['https://front-end-two-red-68.vercel.app/'],
      },
    },
  },
  {
    method: 'GET',
    path: '/dokter/me',
    handler: handler.getDoktersByAuthHandler,
    options: {
      auth: 'jagasehatapp_jwt',
      cors: {
        origin: ['https://front-end-two-red-68.vercel.app/'],
      },
    },
  },
  {
    method: 'GET',
    path: '/dokter/{id}',
    handler: handler.getDokterByIdHandler,
    options: {
      auth: false,
      cors: {
        origin: ['https://front-end-two-red-68.vercel.app/'],
      },
    },
  },
  {
    method: 'PUT',
    path: '/dokter/{id}',
    handler: handler.putDokterByIdHandler,
    options: {
      auth: false,
      cors: {
        origin: ['https://front-end-two-red-68.vercel.app/'],
      },
    },
  },
  {
    method: 'DELETE',
    path: '/dokter/{id}',
    handler: handler.deleteDokterByIdHandler,
    options: {
      auth: false,
      cors: {
        origin: ['https://front-end-two-red-68.vercel.app/'],
      },
    },
  },
];

export default routes;
