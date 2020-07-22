import { Part } from './Part';

export class Car {
    _id: string;
    manufacturer: string;
    type: string;
    yearOfMaking: number;
    engineCode: string;
    superstructure: string;
    parts: Part[];
    constructor(car: any) {
        this._id = car._id;
        this.manufacturer = car.manufacturer
        this.type = car.type;
        this.yearOfMaking = car.yearOfMaking;
        this.engineCode = car.engineCode;
        this.superstructure = car.superstructure;
        if (car.parts) {
            this.parts = [];
            for (let i = 0; i < car.parts.length; i++) {
                this.parts.push(new Part(car.parts[i]));
            }
        }
    }
}