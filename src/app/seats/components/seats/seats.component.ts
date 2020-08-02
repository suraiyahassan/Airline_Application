import { Component, OnInit } from '@angular/core';
import { SeatsService } from '../../service/seats.service';
import { Seat } from '../../models/seat.model';
import { SelectItem } from 'primeng/api';
import { FlightOption } from 'src/app/shared/model/flightOption.model';
import { FlightsService } from 'src/app/shared/services/flights.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss'],
})
export class SeatsComponent implements OnInit {
  displayDialog: boolean;

  seat: Seat = {};

  selectedSeat: Seat;

  newSeat: boolean;

  seats: Seat[];

  cols: any[];
  yesOrNo: SelectItem[];
  seatTypeOption: SelectItem[];

  flightOptions: FlightOption[];

  selectFlightOption: FlightOption;

  constructor(private seatService: SeatsService, private flightsService: FlightsService) {
    // this.flightOptions = [
    //   { flightName: 'FLIGHT_1', id: 1 },
    //   { name: 'FLIGHT_2', code: 2 },
    //   { name: 'FLIGHT_3', code: 3 },
    //   { name: 'FLIGHT_4', code: 4 },
    //   { name: 'FLIGHT_5', code: 5 },
    // ];

    this.yesOrNo = [
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
    ];
    this.seatTypeOption = [
      { label: 'Window', value: 'Window' },
      { label: 'Middle', value: 'Middle' },
      { label: 'Aisle', value: 'Aisle' },
    ];
  }

  ngOnInit(): void {
    // this.seatService.getAllSeats().subscribe((seats) => {
    //   this.seats = seats["seats"];
    // });
    this.flightsService.getFlights().subscribe((flights:any) =>{
      this.flightOptions=flights
    } )
   

    this.cols = [
      { field: 'id', header: 'Seat No' },
      { field: 'seatType', header: 'Seat Type' },
      { field: 'passengerId', header: 'Passenger ID' },
      { field: 'passengerName', header: 'Passenger Name' },
      { field: 'checkedIn', header: 'Checked-In' },
      { field: 'wheelChairRequired', header: 'Wheel Chair' },
      { field: 'withInfant', header: 'With Infant' },
    ];
  }

  showSeats(id){
    console.log(id)
    this.seatService.getSeats(id).subscribe((seats:Seat[]) => {
      this.seats = seats;
    });
  }

  showDialogToAdd() {
    this.newSeat = true;
    this.seat = {};
    this.displayDialog = true;
  }

  save(id, seatId) {
    console.log(id);
    const seats = [...this.seats];
 
      if (this.newSeat) {
        this.seatService.saveSeat(this.seat,id).subscribe(() => {
          
        });
        seats.push(this.seat);
      }
     else {
      this.seatService.editSeat(this.seat,id, seatId).subscribe((seat) => {
       
      });
      seats[this.seats.indexOf(this.selectedSeat)] = this.seat;
    }

    this.seats = seats;
    this.seat = null;
    this.displayDialog = false;
  }

  delete(id,seatId) {
    const index = this.seats.indexOf(this.selectedSeat);
    this.seats = this.seats.filter((val, i) => i !== index);
    this.seatService.deleteSeat(this.seat, id,seatId).subscribe();

    this.seat = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newSeat = false;
    this.seat = this.cloneSeat(event.data);
    this.displayDialog = true;
  }

  cloneSeat(s: Seat): Seat {
    const seat = {};
    // tslint:disable-next-line: forin
    for (const prop in s) {
      seat[prop] = s[prop];
    }
    return seat;
  }
}
