import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Flight } from './models/flight.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root',
})
export class FlightService {
    
  url:string = 'http://localhost:8080/flights'
  constructor(private http: HttpClient) {}

  
getAllFlights():Observable<Flight[]> {
  return this.http.get<Flight[]>(this.url);
}

saveFlight(flight: Flight):Observable<Flight>{
  return this.http.post<Flight>(this.url, flight, httpOptions);
}

editFlight(flight: Flight):Observable<any> {
  const url = `${this.url}/${flight.id}`;
  return this.http.put(url, flight, httpOptions);
}
deleteFlight(flight:Flight):Observable<Flight> {
  const url = `${this.url}/${flight.id}`;
  return this.http.delete<Flight>(url, httpOptions);
}

}
