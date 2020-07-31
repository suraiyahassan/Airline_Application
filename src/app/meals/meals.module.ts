import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealsRoutingModule } from './meals-routing.module';
import { MealsComponent } from './components/meals/meals.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MealsComponent],
  imports: [
    CommonModule,
    MealsRoutingModule,
    SharedModule
  ],
  exports: [
    MealsComponent
  ]
})
export class MealsModule { }

