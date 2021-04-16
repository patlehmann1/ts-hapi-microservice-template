import Joi from 'joi';

export const getV1Params = Joi.object().keys({
  name: Joi.string().required(),
}).description('getV1 Params');
