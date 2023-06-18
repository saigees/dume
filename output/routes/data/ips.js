"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_1 = require("../../lib/class");
const ips_json_1 = __importDefault(require("../../data/ips.json"));
const utils_1 = require("../../utils");
exports.default = new class_1.Route({
    path: "/ips",
    method: "GET",
    main: (req, res) => {
        return (0, utils_1.response)(ips_json_1.default, req, res);
    }
});
//# sourceMappingURL=ips.js.map