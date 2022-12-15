import { Deserializable } from "./deserializable";

export class Price implements Deserializable {
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
    unit: string = ""
    amount: number = 0
}

declare interface UnitVal {
    name: string;
}

export const UNITS: UnitVal[] = [
    { name: "Half Ounce (15 grams)" },
    { name: "Ounce (28 grams)" },
    { name: "Quarter Pound (114 grams)" },
    { name: "Half Pound (227 grams)" },
    { name: "Pound (454 grams)" }
]

export enum Unit {
    one = 'Half Ounce (15 grams)',
    two = 'Ounce (28 grams)',
    three = 'Quarter Pound (114 grams)',
    four = 'Half Pound (227 grams)',
    five = 'Pound (454 grams)',
}

export enum Unit {
    cartridgeHalf = 'Half Gram Cartridges',
    cartridgeFull = 'Full Gram Cartridges',
    cartridgeHalfFive = '5 Half Gram Cartridges',
    cartridgeFullFive = '5 Full Gram Cartridges',
    cartridgeHalfTen = '10 Half Gram Cartridges',
    cartridgeFullTen = '10 Full Gram Cartridges',
    roll = 'Pre Rolls',
    rollFive = '5 Pre Rolls',
    rollTen = '10 Pre Rolls',
    halfOunce = 'Half Ounce',
    ounce = 'Ounce',
    quarterPound = 'Quarter Pound',
    halfPound = 'Half Pound',
    pound = 'Pound',
    pen = 'Pen(s)',
}