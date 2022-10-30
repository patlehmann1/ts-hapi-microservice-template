import Glue from '@hapi/glue';
import routes from './routes';

const manifest = {
    server: {
        host: process.env.API_HOST ?? 'localhost',
        port: process.env.API_PORT ?? 3000
    },
    register: {
        plugins: [
            routes,
            {
                plugin: require('hapi-pino'),
                options: {
                    prettyPrint: process.env.NODE_ENV !== 'production',
                    redact: ['req.headers.authorization']
                }
            }
        ]
    }
};

const options = { relativeTo: __dirname };

/**
 * @async
 * @function startServer
 * @memberof Server
 * @description starts the Hapi server
 * @returns {HapiServer}
 */
 module.exports = async () => {
    const server = await Glue.compose(manifest, options);

    await server.start();  

    return server;
  };
