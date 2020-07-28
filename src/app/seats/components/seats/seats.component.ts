import { Component, OnInit } from '@angular/core';
import { SeatsService } from '../../service/seats.service';























export interface Seat {
  seatId?;
  seatNo?;
  passengerId?;
  passengerName?;
  chackedIn?;
  wheelChairRequired?;
  withInfant?;
}

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

 
  constructor(private seatService: SeatsService) {}



  ngOnInit(): void {

    this.seatService.getCarsSmall().then(seats => this.seats = seats);

    this.cols = [
          { field: 'seatId', header: 'seatId' },
          { field: 'seatNo', header: 'seatNo' },
          { field: 'passengerId', header: 'passengerId' },
          { field: 'passengerName', header: 'passengerName' },
          { field: 'chackedIn', header: 'chackedIn' },
          { field: 'wheelChairRequired', header: 'wheelChairRequired' },
          { field: 'withInfant', header: 'withInfant' }
      ];
  }


  showDialogToAdd() {
    this.newSeat = true;
    this.seat = {};
    this.displayDialog = true;
}

save() {
  const seats = [...this.seats];
  if (this.newSeat) {
      seats.push(this.seat);
  }
  else {
      seats[this.seats.indexOf(this.selectedSeat)] = this.seat;
  }

  this.seats = seats;
  this.seat = null;
  this.displayDialog = false;
}



delete() {
  const index = this.seats.indexOf(this.selectedSeat);
  this.seats = this.seats.filter((val, i) => i != index);
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
