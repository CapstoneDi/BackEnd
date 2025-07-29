import routes from './routes.js';
import DokterHandler from './handler.js';

module.exports = {
  name: 'dokter',
  register: async (server, { service, validator }) => {
    const handler = new DokterHandler(service, validator);
    server.route(routes(handler));
  },
};
