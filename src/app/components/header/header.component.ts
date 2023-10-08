import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  up = 'pi-angle-up'

  optionsMenu = [
    { option: 'Sobre', id: 1, routerLink: 'about', },
    { option: 'Projetos', id: 2, routerLink: 'projects', },
    { option: 'Contato', id: 3, routerLink: 'contact', }
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
