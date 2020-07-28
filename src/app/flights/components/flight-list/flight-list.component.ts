import { Component, OnInit, Input } from '@angular/core';

import { CarService } from '../../car.service';
import { MenuItem } from 'primeng/api';

export interface Car {
  vin?;
  year?;
  brand?;
  color?;
  price?;
  saleDate?;
}

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss'],
})
export class FlightListComponent implements OnInit {
  displayDialog: boolean;

  car: Car = {};

  selectedCar: Car;

  newCar: boolean;

  cars: Car[];

  cols: any[];

  constructor(private carService: CarService) { }

  ngOnInit() {
      this.carService.getCarsSmall().then(cars => this.cars = cars);

      this.cols = [
          { field: 'vin', header: 'Vin' },
          { field: 'year', header: 'Year' },
          { field: 'brand', header: 'Brand' },
          { field: 'color', header: 'Color' }
      ];
  }

  showDialogToAdd() {
      this.newCar = true;
      this.car = {};
      this.displayDialog = true;
  }

  save() {
      const cars = [...this.cars];
      if (this.newCar) {
          cars.push(this.car);
      }
      else {
          cars[this.cars.indexOf(this.selectedCar)] = this.car;
      }

      this.cars = cars;
      this.car = null;
      this.displayDialog = false;
  }

  delete() {
      const index = this.cars.indexOf(this.selectedCar);
      this.cars = this.cars.filter((val, i) => i != index);
      this.car = null;
      this.displayDialog = false;
  }

  onRowSelect(event) {
      this.newCar = false;
      this.car = this.cloneCar(event.data);
      this.displayDialog = true;
  }

  cloneCar(c: Car): Car {
      const car = {};
      // tslint:disable-next-line: forin
      for (const prop in c) {
          car[prop] = c[prop];
      }
      return car;
  }

}
