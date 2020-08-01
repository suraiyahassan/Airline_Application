import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Passenger } from '../models/passenger.model';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root',
})
export class PassengersService {
  
  url:string = 'http://localhost:8080/passengers'

  constructor(private http: HttpClient) {}

  // getPassengerData() {
  //   return (
  //     this.http
  //       .get<any>('http://localhost:8080/passengers')
  //       .toPromise()
  //       // tslint:disable-next-line: no-angle-bracket-type-assertion
  //       .then((res) => <Passenger[]> res.data)
  //       .then((data) => {
  //         return data;
  //       })
  //   );
  // }


  
getAllPassengers():Observable<Passenger[]>{
  return this.http.get<Passenger[]>(this.url);
}


savePassenger(passenger: Passenger):Observable<Passenger>{
  return this.http.post<Passenger>(this.url, passenger, httpOptions);
}


editPassenger(passenger: Passenger):Observable<any> {
  const url = `${this.url}/${passenger.id}`;
  return this.http.put(url, passenger, httpOptions);
}
deletePassenger(passenger:Passenger):Observable<Passenger> {
  const url = `${this.url}/${passenger.id}`;
  return this.http.delete<Passenger>(url, httpOptions);
}




}


