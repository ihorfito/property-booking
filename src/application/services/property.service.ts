import {PropertyServiceInterface} from "../../domain/property/property.service.interface";
import {Coordinates} from "../../domain/shared-kernel/coordinates";
import {Property} from "../../domain/property/property";
import {PropertyRepositoryInterface} from "../interfaces/property.repository.interface";

export class PropertyService implements PropertyServiceInterface {
    private repo: PropertyRepositoryInterface;

    constructor(repo: PropertyRepositoryInterface) {
        this.repo = repo;
    }

    async listByCoordinates(coordinates: Coordinates): Promise<Property[]> {
        return this.repo.listByLatLong(coordinates.lat, coordinates.long);
    }
}

