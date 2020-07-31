import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Flight } from './models/flight.model';


@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private http: HttpClient) {}

  getFlightData() {
    return this.http
      .get<any>('assets/flight-data.json')
      .toPromise()
      .then((res) => res.data as Flight[])
      .then((data) => {
        return data;
      });
  }
}
