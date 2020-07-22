export class Part {
    _id: string;
    name: string;
    productGroup: string;
    manufacturer: string;
    price: number;
    constructor(part: any) {
        this._id = part._id;
        this.name = part.name;
        this.productGroup = part.productGroup;
        this.manufacturer = part.manufacturer;
        this.price = part.price;
    }
}