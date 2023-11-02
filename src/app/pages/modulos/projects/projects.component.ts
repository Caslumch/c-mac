import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { BaseForm } from 'src/app/components/base-form/base-form.component';
import { UserController } from 'src/app/core/controllers/user/user.controller';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent extends BaseForm implements OnInit {

  constructor(
    private fb: UntypedFormBuilder,
    private userController: UserController
  ) {
    super();
  }

  projects = [
    {
      nome: 'Portifolio - Lucas Machado',
      descricao: 'Aplicação pessoal frontend para portfolio, ultilizando as tecnologias: Angular, Javascript/Typescript, html e scss, Primeng, Bootstrap, ', img: './assets/mac-project.png', link: 'https://caslumch.github.io/c-mac'
    },
  ]

  ngOnInit(): void {
    this.logsProjects = this.projects;
    this.createForm()
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
      debugger;
      this.logsProjects = this.logsProjects.filter(
        (s: any) => s.nome
          .toLowerCase()
          .indexOf(this.form.value.project.toLowerCase()) >= 0
      );
    }
    
  };

 viewProject = (e: any) => {
    window.open(e.link, "_blank");

  }



}
