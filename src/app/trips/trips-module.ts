import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripListComponent } from './pages/trip-list/trip-list';
import { TripForm } from './pages/trip-form/trip-form';
import { TripsRoutingModule } from './trips-routing-module';

@NgModule({
  declarations: [TripListComponent, TripForm],
  imports: [CommonModule, TripsRoutingModule],
})
export class TripsModule {}
