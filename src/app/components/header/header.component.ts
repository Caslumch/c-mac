import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TraductionService } from 'src/app/core/services/translate.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private traductionService: TraductionService,
    private translate: TranslateService,
  ) {
  }

  @ViewChild('op') op?: any;
  @ViewChild('menu') menu?: any;

  up = 'pi-angle-up'

  ifIcon: string = 'pi pi-angle-down'


  saveLoad: boolean = false

  optionsMenu: any = [
    { option: 'About', id: 1, routerLink: 'about', icon: true, langT: 'SBh' }, //SBh de sobre header
    { option: 'Projects', id: 2, routerLink: 'projects', langT: 'PTh' },
    { option: 'Skills', id: 3, routerLink: 'tech', langT: 'SKh' },
    { option: 'Contact', id: 4, routerLink: 'contact', langT: 'CTh' }

  ];

  optionsSubMenu: any

  menuAbout: any[] = [
    { title: 'Sobre Mim', subtitle: "Conheça um pouco mais sobre mim e minha trajetória", routerLink: 'about', langT: 'SUBabout', langS: 'SBhs' },
    { title: 'Skills', subtitle: "Todas as tecnologias que eu desenvolvi esta aplicação e mais.", routerLink: 'tech', langT: 'Subskills', langS: 'SKhs' },

  ];
  menuProjects: any[] = [
    { title: 'Stacks', subtitle: "Conheça um pouco mais sobre mim e minha trajetória", routerLink: 'stacks' },
    { title: 'Fotografia', subtitle: "Além de codar, eu também faço algumas fotos", link: 'https://caslumachado.46graus.com' },

  ];

  items = [
    {
      label: 'Language',
      items: [
        {
          label: 'English',
          command: () => {
            this.getLang('en-US');
          }
        },
        {
          label: 'Portugues',
          command: () => {
            this.getLang('pt-BR');
          }
        }
      ]
    },
  ];



  ehMobile: any
  ngOnInit(): void {
    this.ehMobile = window.screen.width < 933;
    this.verifyWidth();
    this.languageUser()
  }

  getLang = (lang: any) => {
    this.saveLoad = true
    this.traductionService.changeLanguage(lang).then(() => {
      this.languageUser();
    })
  }

  userLanguage: any
  languageUser = () => {
    this.userLanguage = this.traductionService.getUserLanguage();
    this.translate.setDefaultLang(this.userLanguage);

  }

  getLabel(e: any): string {
    return this.translate.instant(e);
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

  changeLanguage = (e: any) => {
    this.op.show(e);
  }

  langMenuLeave = () => {
    this.menu.hide();
  }

  seeMenu: boolean = false

  upMenu: boolean = false

  otherIcon = '';

  onMouseEnter = (e: any, option: any) => {
    this.optionsSubMenu = []
    if (!this.ehMobile) {
      this.seeMenu = false
      if (option.routerLink === 'about') {
        this.optionsSubMenu = this.menuAbout
        this.seeMenu = true
        this.ifIcon = 'pi pi-angle-up'

      } else {
        this.ifIcon = 'pi pi-angle-down'
      }

    }
  }

  verifyWidth = () => {
    if (!this.ehMobile)
      this.optionsMenu = this.optionsMenu.filter((t: any) => t.option != 'Skills')
  }
  onMouseLeave() { // Verifica se o mouse saiu do componente pai e fecha o componente interno
    this.seeMenu = false;
    this.ifIcon = 'pi pi-angle-down'

  }

  // changeRouter = (e: any) => {
  //   
  //   if (e.option === "Cv") {
  //     const assetPath = '/assets/CV.LUCAS MACHADO.pdf';

  //     this.http.get(assetPath, { responseType: 'blob' }).subscribe((fileBlob) => {
  //       const url = window.URL.createObjectURL(fileBlob);
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.download = '/assets/CV.LUCAS MACHADO.pdf'; // Nome do arquivo de download
  //       document.body.appendChild(link);
  //       link.click();
  //       window.URL.revokeObjectURL(url);
  //     });
  //   }
  // }


}
