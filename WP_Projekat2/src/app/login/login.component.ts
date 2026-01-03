import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  
  constructor(private router: Router) {}


  prijava() {
    
    
    const sacuvanaTema = localStorage.getItem('izabranaTema');
    if (sacuvanaTema) {
      document.body.className = '';
      document.body.classList.add(sacuvanaTema);
    }


    this.router.navigate(['/home']);
  }
}