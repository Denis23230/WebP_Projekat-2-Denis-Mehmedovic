import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registracija',
  imports: [RouterLink],
  templateUrl: './registracija.component.html',
  styleUrl: './registracija.component.css'
})
export class RegistracijaComponent {
  promijeniTemu(event: any) {
  const odabranaTema = event.target.value; 
  
  if (odabranaTema) {
    
    document.body.className = ''; 
    document.body.classList.add(odabranaTema);
    
    
    localStorage.setItem('izabranaTema', odabranaTema);
    console.log('Tema spremljena:', odabranaTema);
  }
}

}
