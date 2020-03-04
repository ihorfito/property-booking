import {Router} from "express";

export abstract class AppRouter {
    abstract getRouter(): Router;
}
