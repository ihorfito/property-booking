import axios from "axios";
import config from "config";
import {HereMapper} from "./here.mapper";
import {PlaceInterface} from "../../../mappers/property.mapper";

export interface HereServiceInterface {
    listProperties(lat: number, long: number): Promise<PlaceInterface[]>,
}
interface HereResponse {
    results: {
        next: string,
        items: HerePlaceDTO[]
    }
}
export interface HerePlaceDTO {
    position: [number, number],
    distance: number,
    title: string,
    id: string,
    href: string,
}

export class HereService implements HereServiceInterface {
    async listProperties(lat: number, long: number): Promise<any> {
        const url = `${config.get("place.here.api")}/browse?at=${lat},${long}&apiKey=${config.get("place.here.apiKey")}&cat=Hotel`;
        const places = await axios.get<HereResponse>(url);
        return places.data.results.items.map((place) => HereMapper.responseMapper(place));
    }
}
