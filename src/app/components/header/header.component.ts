import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  up = 'pi-angle-up'

  optionsMenu = [
    { option: 'About', id: 1, routerLink: 'about', },
    { option: 'Projects', id: 2, routerLink: 'projects', },
    { option: 'Contact', id: 3, routerLink: 'contact', }
  ];

  optionsSubMenu = [
<<<<<<< HEAD
    { title: 'Sobre Mim', subtitle: "Conheça um pouco mais sobre mim e minha trajetória", routerlink: 'about' },
=======
    { title: 'Sobre Mim', subtitle: "Conheça um pouco mais sobre mim e minha trajetória", routerLink: 'about' },
>>>>>>> 2291debe7509ebb7783061ad089eed5d02ef3aa4
    { title: 'Tecnologias', subtitle: "Todas as tecnologias que eu desenvolvi esta aplicação e mais.", routerLink: '' },

  ];
  ehMobile: any
  ngOnInit(): void {
    this.ehMobile = window.screen.width < 933;

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

  onMouseEnter = (e: any, option: any) => {
    if (!this.ehMobile) {
      this.seeMenu = false
      if (option.routerLink === 'about') {
        this.seeMenu = true
      }
    }
  }

  onMouseOut() {
    this.seeMenu = false
  }

  onMouseLeave() {
    // Verifica se o mouse saiu do componente pai e fecha o componente interno
    this.seeMenu = false;

  }
}
