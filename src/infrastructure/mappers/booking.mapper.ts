import {Booking} from "../../domain/booking/booking";
import {Customer} from "../../domain/booking/customer";
import {BookingModel, BookingModelAttributes} from "../models/booking";

export interface BookingDTO {
    id: string,
    customer: {
        firstName: string,
        lastName: string,
        email: string,
    }
    startDate: string,
    endDate: string,
    propertyId: string,
}

export class BookingMapper {
    static toPersistence(booking: Booking): BookingModelAttributes {
        return {
            id: booking.bookingId,
            startDate: booking.getTimeRange().startDate,
            endDate: booking.getTimeRange().endDate,
            customerFirstName: booking.customer.firstName,
            customerLastName: booking.customer.lastName,
            customerEmail: booking.customer.email,
            propertyId: booking.propertyId,
        };
    }

    static toDomain(bookingProps: BookingModel): Booking {
        return Booking.create({
            customer: new Customer({
                email: bookingProps.customerEmail,
                firstName: bookingProps.customerFirstName,
                lastName: bookingProps.customerLastName,
            }),
            startDate: bookingProps.startDate,
            endDate: bookingProps.endDate,
            propertyId: bookingProps.propertyId
        }, bookingProps.id);
    }

    static toDTO(bookingProps: Booking): BookingDTO {
        return {
            id: bookingProps.bookingId,
            customer: {
                email: bookingProps.customer.email,
                firstName: bookingProps.customer.firstName,
                lastName: bookingProps.customer.lastName,
            },
            startDate: bookingProps.getTimeRange().startDate.toISOString(),
            endDate: bookingProps.getTimeRange().endDate.toISOString(),
            propertyId: bookingProps.propertyId
        };
    }
}
