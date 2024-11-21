import { NextFunction, Request, Response } from "express";
import { BadRequestError, CustomError } from "@utils/errors";
import { ZodError } from "zod";

export const errorHandler = (
  error: CustomError | Error,
  _request: Request,
  response: Response,
  next: NextFunction
): void => {
  if (error instanceof ZodError) {
    const details = error.errors.reduce(
      (acc: { [key: string]: string[] }, error) => {
        const path = error.path.join(".");
        acc[path] = [...(acc[path] ? acc[path] : []), error.message];
        return acc;
      },
      {}
    );
    const err = new BadRequestError("Validation error", details);
    response.status(400).json(err.toJSON());
  }

  if (error instanceof CustomError) {
    response.status(error.status).json(error.toJSON());
  }

  response
    .status(500)
    .json({ status: 500, errors: [], message: "Internal Server Error" });

  next(error);
};
