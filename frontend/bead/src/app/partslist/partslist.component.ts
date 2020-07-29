import { Component, OnInit, ElementRef, ViewChild, ViewChildren, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Car } from '../model/Car';
import { Part } from '../model/Part';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { CarService } from '../services/CarService';
import { Observable, from } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-partslist',
  templateUrl: './partslist.component.html',
  styleUrls: ['./partslist.component.css']
})
export class PartslistComponent implements OnInit {
  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getCars();
    this.dataSource = new MatTableDataSource(this.cars);

  }
  displayedColumns: string[] = ['manufacturer', 'type', 'yearOfMaking', 'engineCode', 'superstructure', 'parts'];
  dataSource = new MatTableDataSource(this.cars);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getCars() {
    this.carService.listCar().subscribe(cars => {
      this.cars = cars;
      this.dataSource.paginator = this.paginator;
      this.dataSource = new MatTableDataSource(this.cars);
    }, () => {
      alert("Hiba történt az autók betöltése során.");
    }
    );
  }
}