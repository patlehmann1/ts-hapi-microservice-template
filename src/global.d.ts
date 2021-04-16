import type Hapi from '@hapi/hapi';

import { BadRequestErr, NotFoundErr, UnexpectedErr } from '@src/routes/helpers/interfaces';

export default Hapi;

export declare global {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  interface HapiServer extends Hapi.Server {}
  interface HapiRequest extends Hapi.Request {}
  interface HapiResponseToolkit extends Hapi.ResponseToolkit {}
  interface HapiResponseObject extends Hapi.ResponseObject {}
  interface HapiLifecycleReturnValue extends Hapi.Lifecycle.ReturnValue {}
  interface HapiServerAuthSchemeObject extends Hapi.ServerAuthSchemeObject {}
  interface HapiServerRoute extends Hapi.ServerRoute {}
  interface HapiRouteOptions extends Hapi.RouteOptions {}
  /* eslint-enable @typescript-eslint/no-empty-interface */

  interface BadRequestError extends BadRequestErr, Error {}
  interface NotFoundError extends NotFoundErr, Error {}
  interface UnexpectedError extends UnexpectedErr, Error {}

  type DeepReadonly<T> = T extends Record<string, any> ?
    { readonly [K in keyof T]: DeepReadonly<T[K]> } : T;

  interface ServerWithPlugins extends HapiServer {
    plugins: Record<string, any>
  }
}