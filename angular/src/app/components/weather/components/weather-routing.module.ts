import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherContainerComponent } from '../layout/container/weather-container.component';
import { AuthGuardService } from '../../../core/authorization/auth-guard.service';

const weatherRoutes: Routes = [
  {
    path: '',
    component: WeatherContainerComponent,
    children: [
      { path: 'search', component: WeatherSearchComponent },
      { path: 'info/:cityName', component: WeatherCardComponent, canActivate: [AuthGuardService] }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(weatherRoutes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
