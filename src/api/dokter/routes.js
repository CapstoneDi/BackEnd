const routes = (handler) => [
  {
    method: 'POST',
    path: '/dokter',
    handler: handler.postDokterHandler,
  },
  {
    method: 'GET',
    path: '/dokter',
    handler: handler.getDoktersHandler,
  },
  {
    method: 'GET',
    path: '/dokter/me',
    handler: handler.getDoktersByAuthHandler,
    options: {
      auth: 'jagasehatapp_jwt',
    },
  },
  {
    method: 'GET',
    path: '/dokter/{id}',
    handler: handler.getDokterByIdHandler,
  },
  {
    method: 'PUT',
    path: '/dokter/{id}',
    handler: handler.putDokterByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/dokter/{id}',
    handler: handler.deleteDokterByIdHandler,
  },
];

export default routes;
