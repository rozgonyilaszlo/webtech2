
import { mongoService } from "./MongoService";
import { Car } from "../Model/Car";
import { ObjectId } from "mongodb";

export async function createCar() {
    await mongoService.createCollection("Car");
}
export async function insertCar(car: Car) {
    await mongoService.insertOneCollection("Car", car);
}
export async function listCar(): Promise<Car[]> {
    return await mongoService.listCollection("Car", {}, {});
}
export async function deleteCar(carId: string) {
    await mongoService.deleteOneCollection("Car", { _id: new ObjectId(carId) });
}
