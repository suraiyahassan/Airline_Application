import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Passenger } from '../models/passenger.model';

@Injectable({
  providedIn: 'root',
})
export class PassengersService {
  constructor(private http: HttpClient) {}

  getPassengerData() {
    return (
      this.http
        .get<any>('assets/passenger-data.json')
        .toPromise()
        // tslint:disable-next-line: no-angle-bracket-type-assertion
        .then((res) => <Passenger[]>res.data)
        .then((data) => {
          return data;
        })
    );
  }
}
