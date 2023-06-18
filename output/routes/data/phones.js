"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_1 = require("../../lib/class");
const phones_json_1 = __importDefault(require("../../data/phones.json"));
const utils_1 = require("../../utils");
exports.default = new class_1.Route({
    path: "/phone-numbers",
    method: "GET",
    main: (req, res) => {
        return (0, utils_1.response)(phones_json_1.default, req, res);
    }
});
//# sourceMappingURL=phones.js.map