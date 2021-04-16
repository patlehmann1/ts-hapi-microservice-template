import { GetV1Params } from '../../helpers/interfaces';

export interface CustomRequest extends HapiRequest {
  params: GetV1Params
}

export const getV1Handler: (req: CustomRequest) => string = ({ params: { name }}) => `Hello, ${name}!`;