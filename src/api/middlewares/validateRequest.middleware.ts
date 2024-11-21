import { Response, NextFunction } from "express";
import { Request } from "@models/api.type";
import { AnyZodObject } from "zod";

export const validateRequest =
  <TBody = void, TParams = void>(schema: AnyZodObject) =>
  (
    request: Request<TBody, TParams>,
    _response: Response,
    next: NextFunction
  ) => {
    try {
      schema.parse({
        body: request.body,
        params: request.params,
      });
      next();
    } catch (error) {
      next(error);
    }
  };
