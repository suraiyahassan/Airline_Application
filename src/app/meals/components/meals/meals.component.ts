import { Component, OnInit } from '@angular/core';
import { Meal } from '../../models/meal.model';
import { MealsService } from '../../service/meals.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
})
export class MealsComponent implements OnInit {
  displayDialog: boolean;

  meal: Meal = {};

  selectedMeal: Meal;

  newMeal: boolean;

  meals: Meal[];

  cols: any[];

  constructor(private mealService: MealsService) {}

  ngOnInit(): void {
    this.mealService.getAllMeals().subscribe((meals) => {
      this.meals = meals;
    });
    // this.mealService.getMealData().then((meals) => (this.meals = meals));

    this.cols = [
      { field: 'mealId', header: 'Meal ID' },
      { field: 'mealName', header: 'Meal Name' },
      { field: 'mealType', header: 'Type' },
      { field: 'price', header: 'Price' },
    ];
  }

  showDialogToAdd() {
    this.newMeal = true;
    this.meal = {};
    this.displayDialog = true;
  }

  save() {
    const meals = [...this.meals];
    // if (this.newMeal) {
    //   meals.push(this.meal);
    // } else {
    //   meals[this.meals.indexOf(this.selectedMeal)] = this.meal;
    // }

    if (this.newMeal) {
      this.mealService.saveMeal(this.meal).subscribe(
        meal =>
        {
          meals.push(meal);
        }); 
      }
      else {
        this.mealService.editMeal(this.meal).subscribe(
          meal => 
          {
          meals[this.meals.indexOf(this.selectedMeal)] = meal;
          }
          );
      }

    this.meals = meals;
    this.meal = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.meals.indexOf(this.selectedMeal);
    this.meals = this.meals.filter((val, i) => i !== index);
    this.mealService.deleteMeal(this.meal).subscribe();

    this.meal = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newMeal = false;
    this.meal = this.cloneSeat(event.data);
    this.displayDialog = true;
  }

  cloneSeat(p: Meal): Meal {
    const meal = {};
    // tslint:disable-next-line: forin
    for (const prop in p) {
      meal[prop] = p[prop];
    }
    return meal;
  }
}
