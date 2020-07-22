"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Error_1 = require("./Model/Error");
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.carsPostError = function (car) {
        var errors = [];
        console.log(car);
        if (!car) {
            errors.push(new Error_1.Error("car", "Az autó adatait kötelező megadni!"));
            return errors;
        }
        if (!car.manufacturer) {
            errors.push(new Error_1.Error("car.manufacturer", "A gyártó kitöltése kötelező!"));
        }
        if (!car.type) {
            errors.push(new Error_1.Error("car.type", "Az autó típusát kötelező megadni!"));
        }
        if (!car.yearOfMaking) {
            errors.push(new Error_1.Error("car.yearOfMaking", "A gyártási évet kötelező megadni!"));
        }
        if (!car.engineCode) {
            errors.push(new Error_1.Error("car.engineCode", "A motorkódot kötelező megadni!"));
        }
    };
    Validator.partPostError = function (part) {
        var errors = [];
        if (!part) {
            errors.push(new Error_1.Error("part", "Alkatrész hozzáadása kötelező!"));
            return errors;
        }
        for (var i = 0; i < part.length; i++) {
            if (!part[i]) {
                errors.push(new Error_1.Error("part", "Alkatrész hozzáadása kötelező"));
            }
            else {
                if (!part[i].name) {
                    errors.push(new Error_1.Error("part.name", "Az alkatrész nevét kötelező megadni!"));
                }
                if (!part[i].manufacturer) {
                    errors.push(new Error_1.Error("part.manufacturer", "A gyártómegadása kötelező!"));
                }
                if (!part[i].price) {
                    errors.push(new Error_1.Error("part.price", "Az ár megadása kötelező!"));
                }
            }
        }
        return errors;
    };
    return Validator;
}());
exports.Validator = Validator;
