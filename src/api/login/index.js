const LoginHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'login',
  version: '1.0.0',
  register: async (server, {
    authenticationsService,
    usersService,
    tokenManager,
    validator,
  }) => {
    const loginHandler = new LoginHandler(
      authenticationsService,
      usersService,
      tokenManager,
      validator,
    );
    server.route(routes(loginHandler));
  },
};