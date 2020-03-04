import ValueObject from "./value-object";

export class DateTimeRange extends ValueObject<DateTimeRange> {
    startDate: Date;
    endDate: Date;

    constructor(startDate: Date, endDate: Date) {
        super();
        this.startDate = startDate;
        this.endDate = endDate;
    }

    protected getHash(): string {
        return `${this.startDate.toISOString()} - ${this.endDate.toISOString()}`;
    }

    public overlaps(dateTimeRange: DateTimeRange): boolean {
        return this.startDate < dateTimeRange.endDate && this.endDate > dateTimeRange.startDate;
    }
}
