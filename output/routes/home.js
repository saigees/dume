"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_1 = require("../lib/class");
exports.default = new class_1.Route({
    path: "/",
    method: "GET",
    main: (req, res) => {
        res.send({
            cookies: "with",
            milk: true
        });
    }
});
//# sourceMappingURL=home.js.map