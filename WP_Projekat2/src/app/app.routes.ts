import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistracijaComponent } from './registracija/registracija.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Početna vodi na login
  { path: 'login', component: LoginComponent },
  { path: 'registracija', component: RegistracijaComponent }
];