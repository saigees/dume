"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const fastify_1 = __importDefault(require("fastify"));
const utils_1 = require("./utils");
const app = (0, fastify_1.default)({
    logger: true
});
(0, utils_1.router)(app).then(() => {
    app.listen({ port: parseInt(process.env.PORT) });
});
//# sourceMappingURL=index.js.map