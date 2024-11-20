"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const cutomError_1 = require("@utils/cutomError");
const errorHandler = (err, req, res, next) => {
    console.error(err); // Log error for debugging
    if (err instanceof cutomError_1.CustomError) {
        res.status(err.statusCode).json({ error: err.message });
    }
    else {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map