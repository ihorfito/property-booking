import {Booking, BookingProps} from "./booking";

export interface BookingServiceInterface {
    bookProperty(options: {propertyId: string, firstName: string, lastName: string, email: string, startDate: Date, endDate: Date}): Promise<void>;
    getBookings(propertyId: string): Promise<Booking[]>
}
