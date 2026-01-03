import { Component } from '@angular/core';
import { Router } from '@angular/router'; // 1. Import Routera

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  // 2. Ubacujemo Router u konstruktor
  constructor(private router: Router) {}

  // 3. Definiramo funkciju koju HTML traži
  idiNaTrackere() {
    this.router.navigate(['/dashboard']); // Prebacuje te na grid s karticama
  }
}