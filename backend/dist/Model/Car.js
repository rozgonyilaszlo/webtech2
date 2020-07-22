"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Part_1 = require("./Part");
var Car = /** @class */ (function () {
    function Car(car) {
        this._id = car._id;
        this.manufacturer = car.manufacturer;
        this.type = car.type;
        this.yearOfMaking = car.yearOfMaking;
        this.engineCode = car.engineCode;
        this.superstructure = car.superstructure;
        if (car.parts) {
            this.parts = [];
            for (var i = 0; i < car.parts.length; i++) {
                this.parts.push(new Part_1.Part(car.parts[i]));
            }
        }
    }
    return Car;
}());
exports.Car = Car;
