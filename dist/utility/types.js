"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const joi_to_typescript_1 = require("joi-to-typescript");
/**
 * This function converts Joi schemas that validate
 * routes to TypeScript interfaces for a single source of truth
 *
 * Running the command `npm run types` will generate interfaces
 * for any schemas in the target directory
 *
 * https://github.com/mrjono1/joi-to-typescript
 */
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, joi_to_typescript_1.convertFromDirectory)({
        schemaDirectory: (0, path_1.join)(__dirname, '../routes/helpers/schemas'),
        typeOutputDirectory: (0, path_1.join)(__dirname, '../routes/helpers/interfaces'),
        debug: true,
    });
}))();
