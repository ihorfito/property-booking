import {Entity} from "../shared-kernel/entity";
import {Coordinates} from "../shared-kernel/coordinates";

export interface PropertyParams {
    title: string;
    position: Coordinates
}

export class Property extends Entity<PropertyParams> {

    private constructor(properties: PropertyParams, id?: string) {
        super(properties, id);
    }

    get propertyId() {
        return this.id;
    }

    get title() {
        return this.properties.title;
    }

    get coordinates() {
        return this.properties.position;
    }

    static create(properties: PropertyParams, id?: string) {
        return new Property(properties, id);
    }
}
