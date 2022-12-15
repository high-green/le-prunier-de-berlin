import { Deserializable } from "../deserializable";

export class Pagination implements Deserializable {
    currentPage: number = 0
    totalPages: number = 0
    pageCount: number = 0//Maximum number of items in page

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}