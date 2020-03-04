import {Coordinates} from "../shared-kernel/coordinates";
import {Property} from "./property";

export interface PropertyServiceInterface {
    listByCoordinates(coordinates: Coordinates): Promise<Property[]>;
}
