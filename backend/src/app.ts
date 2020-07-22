import * as express from "express";
import * as cors from "cors";
import { Car } from "./Model/Car";

import { Error } from './Model/Error';
import { Validator } from "./Validator";
import { insertCar, listCar, deleteCar, createCar } from "./Services/CarService";
import { createDB } from "./Services/DBService";

export const app = express()

const bodyParser = require('body-parser')
const url = "mongodb://localhost:27017/bead";
const databaseName = "bead";

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.options('*', cors());


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
});

app.post('/cars', async function (req, res) {
    const car: Car = new Car(req.body);
    let errors: Error[] = [];

    errors.push.apply(errors, Validator.carsPostError(car));
    console.log(errors);
    if (errors.length > 0) {
        console.log(errors);
        return res.status(500).send(errors);
    }
    try {
        await insertCar(car);
    } catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }

    return res.status(200).send();

});

app.get('/cars', async function (req, res) {
    let cars: Car[] = [];
    try {
        cars = await listCar();
    } catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }

    return res.status(200).send(cars);
});

app.delete('/cars/:carId', async function (req, res) {
    const carId = req.params.carId;
    try {
        await deleteCar(carId);
    } catch (e) {
        return res.status(500).send(e);
    }

    return res.status(200).send();
});