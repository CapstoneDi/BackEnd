import routes from './routes.js';
import DokterHandler from './handler.js';

export default  {
  name: 'dokter',
  register: async (server, { service, validator }) => {
    const handler = new DokterHandler(service, validator);
    server.route(routes(handler));
  },
};
