import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";

export interface BookingModelAttributes {
    readonly id: string;
    startDate: Date;
    endDate: Date;
    customerFirstName: string;
    customerLastName: string;
    customerEmail: string;
    propertyId: string;
}

export interface BookingModel extends Model, BookingModelAttributes{}

export type BookingModelStatic = typeof Model & (new (values?: object, options?: BuildOptions) => BookingModel);

export function BookingFactory(sequelize: Sequelize) {
    return <BookingModelStatic>sequelize.define("Booking", {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
        },
        startDate: {
            type: DataTypes.DATE,
        },
        endDate: {
            type: DataTypes.DATE,
        },
        customerFirstName: {
            type: DataTypes.STRING,
        },
        customerLastName: {
            type: DataTypes.STRING,
        },
        customerEmail: {
            type: DataTypes.STRING,
        },
        propertyId: {
            type: DataTypes.STRING,
        },
    });
}
