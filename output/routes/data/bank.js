"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_1 = require("../../lib/class");
const bank_json_1 = __importDefault(require("../../data/bank.json"));
const utils_1 = require("../../utils");
exports.default = new class_1.Route({
    path: "/bank-cards",
    method: "GET",
    main: (req, res) => {
        return (0, utils_1.response)(bank_json_1.default, req, res);
    }
});
//# sourceMappingURL=bank.js.map