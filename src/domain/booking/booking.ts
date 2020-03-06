import {Customer} from "./customer";
import {DateTimeRange} from "../shared-kernel/date-time-range";
import {Entity} from "../shared-kernel/entity";

export interface BookingProps {
    customer: Customer;
    startDate: Date;
    endDate: Date;
    propertyId: string;
}

export class Booking extends Entity<BookingProps> {
    private dateTimeRange: DateTimeRange;

    private constructor(properties: BookingProps, id?: string) {
        super(properties, id);
        this.setTimeRange(new DateTimeRange(this.properties.startDate, this.properties.endDate));
    }

    static create(properties: BookingProps, id?: string) {
        return new Booking(properties, id);
    }

    get bookingId() {
        return this.id;
    }

    get customer() {
        return this.properties.customer;
    }

    get propertyId() {
        return this.properties.propertyId;
    }

    setTimeRange(timeRange: DateTimeRange) {
        this.dateTimeRange = timeRange;
    }

    getTimeRange() {
        return this.dateTimeRange;
    }
}
