import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ancillary } from '../models/ancillary.model';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AncillaryService {
  url:string = 'http://localhost:8080/ancillaryServices'
  constructor(private http: HttpClient) {}


   
getAllAncillaries():Observable<Ancillary[]> {
  return this.http.get<Ancillary[]>(this.url);
}

saveAncillary(ancillary: Ancillary):Observable<Ancillary>{
  return this.http.post<Ancillary>(this.url, ancillary, httpOptions);
}

editAncillary(ancillary: Ancillary):Observable<any> {
  const url = `${this.url}/${ancillary.id}`;
  return this.http.put(url, ancillary, httpOptions);
}
deleteAncillary(ancillary:Ancillary):Observable<Ancillary> {
  const url = `${this.url}/${ancillary.id}`;
  return this.http.delete<Ancillary>(url, httpOptions);
}



}
