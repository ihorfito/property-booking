import {PropertyController} from "./property.controller";
import {AppRouter} from "../app.router";
import {Router} from "express";
import {PropertyControllerFactory} from "./property.controller.factory";

const router = Router();

export class PropertyRouter extends AppRouter {
    private propertyController: PropertyController;

    constructor() {
        super();
        this.propertyController = PropertyControllerFactory.getController();
    }

    public getRouter(): Router {
        router.get("/properties",
            (req, res, next) => this.propertyController.listProperties(req, res, next)
        );
        router.get("/properties/:propertyId/bookings",
            (req, res, next) => this.propertyController.listBookings(req, res, next)
        );
        router.post("/bookings",
            (req, res, next) => this.propertyController.bookProperty(req, res, next)
        );
        return router;
    }
}
