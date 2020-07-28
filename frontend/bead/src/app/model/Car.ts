import { Part } from './Part';

export class Car {
    _id: string;
    manufacturer: string;
    type: string;
    yearOfMaking: number;
    engineCode: string;
    superstructure: string;
    parts: Part[] = [];
}
