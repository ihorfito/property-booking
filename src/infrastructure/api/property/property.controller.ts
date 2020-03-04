import {NextFunction, Request, Response} from "express";
import httpStatus from "http-status";
import {PropertyValidation} from "./property.validation";
import RequestValidator = PropertyValidation.RequestValidator;
import {PropertyServiceInterface} from "../../../domain/property/property.service.interface";
import {Coordinates} from "../../../domain/shared-kernel/coordinates";
import {PropertyMapper} from "../../mappers/property.mapper";
import {BookingService} from "../../../application/services/booking.service";
import {BookingServiceInterface} from "../../../domain/booking/booking.service.interface";
import {BookingMapper} from "../../mappers/booking.mapper";

export class PropertyController {
    private propertyService: PropertyServiceInterface;
    private bookingService: BookingServiceInterface;

    constructor(property: PropertyServiceInterface, booking: BookingService) {
        this.propertyService = property;
        this.bookingService = booking;
    }

    async listProperties(req: Request, res: Response, next: NextFunction) {
        try {
            const at = RequestValidator.coordinates(req.query.at);
            const coordinates = Coordinates.fromString(at);
            const properties = await this.propertyService.listByCoordinates(coordinates);
            const result = properties.map(PropertyMapper.toDTO);
            res.status(httpStatus.OK).json(result);
        } catch (e) {
            next(e);
        }
    }

    async listBookings(req: Request, res: Response, next: NextFunction) {
        try {
            const id = RequestValidator.propertyId(req.params.propertyId);
            const bookings = await this.bookingService.getBookings(id);
            const result = bookings.map(BookingMapper.toDTO);
            res.status(httpStatus.OK).json(result);
        } catch (e) {
            next(e);
        }
    }

    async bookProperty(req: Request, res: Response, next: NextFunction) {
        try {
            const bookingParams = RequestValidator.booking(req.body);
            await this.bookingService.bookProperty(bookingParams);
            res.sendStatus(httpStatus.CREATED);
        } catch (e) {
            next(e);
        }
    }
}
