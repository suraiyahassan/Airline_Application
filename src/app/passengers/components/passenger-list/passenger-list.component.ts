import { Component, OnInit, ViewChild } from '@angular/core';
import { PassengersService } from '../../service/passengers.service';
import { Passenger } from '../../models/passenger.model';
import { SelectItem } from 'primeng/api';
import { Dropdown } from 'primeng/dropdown';

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
  yesOrNo: SelectItem[];
  ancillaryServiceOption: SelectItem[];
  mealServiceOption: SelectItem[];
  productOption: SelectItem[];

  // cars: SelectItem[];
  
  // selectedCar: string = 'BMW';


  
  // @ViewChild('dd') dropdown: Dropdown;
  constructor(private passengerService: PassengersService) {

    // this.cars = [
    //   { label: 'Car1', value: 'Car1' },
    //   { label: 'Car2', value: 'Car2' },
    // ];

    this.yesOrNo = [
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
    ];

    this.ancillaryServiceOption = [
      { label: 'Wifi', value: 'Wifi' },
      { label: 'Blanket', value: 'Blanket' },
      { label: 'Neck rest', value: 'Neck rest' },
    ];

    this.mealServiceOption = [
      { label: 'Veg', value: 'veg' },
      { label: 'Non-veg', value: 'Non-veg' },
      { label: 'Special', value: 'Special' },
    ];
    this.productOption = [
      { label: 'Book', value: 'Book' },
      { label: 'Earphone', value: 'Earphone' },
      { label: 'Watch', value: 'watch' },
    ];
  }

  ngOnInit(): void {
    this.passengerService.
    getAllPassengers().subscribe(
      passengers => {
      this.passengers = passengers;
    });

    // this.passengerService
    //   .getPassengerData()
    //   .then((passengers) => (this.passengers = passengers));

    this.cols = [
      { field: 'id', header: 'Passenger ID' },
      { field: 'passengerName', header: 'Passenger Name' },
      { field: 'address', header: 'Address' },
      { field: 'dob', header: 'DOB' },
      { field: 'passport', header: 'Passport' },
      { field: 'seatNo', header: 'Seat No' },
      { field: 'checkedIn', header: 'Checked-In' },
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
    // if (this.newPassenger) {
    //   passengers.push(this.passenger);
    // } else {
    //   passengers[
    //     this.passengers.indexOf(this.selectedPassenger)
    //   ] = this.passenger;
    // }

    if (this.newPassenger) {
      this.passengerService
        .savePassenger(this.passenger)
        .subscribe((passenger) => {
          passengers.push(passenger);
          console.log(passenger);
        });
    } else {
      this.passengerService
        .editPassenger(this.passenger)
        .subscribe((passenger) => {
          passengers[
            this.passengers.indexOf(this.selectedPassenger)
          ] = passenger;
        });
      // products[this.products.indexOf(this.selectedProduct)] = this.product;
    }

    this.passengers = passengers;
    this.passenger = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.passengers.indexOf(this.selectedPassenger);
    this.passengers = this.passengers.filter((val, i) => i !== index);
    this.passengerService.deletePassenger(this.passenger).subscribe();
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
