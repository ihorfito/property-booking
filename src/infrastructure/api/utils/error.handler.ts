import {NextFunction, Request, Response} from "express";
import {ErrorCodes, NotFoundError} from "../errors";
import httpStatus from "http-status";

export class ErrorHandler {
    public static catchNotFound(req: Request, res: Response, next: NextFunction): void {
        next(new NotFoundError(ErrorCodes.NOT_FOUND));
    }

    public static catchError(err: any, req: Request, res: Response, next: NextFunction): void {
        if (err) {
            console.error(err);
            const statusCode: number = err.httpStatus || httpStatus.INTERNAL_SERVER_ERROR;
            res.status(statusCode).json({
                error: err.message,
                details: err.details || undefined,
                statusCode,
            });
        }
    }
}
