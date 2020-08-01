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
  seatTypeOption: SelectItem[];

  constructor(private seatService: SeatsService) {
    this.yesOrNo = [
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
    ];
    this.seatTypeOption=[
      { label: 'Window', value: 'Window' },
      { label: 'Middle', value: 'Middle' },
      { label: 'Aisle', value: 'Aisle' }
    ];
  }

  ngOnInit(): void {
    this.seatService.getAllSeats().subscribe((seats) => {
      this.seats = seats;
    });

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

  showDialogToAdd() {
    this.newSeat = true;
    this.seat = {};
    this.displayDialog = true;
  }

  save() {
    const seats = [...this.seats];
    if (this.newSeat) {
      if (this.newSeat) {
        this.seatService.saveSeat(this.seat).subscribe((seat) => {
          seats.push(seat);
        });
      }
    } else {
      this.seatService.editSeat(this.seat).subscribe((seat) => {
        seats[this.seats.indexOf(this.selectedSeat)] = seat;
      });
    }

    this.seats = seats;
    this.seat = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.seats.indexOf(this.selectedSeat);
    this.seats = this.seats.filter((val, i) => i !== index);
    this.seatService.deleteSeat(this.seat).subscribe();

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
