"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errors_1 = require("@utils/errors");
const zod_1 = require("zod");
const errorHandler = (error, _request, response, next) => {
    if (error instanceof zod_1.ZodError) {
        const details = error.errors.reduce((acc, error) => {
            const path = error.path.join(".");
            acc[path] = [...(acc[path] ? acc[path] : []), error.message];
            return acc;
        }, {});
        const err = new errors_1.BadRequestError("Validation error", details);
        response.status(400).json(err.toJSON());
    }
    if (error instanceof errors_1.CustomError) {
        response.status(error.status).json(error.toJSON());
    }
    response
        .status(500)
        .json({ status: 500, errors: [], message: "Internal Server Error" });
    next(error);
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error.middleware.js.map