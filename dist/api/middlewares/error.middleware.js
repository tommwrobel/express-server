"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errors_1 = require("@utils/errors");
const errorHandler = (err, req, res, next) => {
    console.error(err);
    if (err instanceof errors_1.CustomError) {
        res.status(err.statusCode).json({ error: err.message });
    }
    else {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error.middleware.js.map