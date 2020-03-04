import {Property} from "../../../domain/property/property";
import {HereService, HereServiceInterface} from "./acl/here.service";
import {PropertyMapper} from "../../mappers/property.mapper";
import {PropertyRepositoryInterface} from "../../../application/interfaces/property.repository.interface";

export class PropertyRepository implements PropertyRepositoryInterface {

    private readonly hereService: HereServiceInterface;

    private constructor(hereService: HereServiceInterface) {
        this.hereService = hereService;
    }

    static create() {
        const hereService = new HereService();
        return new PropertyRepository(hereService);
    }

    async listByLatLong(lat: number, long: number): Promise<Property[]> {
        const places = await this.hereService.listProperties(lat, long);
        return places.map(PropertyMapper.toDomain);
    }
}
