"use strict";

export abstract class AppError extends Error {
    public abstract httpStatus: number;
}

