export default abstract class ValueObject<T> {
    public equals(object: ValueObject<T>) {
        if (object === undefined) {
            return false;
        }
        return this.getHash() === object.getHash();
    }
    protected abstract getHash(): string;
}
