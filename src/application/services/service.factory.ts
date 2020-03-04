import {BookingRepository} from "../../infrastructure/repositories/booking/booking.repository";
import {BookingService} from "./booking.service";
import {PropertyRepository} from "../../infrastructure/repositories/property/property.repository";
import {PropertyService} from "./property.service";

export class ServiceFactory {
    static getBookingService() {
        const repo = BookingRepository.create();
        return new BookingService(repo);
    }
    static getPropertyService() {
        const repo = PropertyRepository.create();
        return new PropertyService(repo);
    }
}
