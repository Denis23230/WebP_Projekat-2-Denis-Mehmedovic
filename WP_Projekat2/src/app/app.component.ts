import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistracijaComponent } from './registracija/registracija.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegistracijaComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WP_Projekat2';
}
