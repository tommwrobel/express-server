import { Request, Response, NextFunction } from "express"
import { CustomError } from "@utils/errors"

export const errorHandler = (
  err: CustomError | Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(err)
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({ error: err.message })
  } else {
    res.status(500).json({ error: "Internal Server Error" })
  }
}
