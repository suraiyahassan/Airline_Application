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
  
  url:string = 'http://localhost:8080/seat1'
  constructor(private http: HttpClient) {}

  
getAllSeats():Observable<Seat[]> {
  return this.http.get<Seat[]>(this.url);
}

saveSeat(seat: Seat):Observable<Seat>{
  return this.http.post<Seat>(this.url, seat, httpOptions);
}

editSeat(seat: Seat):Observable<any> {
  const url = `${this.url}/${seat.id}`;
  return this.http.put(url, seat, httpOptions);
}
deleteSeat(seat:Seat):Observable<Seat> {
  const url = `${this.url}/${seat.id}`;
  return this.http.delete<Seat>(url, httpOptions);
}


  
}
