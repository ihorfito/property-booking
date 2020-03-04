import {Db} from "./db";
import config from "config";
import {BookingModelStatic} from "./booking";

export const db = Db.init({
    username: config.get("db.username"),
    host: config.get("db.host"),
    database: config.get("db.database"),
    password: config.get("db.password"),
    port: config.get("db.port"),
    dialect: "postgres"
});

export interface DBInterface {
    Booking: BookingModelStatic
}
