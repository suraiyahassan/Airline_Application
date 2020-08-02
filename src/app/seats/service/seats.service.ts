import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Seat } from './../models/seat.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root',
})
export class SeatsService {
  
  url:string = 'http://localhost:8080'
  constructor(private http: HttpClient) {}

  
// getAllSeats():Observable<Seat[]> {
//   return this.http.get<Seat[]>(this.url);
// }

getSeats(id):Observable<Seat[]>{
  const url:string = `${this.url}/seats${id}`;
  return this.http.get<Seat[]>(url);
}

saveSeat(seat: Seat,id){
  const url:string = `${this.url}/seats${id}`;
  return this.http.post(url, seat, httpOptions);
}

editSeat(seat: Seat,id,seatId) {
  const url:string = `${this.url}/seats${id}/${seatId}`;
    return this.http.put(url, seat, httpOptions);
}
deleteSeat(seat:Seat,id,seatId):Observable<Seat> {
  const url = `${this.url}/seats${id}/${seatId}`;
  return this.http.delete<Seat>(url, httpOptions);
}


  
}
