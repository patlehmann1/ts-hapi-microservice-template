var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Hapi = require('@hapi/hapi');
const init = () => __awaiter(this, void 0, void 0, function* () {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    yield server.start();
    console.log('Server running on %s', server.info.uri);
});
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
module.exports = () => init();
