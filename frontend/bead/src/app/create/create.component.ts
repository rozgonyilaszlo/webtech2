import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Car } from '../model/Car';
import { Part } from '../model/Part';
import { CarService } from '../services/CarService';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  car: Car = new Car();
  part: Part = new Part();

  createdParts: Part[] = [];
  createdPartsSource: MatTableDataSource<Part> = new MatTableDataSource([]);

  @ViewChild('createCarForm', { static: true, read: ElementRef }) createCarForm: ElementRef;
  @ViewChild('partForm', { static: true, read: ElementRef }) partForm: ElementRef;
  @ViewChild('partsTable', { static: true }) partsTable: MatTable<any>;
  displayedColumnsParts: string[] = ['name', 'productGroup', 'manufacturer', 'price', 'deletePart'];
  dataSourceParts = new MatTableDataSource(this.createdParts);
 
  @ViewChild(MatPaginator, { static: true }) paginatorCars: MatPaginator;
  @ViewChild('TablePartPaginator', { static: true }) tablePartPaginator: MatPaginator;
  @ViewChild('TableCarPaginator', { static: true }) tableCarPaginator: MatPaginator;
  
  constructor(private carService: CarService) {
    this.initCarValues();
  }

  ngOnInit() {
  }

  initCarValues() {
    this.car = new Car();
    this.part = new Part();
    this.createdParts = [];
  }

  createCar() {
    if (this.createdParts.length == 0) {
      alert('Adjon meg legalább egy alkatrészt')
      return;
    }
    console.log(this.car);
    this.carService.addCar(this.car).subscribe(
      () => {
        this.initCarValues();
        this.createCarForm.nativeElement.reset();
        this.createdPartsSource.data = [...this.createdParts];
      }, (error) => {
        alert('Hiba a létrehozás során');
      }
    );
  }

  addNewPart() {
    this.createdParts.push(this.part);
    this.part = new Part();
    this.partForm.nativeElement.reset();
    this.createdPartsSource.data = [...this.createdParts];
  }
  removePart(part: Part) {
    this.createdParts = this.createdParts.filter(actualPart => actualPart != part);
    this.createdPartsSource.data = [...this.createdParts];
  }

  uploadCarAndParts() {
    if (this.createdParts.length > 0) {
      this.car.parts = this.createdParts;
    }
    else {
      alert('Adjon meg legalább egy alkatrészt az autóhoz')
      return;
    }
    this.carService.addCar(this.car).subscribe(
      () => {
        this.initCarValues();
        this.createCarForm.nativeElement.reset();
        this.createdPartsSource.data = [...this.createdParts];
      }, (error) => {
        alert('Hiba az adatok felvétel során');
      }
    );
  }
}