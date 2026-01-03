import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  
  imports: [CommonModule, NavbarComponent, FooterComponent], 
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  constructor(private router: Router) {} 

  otvoriModul(naziv: string) {
    console.log('Kliknuto na modul: ' + naziv);
    
    if (naziv === 'water') {
      this.router.navigate(['/water-tracker']);
    } else {
      
    }
  }

}