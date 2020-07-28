import { Component, OnInit } from '@angular/core';
import { PassengersService } from '../../service/passengers.service';
import { Passenger } from '../../models/passenger.model';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss'],
})
export class PassengerListComponent implements OnInit {
  displayDialog: boolean;

  passenger: Passenger = {};

  selectedPassenger: Passenger;

  newPassenger: boolean;

  passengers: Passenger[];

  cols: any[];

  constructor(private passengerService: PassengersService) {}


  ngOnInit(): void {
    this.passengerService
      .getPassengerData()
      .then(passengers => this.passengers = passengers);


    this.cols = [
      { field: 'passengerId', header: 'Passenger ID' },
      { field: 'passengerName', header: 'Passenger Name' },
      { field: 'address', header: 'Address' },
      { field: 'dob', header: 'DOB' },
      { field: 'passport', header: 'Passport' },
      { field: 'seatNo', header: 'Seat No' },
      { field: 'checkedIn', header: 'Chacked-In' },
      { field: 'wheelChairRequired', header: 'Wheel Chair' },
      { field: 'withInfant', header: 'With Infant' },
      { field: 'ancillaryService', header: 'Ancillary Service' },
      { field: 'meal', header: 'Meal' },
      { field: 'product', header: 'Product' },
    ];
  }

  showDialogToAdd() {
    this.newPassenger = true;
    this.passenger = {};
    this.displayDialog = true;
  }

  save() {
    const passengers = [...this.passengers];
    if (this.newPassenger) {
      passengers.push(this.passenger);
    } else {
      passengers[this.passengers.indexOf(this.selectedPassenger)] = this.passenger;
    }

    this.passengers = passengers;
    this.passenger = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.passengers.indexOf(this.selectedPassenger);
    this.passengers = this.passengers.filter((val, i) => i != index);
    this.passenger = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newPassenger = false;
    this.passenger = this.cloneSeat(event.data);
    this.displayDialog = true;
  }

  cloneSeat(p: Passenger): Passenger {
    const passenger = {};
    // tslint:disable-next-line: forin
    for (const prop in p) {
      passenger[prop] = p[prop];
    }
    return passenger;
  }
}
