import Hapi from '@hapi/hapi';

import routes from './routes';

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route(Object.values(routes));

    await server.register({
        plugin: require('hapi-pino'),
        options: {
          prettyPrint: process.env.NODE_ENV !== 'production',
          redact: ['req.headers.authorization']
        }
    })

    await server.start();
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

export default init;
