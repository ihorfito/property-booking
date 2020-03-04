import uuid from "uuid/v4";

export abstract class Entity<T> {
    protected readonly id: string;
    protected readonly properties: T;

    protected constructor(properties: T, id?: string) {
        this.id = id || uuid();
        this.properties = properties;
    }

    public equals(obj: Entity<T>): boolean {
        return this.id === obj.id;
    }
}
