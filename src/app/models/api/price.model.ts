import { Deserializable } from "../deserializable";

export class Price implements Deserializable {

    unit: string = ""
    amount: number = 0
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

}

export interface PriceInterface {
    unit: string;
    amount: number;
}