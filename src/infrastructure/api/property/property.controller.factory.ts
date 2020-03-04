"use strict";
import {PropertyController} from "./property.controller";
import {ServiceFactory} from "../../../application/services/service.factory";

export class PropertyControllerFactory {
    static getController(): PropertyController {
        const property = ServiceFactory.getPropertyService();
        const booking = ServiceFactory.getBookingService();
        return new PropertyController(property, booking);
    }
}
