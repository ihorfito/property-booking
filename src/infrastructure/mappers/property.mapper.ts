import {Property} from "../../domain/property/property";
import {Coordinates} from "../../domain/shared-kernel/coordinates";

export interface PropertyDTO {
    title: string;
    propertyId: string;
    coordinates: {
        latitude: number;
        longitude: number;
    }
}

export interface PlaceInterface {
    placeId: string,
    name: string,
    coordinates: Coordinates,
}

export class PropertyMapper {
    static toDTO(obj: Property): PropertyDTO {
        return {
            title: obj.title,
            propertyId: obj.propertyId,
            coordinates: {
                latitude: obj.coordinates.lat,
                longitude:  obj.coordinates.long
            }
        };
    }

    static toDomain(obj: PlaceInterface): Property {
        return Property.create({title: obj.name, position: obj.coordinates}, obj.placeId);
    }
}
