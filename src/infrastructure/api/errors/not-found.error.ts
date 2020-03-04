import httpStatus from "http-status";
import {AppError} from "./app.error";

export class NotFoundError extends AppError {
    httpStatus = httpStatus.NOT_FOUND;

    constructor(message: string) {
        super(message);
    }
}

