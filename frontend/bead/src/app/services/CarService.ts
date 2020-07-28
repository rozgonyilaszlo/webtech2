import { Inject, Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { Car } from '../model/Car';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class CarService {
    cars: Car[] = [];
    baseURL: string = 'http://localhost:3000';
    constructor(private http: HttpClient) {

    }

    addCar(car: Car): Observable<Car> {
        return this.http.post<Car>(this.baseURL + '/cars', car);
    }
    updateCar(car: Car): Observable<Car> {
        return this.http.put<Car>(this.baseURL + '/cars', car);
    }
    deleteCar(car: Car): Observable<Car> {
        return this.http.delete<Car>(this.baseURL + '/cars/' + car._id);
    }
    listCar(): Observable<Car[]> {
        return this.http.get<Car[]>(this.baseURL + '/cars');
    }

}
