import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seat } from '../components/seats/seats.component';

@Injectable({
  providedIn: 'root',
})
export class SeatsService {
  brands: string[] = [
    'Audi',
    'BMW',
    'Fiat',
    'Ford',
    'Honda',
    'Jaguar',
    'Mercedes',
    'Renault',
    'Volvo',
    'VW',
  ];

  colors: string[] = [
    'Black',
    'White',
    'Red',
    'Blue',
    'Silver',
    'Green',
    'Yellow',
  ];

  constructor(private http: HttpClient) {}

  getCarsSmall() {
    return (
      this.http
        .get<any>('assets/seats-data.json')
        .toPromise()
        // tslint:disable-next-line: no-angle-bracket-type-assertion
        .then((res) => <Seat[]>res.data)
        .then((data) => {
          return data;
        })
    );
  }
}
