import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth-module').then(m => m.AuthModule)
  },
  {
    path: 'trips',
    loadChildren: () =>
      import('./trips/trips-module').then(m => m.TripsModule)
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  // ESTE TEM DE SER O ÚLTIMO
  { path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
