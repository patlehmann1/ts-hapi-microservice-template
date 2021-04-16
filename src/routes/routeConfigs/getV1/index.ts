import { getV1Handler as handler } from './handler';
import { getV1Params } from './schema';

const getV1: HapiServerRoute = {
  method: 'GET',
  path: '/v1/hello/{name}/',
  options: {
    handler,
    description: 'Get v1 hello name',
    validate: {
      params: getV1Params
    },
  },
};

export default getV1;