import httpStatus from "http-status";
import {AppError} from "./app.error";

export class ValidationError extends AppError {
    httpStatus = httpStatus.BAD_REQUEST;

    constructor(message: string) {
        super(message);
    }
}

