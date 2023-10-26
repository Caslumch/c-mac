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

  optionsSubMenu: any

  menuAbout: any[] = [
    { title: 'Sobre Mim', subtitle: "Conheça um pouco mais sobre mim e minha trajetória", routerLink: 'about' },
    { title: 'Skills', subtitle: "Todas as tecnologias que eu desenvolvi esta aplicação e mais.", routerLink: 'tech' },

  ];
  menuProjects: any[] = [
    { title: 'Stacks', subtitle: "Conheça um pouco mais sobre mim e minha trajetória", routerLink: 'stacks' },
    { title: 'Fotografia', subtitle: "Além de codar, eu também faço algumas fotos", link: 'https://caslumachado.46graus.com' },

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
  }

  seeMenu: boolean = false

  onMouseEnter = (e: any, option: any) => {
    this.optionsSubMenu = []
    if (!this.ehMobile) {
      this.seeMenu = false
      if (option.routerLink === 'about') {
        this.optionsSubMenu = this.menuAbout
        this.seeMenu = true
      }
      // else if (option.routerLink === 'projects') {

      //   this.optionsSubMenu = this.menuProjects
      //   this.seeMenu = true
      // }
    }
  }

  onMouseOut() {
    this.seeMenu = false
  }

  onMouseLeave() {
    // Verifica se o mouse saiu do componente pai e fecha o componente interno
    this.seeMenu = false;

  }

  changeRouter = (e: any) => {
    debugger;
    if (e.title === "Fotografia") {
      window.open("https://caslumachado.46graus.com", "_blank");
    }
  }
}
