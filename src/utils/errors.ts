export type ErrorDetails = Record<string, string | string[]>;

export class CustomError extends Error {
  status: number;
  details: ErrorDetails;

  constructor(message: string, status: number, details: ErrorDetails = {}) {
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

export class NotFoundError extends CustomError {
  constructor(message = "Not Found", details?: ErrorDetails) {
    super(message, 404, details);
  }
}

export class BadRequestError extends CustomError {
  constructor(message = "Bad Request", details?: ErrorDetails) {
    super(message, 400, details);
  }
}

export class UnauthorizedError extends CustomError {
  constructor(message = "Unauthorized") {
    super(message, 401);
  }
}

export class ForbiddenError extends CustomError {
  constructor(message = "Forbidden") {
    super(message, 403);
  }
}

export class InternalServerError extends CustomError {
  constructor(message = "Internal Server Error") {
    super(message, 500);
  }
}
