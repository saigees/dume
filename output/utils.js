"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = exports.router = exports.logger = void 0;
const chalk_1 = __importDefault(require("chalk"));
const glob_1 = __importDefault(require("glob"));
const util_1 = require("util");
const globPromise = (0, util_1.promisify)(glob_1.default);
const logger = (msg) => {
    let PREFIX = ` koa `;
    return {
        warn: () => {
            console.log(`${chalk_1.default.bgYellowBright(PREFIX)} ${msg}`);
        },
        error: () => {
            console.log(`${chalk_1.default.bgRedBright(PREFIX)} ${msg}`);
        },
        success: () => {
            console.log(`${chalk_1.default.bgGreenBright(PREFIX)} ${msg}`);
        },
        info: () => {
            console.log(`${chalk_1.default.bgCyanBright(PREFIX)} ${msg}`);
        },
        http: () => {
            console.log(`${chalk_1.default.bgMagentaBright(PREFIX)} ${msg}`);
        },
    };
};
exports.logger = logger;
const router = async (app) => {
    const files = await globPromise(`${__dirname}/routes/**/*.{ts,js}`);
    files.forEach(async (file) => {
        const route = (await Promise.resolve(`${file}`).then(s => __importStar(require(s))))?.default;
        if (route.path) {
            const fn = (req, res) => {
                new Promise((r, rej) => {
                    if (route.middleware) {
                        route.middleware.forEach((m) => {
                            m(req, res);
                            if (route.middleware.indexOf(m) === route.middleware.length - 1) {
                                r(0);
                            }
                        });
                    }
                    else {
                        r(0);
                    }
                }).then(() => {
                    route.main(req, res);
                });
            };
            switch (route.method) {
                case "DELETE":
                    app.delete(route.path, fn);
                    break;
                case "GET":
                    app.get(route.path, fn);
                    break;
                case "PATCH":
                    app.patch(route.path, fn);
                    break;
                case "POST":
                    app.post(route.path, fn);
                    break;
                case "PUT":
                    app.put(route.path, fn);
                    break;
            }
        }
    });
};
exports.router = router;
const response = (array, req, res) => {
    const { limit, skip } = req.query;
    let n = array;
    if (skip) {
        n = n.slice(skip);
    }
    if (limit) {
        n = n.slice(0, limit);
    }
    res.send(n);
};
exports.response = response;
//# sourceMappingURL=utils.js.map