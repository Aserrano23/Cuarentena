import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelsiusPipe } from './celsius/celsius.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CelsiusPipe
  ],
  exports: [
    CelsiusPipe
  ]
})
export class PipesModule { }
