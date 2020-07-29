import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meal } from '../models/meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  constructor(private http: HttpClient) {}

  getMealData() {
    return (
      this.http
        .get<any>('assets/meal-data.json')
        .toPromise()
        // tslint:disable-next-line: no-angle-bracket-type-assertion
        .then((res) => <Meal[]>res.data)
        .then((data) => {
          return data;
        })
    );
  }
}
