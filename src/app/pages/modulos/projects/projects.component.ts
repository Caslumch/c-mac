import { Component, HostListener, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BaseForm } from 'src/app/components/base-form/base-form.component';
import { UserController } from 'src/app/core/controllers/user/user.controller';
import { TraductionService } from 'src/app/core/services/translate.service';
import { TYPE_HISTORY } from 'src/app/core/enum/enum'
import { TYPE_HISTORY_LABEL } from 'src/app/core/enum/enum'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent extends BaseForm implements OnInit {

  constructor(
    private traductionService: TraductionService,
    private translate: TranslateService,
    private fb: UntypedFormBuilder,
    private userController: UserController
  ) {
    super();
  }

  // icons = TYPE_HISTORY

  data: any[] = [
    { nome: 'Lucas', type: '214' },
    { nome: 'Pedro', type: '216' },
    { nome: 'Dani', type: '217' },
    { nome: 'Cleudimar', type: '218' },
    { nome: 'Leticia', type: '219' },
  ];

  projects = [
    {
      nome: 'Portifolio - Lucas Machado',
      descricao: 'Aplicação pessoal frontend para portfolio, ultilizando as tecnologias: Angular, Javascript/Typescript, html e scss, Primeng, Bootstrap, ', img: './assets/mac-project.png', link: 'https://caslumch.github.io/c-mac'
    },
  ]

  ngOnInit(): void {
    this.logsProjects = this.projects;
    this.createForm()
  };

  getIcons(tipo: number): string {
    return TYPE_HISTORY_LABEL[tipo];
  }

  mostrarImagem = false;
  @HostListener('window:scroll', [])


  onScroll(): void {
    // Lógica para determinar quando mostrar a imagem
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Defina um valor apropriado para determinar quando mostrar a imagem
    this.mostrarImagem = scrollPosition > 200;
  }


  userLanguage: any
  languageUser = () => {
    this.userLanguage = this.traductionService.getUserLanguage();
    this.translate.setDefaultLang(this.userLanguage);
  }

  getLabel(e: any): string {
    return this.translate.instant(e);
  }

  createForm = () => {
    this.form = this.form = this.fb.group({
      project: ['', [Validators.required]],

    });
  };

  logsProjects: any;
  filterProjects = () => {
    this.logsProjects = this.projects;
    if (this.form.value.project) {

      this.logsProjects = this.logsProjects.filter(
        (s: any) => s.nome.toLowerCase().indexOf(this.form.value.project.toLowerCase()) >= 0
      );
    }

  };

  viewProject = (e: any) => {
    window.open(e.link, "_blank");

  }



}
