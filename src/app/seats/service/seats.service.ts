import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seat } from './../models/seat.model';

@Injectable({
  providedIn: 'root',
})
export class SeatsService {
  constructor(private http: HttpClient) {}

  getSeatData() {
    return (
      this.http
        .get<any>('assets/seats-data.json')
        .toPromise()
        // tslint:disable-next-line: no-angle-bracket-type-assertion
        .then((res) => <Seat[]> res.data)
        .then((data) => {
          return data;
        })
    );
  }
}
