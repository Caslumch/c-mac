import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  optionsMenu = [
    { option: 'Sobre', id: 1 },
    { option: 'Projetos', id: 2 },
    { option: 'Contato', id: 3 }
  ];

  navbarVisible = false; 

  toggleNavbar() {
    debugger;
    this.navbarVisible = !this.navbarVisible;
  }

  handleImageError() {
    // Lógica para lidar com erro de imagem (se necessário)
  }
}
