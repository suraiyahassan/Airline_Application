import { Component, OnInit, ViewChild } from '@angular/core';
import { PassengersService } from '../../service/passengers.service';
import { Passenger } from '../../models/passenger.model';
import { SelectItem } from 'primeng/api';
import { Dropdown } from 'primeng/dropdown';
import { FlightOption } from 'src/app/shared/model/flightOption.model';
import { FlightsService } from 'src/app/shared/services/flights.service';

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

  flightOptions: FlightOption[];

  selectFlightOption: FlightOption;

  constructor(private passengerService: PassengersService,private flightsService: FlightsService) {
    // this.flightOptions = [
    //   { name: 'FLIGHT_1', code: 'F1' },
    //   { name: 'FLIGHT_2', code: 'F2' },
    //   { name: 'FLIGHT_3', code: 'F3' },
    //   { name: 'FLIGHT_4', code: 'F4' },
    //   { name: 'FLIGHT_5', code: 'F5' },
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
    this.flightsService.getFlights().subscribe((flights:any) =>{
      this.flightOptions=flights
    } )
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

  showPassengers(id){
    console.log(id)
    this.passengerService.getPassengers(id).subscribe((passengers:Passenger[]) => {
      this.passengers = passengers;
    });
  }



  showDialogToAdd() {
    this.newPassenger = true;
    this.passenger = {};
    this.displayDialog = true;
  }

  save(id,passengerId) {
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
        .savePassenger(this.passenger,id)
        .subscribe((passenger) => {
          passengers.push(passenger);
          console.log(passenger);
        });
    } else {
      this.passengerService
        .editPassenger(this.passenger, id, passengerId)
        .subscribe((passenger) => {
          passengers[
            this.passengers.indexOf(this.selectedPassenger)
          ] = this.passenger;
        });
      // products[this.products.indexOf(this.selectedProduct)] = this.product;
    }

    this.passengers = passengers;
    this.passenger = null;
    this.displayDialog = false;
  }

  delete(id,passengerId) {
    const index = this.passengers.indexOf(this.selectedPassenger);
    this.passengers = this.passengers.filter((val, i) => i !== index);
    this.passengerService.deletePassenger(this.passenger, id,passengerId).subscribe();
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
