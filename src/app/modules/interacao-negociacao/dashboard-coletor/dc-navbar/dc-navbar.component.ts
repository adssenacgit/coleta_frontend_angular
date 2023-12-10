import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dc-navbar',
  templateUrl: './dc-navbar.component.html',
  styleUrls: ['./dc-navbar.component.css']
})

export class DcNavbarComponent {
  @Input() username: string = "Chiquitito";
  @Input() rating: number = 0;

  constructor(private router: Router) { }

  direcionandoMapaDeColetas() {
    this.router.navigate(['/MapaDeColetas']);
  }
  
  direcionandoPerfil() {
    this.router.navigate(['/Perfil']);
  }
}
