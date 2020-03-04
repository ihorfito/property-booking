import {Property} from "../../domain/property/property";
export interface PropertyRepositoryInterface{
    listByLatLong(lat: number, long: number): Promise<Property[]>;
}
