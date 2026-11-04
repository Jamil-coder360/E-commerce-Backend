import { ZodObject } from "zod";
import catchAsync from "../utils/catchAsync";
import { NextFunction, Request, Response } from "express";

const validRequest = (schema: ZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const persed = await schema.safeParseAsync({
      body: req.body,
      cookies: req.cookies,
    });

    req.body = persed.data;
    next();
  });
};
export default validRequest;
