import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  up = 'pi-angle-up'

  optionsMenu = [
    { option: 'Sobre', id: 1 },
    { option: 'Projetos', id: 2 },
    { option: 'Contato', id: 3 }
  ];
  
  ngOnInit(): void {
    
  }

  navbarVisible: boolean = false;

  toggleNavbar() {
    debugger;
    this.navbarVisible = !this.navbarVisible;
    if (!this.navbarVisible) {
      this.up = 'pi-angle-down'
    } 
  }

  handleImageError() {
    // Lógica para lidar com erro de imagem (se necessário)
  }
}
