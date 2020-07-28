import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Car } from '../model/Car';
import { Part } from '../model/Part';
import { CarService } from '../services/CarService';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
 cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getCars();
    this.dataSource = new MatTableDataSource(this.cars);

  }
  displayedColumns: string[] = [ 'manufacturer', 'type', 'yearOfMaking', 'engineCode', 'superstructure'];
  dataSource = new MatTableDataSource(this.cars);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log('itt');
  }
  getCars() {
    this.carService.listCar().subscribe(cars => {
      this.cars = cars;
      this.dataSource.paginator = this.paginator;
      this.dataSource = new MatTableDataSource(this.cars);
    }, () => {
      alert("Hiba történt a konferencia listázás során");
    }
    );
  }
  deleteCar(application: Car) {
    this.carService.deleteCar(application).subscribe(() => {
      alert("A jelentkezés törlése sikeres");
      this.getCars();

    }, () => {
      alert("Hiba történt a jelentkezés törlése során");
      this.getCars();
    }
    );

  }
}