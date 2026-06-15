import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { AuthModule } from './auth/auth-module';
//import { TripsModule } from './trips/trips-module';
import { PreferencesModule } from './preferences/preferences-module';
import { DestinationsModule } from './destinations/destinations-module';
import { ItinerariesModule } from './itineraries/itineraries-module';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
  //  TripsModule,
    PreferencesModule,
    DestinationsModule,
    ItinerariesModule
  ],
  bootstrap: [App]
})
export class AppModule {}
