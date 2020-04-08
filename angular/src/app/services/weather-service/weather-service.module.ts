import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from './weather.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [WeatherService]
})
export class WeatherServiceModule { }
