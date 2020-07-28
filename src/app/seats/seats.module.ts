import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatsRoutingModule } from './seats-routing.module';
import { SeatsComponent } from './components/seats/seats.component';


import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';

@NgModule({
  declarations: [SeatsComponent],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,



    CommonModule,
    SharedModule,
    SeatsRoutingModule
  ],
  exports:[
    SeatsComponent
  ]
})
export class SeatsModule { }
