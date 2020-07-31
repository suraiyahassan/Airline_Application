import { Component, OnInit } from '@angular/core';
import { SeatsService } from '../../service/seats.service';
import { Seat } from '../../models/seat.model';
import { SelectItem } from 'primeng/api';

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

  constructor(private seatService: SeatsService) {
    this.yesOrNo = [
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
    ];
  }

  ngOnInit(): void {
    this.seatService.getSeatData().then((seats) => (this.seats = seats));

    this.cols = [
      { field: 'seatNo', header: 'Seat No' },
      { field: 'seatType', header: 'Seat Type' },
      { field: 'passengerId', header: 'Passenger ID' },
      { field: 'passengerName', header: 'Passenger Name' },
      { field: 'checkedIn', header: 'Checked-In' },
      { field: 'wheelChairRequired', header: 'Wheel Chair' },
      { field: 'withInfant', header: 'With Infant' },
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
    } else {
      seats[this.seats.indexOf(this.selectedSeat)] = this.seat;
    }

    this.seats = seats;
    this.seat = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.seats.indexOf(this.selectedSeat);
    this.seats = this.seats.filter((val, i) => i !== index);
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
