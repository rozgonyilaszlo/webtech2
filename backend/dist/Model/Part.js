"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Part = /** @class */ (function () {
    function Part(part) {
        this._id = part._id;
        this.name = part.name;
        this.productGroup = part.productGroup;
        this.manufacturer = part.manufacturer;
        this.price = part.price;
    }
    return Part;
}());
exports.Part = Part;
