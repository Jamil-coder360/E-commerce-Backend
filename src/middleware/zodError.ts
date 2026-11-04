import { ZodError, type ZodIssue } from "zod";
import { TGenericErrorResponse } from "../interface/error";

const handleZodError = (error: ZodError): TGenericErrorResponse => {
  const errorSources = error.issues.map((issue: ZodIssue) => {
    const path = issue.path[issue.path.length - 1];

    return {
      path: typeof path === "string" || typeof path === "number" ? path : null,
      message: issue.message,
    };
  });

  return {
    statusCode: 400,
    message: "Zod validation failed",
    errorSources,
  };
};

export default handleZodError;