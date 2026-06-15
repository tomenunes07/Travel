import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripListComponent } from './pages/trip-list/trip-list';
import { TripForm } from './pages/trip-form/trip-form';

const routes: Routes = [
  { path: '', component: TripListComponent },
  { path: 'new', component: TripForm },
  { path: 'edit/:id', component: TripForm }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripsRoutingModule {}
