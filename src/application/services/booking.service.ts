import {Booking} from "../../domain/booking/booking";
import {Customer} from "../../domain/booking/customer";
import {BookingServiceInterface} from "../../domain/booking/booking.service.interface";
import {BookingRepositoryInterface} from "../interfaces/booking.repository.interface";

export class BookingService implements BookingServiceInterface {
    private repo: BookingRepositoryInterface;

    constructor(bookingRepo: BookingRepositoryInterface) {
        this.repo = bookingRepo;
    }

    async bookProperty(options: {propertyId: string, firstName: string, lastName: string, email: string, startDate: Date, endDate: Date}): Promise<void> {
        const customer = new Customer({
            firstName: options.firstName,
            lastName: options.lastName,
            email: options.email,
        });
        const booking = Booking.create({
            customer,
            startDate: options.startDate,
            endDate: options.endDate,
            propertyId: options.propertyId,
        });

        await this.repo.save(booking);
    }
    async getBookings(propertyId: string): Promise<Booking[]> {
        return this.repo.listByProperty(propertyId);
    }
}

