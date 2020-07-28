import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { PrimengModule } from './primeng.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, PrimengModule],
  exports: [MaterialModule, PrimengModule],
})
export class SharedModule {}
