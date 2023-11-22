import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, UntypedFormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BaseForm } from 'src/app/components/base-form/base-form.component';
import { UserController } from 'src/app/core/controllers/user/user.controller';
import { TraductionService } from 'src/app/core/services/translate.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
})
export class TechnologiesComponent extends BaseForm implements OnInit {

  constructor(
    private traductionService: TraductionService,
    private translate: TranslateService,
    private fb: UntypedFormBuilder,
    private userController: UserController
  ) {
    super();
  }

  @ViewChild('mViewer') mViewer?: any;

  viewListOrNot: boolean = false

  selectSkill: any

  skills = [
    { nome: 'Angular', value: 5, tipo: 'Framework', lang: "TYPE-SKILL1", src: './assets/skills/angular-01.png' },
    { nome: 'Bootstrap', value: 5, tipo: 'Framework', lang: "TYPE-SKILL1", src: './assets/skills/bootstrap-logo-01.png', },
    { nome: 'Typescript', value: 5, tipo: 'Linguagem ', lang: "TYPE-SKILL2", src: './assets/skills/ts-01.png' },
    { nome: 'Css', value: 5, tipo: 'Linguagem de estilo', lang: "TYPE-SKILL3", src: './assets/skills/css-01.png' },
    { nome: 'Html', value: 5, tipo: 'Linguagem de marcação', lang: "TYPE-SKILL4", src: './assets/skills/html-01.png' },
    { nome: 'Primeng', value: 5, tipo: 'Biblioteca', lang: "TYPE-SKILL5", src: './assets/skills/primeng-01.png' },
    { nome: 'Rxjs', value: 4, tipo: 'Biblioteca', lang: "TYPE-SKILL5", src: './assets/skills/rxjs-01.png' },
    { nome: 'NodeJs', value: 4, tipo: 'Ambiente', lang: "TYPE-SKILL6", src: './assets/skills/nodejs-01.png' },
    { nome: 'Express', value: 4, tipo: 'Framework', lang: "TYPE-SKILL1", src: './assets/skills/pngwing.com-01.png' },
    { nome: 'Sql', value: 3, tipo: 'Banco de Dados', lang: "TYPE-SKILL7", src: './assets/skills/sql-01.png' },
    { nome: 'MySql', value: 4, tipo: 'Banco de Dados', lang: "TYPE-SKILL7", src: './assets/skills/mysql-01.png' },
    { nome: 'HTTP', value: 4, tipo: 'Protocolo', lang: "TYPE-SKILL8", src: './assets/skills/http-01.png' },
    { nome: 'Git', value: 4, tipo: 'Versionamento', lang: "TYPE-SKILL9", src: './assets/skills/git-logo-01.png' },
    { nome: 'React', value: 4, tipo: 'Framework', lang: "TYPE-SKILL10", src: './assets/skills/react-logo-01.png' },
  ]

  value: number = 5

  ngOnInit(): void {
    this.languageUser()
    this.logsSkill = this.skills;
    this.viewListOrNot = true
    this.createForm()
  };



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
      skill: ['', [Validators.required]],
      stars: new FormControl('')
    });


  };



  getList(e: any) {
    this.viewListOrNot = !this.viewListOrNot

  }


  viewSkill = (e: any) => {
    this.selectSkill = e
    this.mViewer.openModal();
  };


  logsSkill: any;
  filterSkills = () => {
    this.logsSkill = this.skills;
    if (this.form.value.skill) {

      this.logsSkill = this.logsSkill.filter(
        (s: any) => s.nome
          .toLowerCase()
          .indexOf(this.form.value.skill.toLowerCase()) >= 0
      );
    }
  };

}
