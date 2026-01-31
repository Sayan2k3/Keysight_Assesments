import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './home/home';
import { Flights } from './flights/flights';
import { FlightDetails } from './flight-details/flight-details';
import { Admin } from './admin/admin';
import { AddFlight } from './admin/add-flight/add-flight';
import { ManageFlights } from './admin/manage-flights/manage-flights';
import { NotFound } from './not-found/not-found';

import { EditFlight } from './admin/edit-flight/edit-flight';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'flights', component: Flights },
  { path: 'flights/:id', component: FlightDetails },
  {
    path: 'admin',
    component: Admin,
    children: [
      { path: 'add-flight', component: AddFlight },
      { path: 'manage-flights', component: ManageFlights },
      { path: 'edit-flight/:id', component: EditFlight }
    ]
  },
  { path: '**', component: NotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
