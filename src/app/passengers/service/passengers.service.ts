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
  
  url:string = 'http://localhost:8080'

  constructor(private http: HttpClient) {}

  
getPassengers(id):Observable<Passenger[]>{
  const url:string = `${this.url}/passengers${id}`;
  return this.http.get<Passenger[]>(url);
}

savePassenger(passenger: Passenger,id){
  const url:string = `${this.url}/passengers${id}`;
  return this.http.post(url, passenger, httpOptions);
}

editPassenger(passenger: Passenger,id,passengerId) {
  const url:string = `${this.url}/passengers${id}/${passengerId}`;
    return this.http.put(url, passenger, httpOptions);
}
deletePassenger(passenger:Passenger,id,passengerId):Observable<Passenger> {
  const url = `${this.url}/passengers${id}/${passengerId}`;
  return this.http.delete<Passenger>(url, httpOptions);
}


}





























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


  
// getAllPassengers():Observable<Passenger[]>{
//   return this.http.get<Passenger[]>(this.url);
// }


// savePassenger(passenger: Passenger):Observable<Passenger>{
//   return this.http.post<Passenger>(this.url, passenger, httpOptions);
// }


// editPassenger(passenger: Passenger):Observable<any> {
//   const url = `${this.url}/${passenger.id}`;
//   return this.http.put(url, passenger, httpOptions);
// }
// deletePassenger(passenger:Passenger):Observable<Passenger> {
//   const url = `${this.url}/${passenger.id}`;
//   return this.http.delete<Passenger>(url, httpOptions);
// }



