import { NextFunction, Request, Response } from "express";
import status from "http-status";
import { execPath } from "node:process";

const notfound = (req: Request, res: Response, next: NextFunction) => {
  return res.status(status.NOT_FOUND).json({
    status : status.NOT_FOUND,
    success :false,
    message : "Not Found",
    error : ""
  })
};
export default notfound
