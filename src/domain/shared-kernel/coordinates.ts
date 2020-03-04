import ValueObject from "./value-object";

export interface LatLongInterface {
    readonly latitude: number;
    readonly longitude: number;
}

export class Coordinates extends ValueObject<LatLongInterface> {
    private readonly props: LatLongInterface;

    private constructor(props: LatLongInterface) {
        super();
        this.props = props;
    }

    static of(latitude: number, longitude: number) {
        return new Coordinates({latitude, longitude});
    }

    static fromString(at: string) {
        const [lat, long]= at.split(",");
        return new Coordinates({
            latitude: Number(lat),
            longitude: Number(long)
        });
    }

    get lat() {
        return this.props.latitude;
    }

    get long() {
        return this.props.longitude;
    }

    protected getHash(): string {
        return JSON.stringify(this.props);
    }
}

