import {HerePlaceDTO} from "./here.service";
import {Coordinates} from "../../../../domain/shared-kernel/coordinates";
import {PlaceInterface} from "../../../mappers/property.mapper";

export class HereMapper {
    static responseMapper(herePlace: HerePlaceDTO): PlaceInterface {
        return {
            placeId: herePlace.id,
            name: herePlace.title,
            coordinates: Coordinates.of(herePlace.position[0], herePlace.position[1]),
        };
    }
}
