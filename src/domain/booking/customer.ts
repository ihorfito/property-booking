import ValueObject from "../shared-kernel/value-object";

export interface CustomerProps {
    email: string;
    firstName: string;
    lastName: string;
}

export class Customer extends ValueObject<Customer> {
    private readonly props: CustomerProps;

    constructor(props: CustomerProps) {
        super();
        this.props = props;
    }

    get firstName() {
        return this.props.firstName;
    }
    get lastName() {
        return this.props.lastName;
    }
    get email() {
        return this.props.email;
    }

    protected getHash(): string {
        return JSON.stringify(this.props);
    }
}
