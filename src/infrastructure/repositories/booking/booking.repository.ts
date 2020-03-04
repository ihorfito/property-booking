import {db, DBInterface} from "../../models";
import {BookingMapper} from "../../mappers/booking.mapper";
import {BookingModel} from "../../models/booking";
import {Booking} from "../../../domain/booking/booking";
import {BookingRepositoryInterface} from "../../../application/interfaces/booking.repository.interface";


export class BookingRepository implements BookingRepositoryInterface {
    private database: DBInterface;

    private constructor(db: DBInterface) {
        this.database = db;
    }

    static create() {
        return new BookingRepository(db);
    }

    async listByProperty(propertyId: string): Promise<Booking[]> {
        const bookings: BookingModel[] = await this.database.Booking.findAll({
            where: {
                propertyId,
            }
        });
        return bookings.map(BookingMapper.toDomain);
    }

    async save(obj: Booking): Promise<void> {
        const booking = await this.database.Booking.findByPk(obj.bookingId);
        if (booking) {
            await booking.update(BookingMapper.toPersistence(obj));
        } else {
            await this.database.Booking.create(BookingMapper.toPersistence(obj));
        }
    }
}
