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
  
  optionsMenu2 = [
    { title: 'Sobre', id: 1, routerLink: 'about', description: "descrição" },
    { option: 'Projetos', id: 2, routerLink: 'projects', description: "descrição"},
    { option: 'Contato', id: 3, routerLink: 'contact', description: "descrição"}
  ];

  ngOnInit(): void {

  }

  navbarVisible: boolean = false;

  toggleNavbar() {

    this.navbarVisible = !this.navbarVisible;
    if (!this.navbarVisible) {
      this.up = 'pi-angle-down'
    }
  }

  handleImageError() {
    // Lógica para lidar com erro de imagem (se necessário)
  }

  seeMenu: boolean = false

  onMouseEnter = (e: any) => {
    this.seeMenu = true
    // debugger;
  }

  onMouseOut() {
    debugger;
    this.seeMenu = false
  }

  onMouseLeave() {
    // Verifica se o mouse saiu do componente pai e fecha o componente interno
    this.seeMenu = false;

  }
}
