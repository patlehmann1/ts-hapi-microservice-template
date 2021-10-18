"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handler_1 = require("./handler");
const schema_1 = require("./schema");
const getV1 = {
    method: 'GET',
    path: '/v1/hello/{name}/',
    options: {
        handler: handler_1.getV1Handler,
        description: 'Get v1 hello name',
        validate: {
            params: schema_1.getV1Params
        },
    },
};
exports.default = getV1;
