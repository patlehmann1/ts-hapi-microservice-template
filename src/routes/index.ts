import type * as Hapi from '@hapi/hapi';
import routeConfigs from '../routes/routeConfigs';

interface ServerRoute extends Hapi.ServerRoute {
    options: Hapi.RouteOptions & { app: any, id: string }
  }

const plugin = {
    name: 'routes-plugin',
    register: (server: Hapi.Server): void => {
        Object.values(routeConfigs).forEach((route: ServerRoute) => {
            server.route(route);
        })
    }
}

export default { plugin };