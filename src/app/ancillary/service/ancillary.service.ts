import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ancillary } from '../models/ancillary.model';

@Injectable({
  providedIn: 'root'
})
export class AncillaryService {
  constructor(private http: HttpClient) {}

  getAncillaryData() {
    return (
      this.http
        .get<any>('assets/ancillary-data.json')
        .toPromise()
        // tslint:disable-next-line: no-angle-bracket-type-assertion
        .then((res) => <Ancillary[]>res.data)
        .then((data) => {
          return data;
        })
    );
  }
}
