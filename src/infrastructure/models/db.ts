import {Sequelize, Options} from "sequelize";
import {BookingFactory} from "./booking";

export class Db {
    private static initModels(sequelize: Sequelize) {
        return {
            Booking: BookingFactory(sequelize)
        };
    }
    static init(options: Options) {
        const sequelize = new Sequelize(options);
        const models = Db.initModels(sequelize);
        return {
            ...models,
            sequelize,
        };
    }
}
