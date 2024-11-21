"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = exports.ForbiddenError = exports.UnauthorizedError = exports.BadRequestError = exports.NotFoundError = exports.CustomError = void 0;
class CustomError extends Error {
    constructor(message, status, details = {}) {
        super(message);
        this.status = status;
        this.details = details;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
    toJSON() {
        return {
            status: this.status,
            message: this.message,
            details: this.details,
        };
    }
}
exports.CustomError = CustomError;
class NotFoundError extends CustomError {
    constructor(message = "Not Found", details) {
        super(message, 404, details);
    }
}
exports.NotFoundError = NotFoundError;
class BadRequestError extends CustomError {
    constructor(message = "Bad Request", details) {
        super(message, 400, details);
    }
}
exports.BadRequestError = BadRequestError;
class UnauthorizedError extends CustomError {
    constructor(message = "Unauthorized") {
        super(message, 401);
    }
}
exports.UnauthorizedError = UnauthorizedError;
class ForbiddenError extends CustomError {
    constructor(message = "Forbidden") {
        super(message, 403);
    }
}
exports.ForbiddenError = ForbiddenError;
class InternalServerError extends CustomError {
    constructor(message = "Internal Server Error") {
        super(message, 500);
    }
}
exports.InternalServerError = InternalServerError;
//# sourceMappingURL=errors.js.map