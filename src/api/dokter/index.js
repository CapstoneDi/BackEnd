import routes from './routes';
import DokterHandler from './handler';

module.exports = {
  name: 'dokter',
  register: async (server, { service, validator }) => {
    const handler = new DokterHandler(service, validator);
    server.route(routes(handler));
  },
};
