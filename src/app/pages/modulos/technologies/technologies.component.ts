import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { BaseForm } from 'src/app/components/base-form/base-form.component';
import { UserController } from 'src/app/core/controllers/user/user.controller';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
})
export class TechnologiesComponent  extends BaseForm implements OnInit {

  constructor(
    private fb: UntypedFormBuilder,
    private userController: UserController
  ) {
    super();
  }

  @ViewChild('mViewer') mViewer?: any;

  viewListOrNot: boolean = false

  selectSkill: any

  skills = [
    { nome: 'Angular', tipo: 'Framework', src: './assets/skills/angular-01.png', },
    { nome: 'Bootstrap', tipo: 'Framework', src: './assets/skills/bootstrap-logo-01.png', },
    { nome: 'Typescript', tipo: 'Linguagem ', src: './assets/skills/ts-01.png', },
    { nome: 'Css', tipo: 'Linguagem de estilo', src: './assets/skills/css-01.png', },
    { nome: 'Html', tipo: 'Linguagem de marcação', src: './assets/skills/html-01.png', },
    { nome: 'Primeng', tipo: 'Biblioteca', src: './assets/skills/primeng-01.png', },
    { nome: 'Rxjs', tipo: 'Biblioteca', src: './assets/skills/rxjs-01.png', },
    { nome: 'NodeJs', tipo: 'Ambiente', src: './assets/skills/nodejs-01.png', },
    { nome: 'Express', tipo: 'Framework', src: './assets/skills/pngwing.com-01.png', },
    { nome: 'Sql', tipo: 'Banco de Dados', src: './assets/skills/sql-01.png', },
    { nome: 'MySql', tipo: 'Banco de Dados', src: './assets/skills/mysql-01.png', },
    { nome: 'HTTP', tipo: 'Protocolo', src: './assets/skills/http-01.png', },
  ]

  ngOnInit(): void {
    this.logsSkill = this.skills;
    this.viewListOrNot = true
    this.createForm()
  }

  createForm = () => {
    this.form = this.form = this.fb.group({
      skill: ['', [Validators.required]],

    });
  };

  getList(e: any) {
    this.viewListOrNot = !this.viewListOrNot
    debugger;
  }
  

  viewSkill = (e: any) => {
    this.selectSkill = e
    this.mViewer.openModal();
  };


  logsSkill: any;
  filterSkills = () => {
    this.logsSkill = this.skills;
    if (this.form.value.skill) {
      debugger;
      this.logsSkill = this.logsSkill.filter(
        (s: any) => s.nome
          .toLowerCase()
          .indexOf(this.form.value.skill.toLowerCase()) >= 0
      );
    }
  };

}
