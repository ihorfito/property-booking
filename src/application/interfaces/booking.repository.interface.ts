import {Booking} from "../../domain/booking/booking";

export interface BookingRepositoryInterface {
    listByProperty(propertyId: string): Promise<Booking[]>;
    save(booking: Booking): Promise<void>;
}
