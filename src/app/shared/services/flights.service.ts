import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  url:string = 'http://localhost:8080/flights'
  constructor(private http: HttpClient) {}

  
getFlights() {
  return this.http.get(this.url);
}

 
}
