import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Meal } from '../models/meal.model';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  constructor(private http: HttpClient) {}
  url:string = 'http://localhost:8080/meals'


  
getAllMeals():Observable<Meal[]> {
  return this.http.get<Meal[]>(this.url);
}

saveMeal(meal: Meal):Observable<Meal>{
  return this.http.post<Meal>(this.url, meal, httpOptions);
}

editMeal(meal: Meal):Observable<any> {
  const url = `${this.url}/${meal.mealId}`;
  return this.http.put(url, meal, httpOptions);
}
deleteMeal(meal:Meal):Observable<Meal> {
  const url = `${this.url}/${meal.mealId}`;
  return this.http.delete<Meal>(url, httpOptions);
}

}
