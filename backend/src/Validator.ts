
import { Error } from "./Model/Error";
import { Car } from "./Model/Car";
import { Part } from "./Model/Part";

export class Validator {
  static carsPostError(car: Car): Error[] {
    let errors: Error[] = [];
    console.log(car);

    if (!car) {
      errors.push(new Error("car", "Az autó adatait kötelező megadni!"));
      return errors;
    }
    if (!car.manufacturer) {
      errors.push(
        new Error("car.manufacturer", "A gyártó kitöltése kötelező!")
      );
    }
    if (!car.type) {
      errors.push(
        new Error("car.type", "Az autó típusát kötelező megadni!")
      );
    }
    if (!car.yearOfMaking) {
      errors.push(
        new Error("car.yearOfMaking", "A gyártási évet kötelező megadni!")
      );
    }
    if (!car.engineCode) {
      errors.push(
        new Error("car.engineCode", "A motorkódot kötelező megadni!")
      );
    }
  }
  static partPostError(part: Part[]): Error[] {
    let errors: Error[] = [];
    if (!part) {
      errors.push(new Error("part", "Alkatrész hozzáadása kötelező!"));
      return errors;
    }
    for (let i = 0; i < part.length; i++) {
      if (!part[i]) {
        errors.push(
          new Error("part", "Alkatrész hozzáadása kötelező")
        );
      } else {
        if (!part[i].name) {
          errors.push(
            new Error("part.name", "Az alkatrész nevét kötelező megadni!")
          );
        }
        if (!part[i].manufacturer) {
          errors.push(
            new Error("part.manufacturer", "A gyártómegadása kötelező!")
          );
        }
        if (!part[i].price) {
          errors.push(
            new Error("part.price", "Az ár megadása kötelező!")
          );
        }        
      }
    }
    return errors;
  }
}
