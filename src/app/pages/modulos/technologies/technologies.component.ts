import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
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
    { nome: 'Angular', tipo: 'Framework', lang: "TYPE-SKILL1", src: './assets/skills/angular-01.png', desc: 'Angular é um framework de desenvolvimento web desenvolvido pelo Google. Ele é usado para construir aplicativos web e móveis robustos e escaláveis. Angular utiliza TypeScript como linguagem de programação e oferece uma estrutura para criar interfaces de usuário dinâmicas e responsivas.' },
    { nome: 'Bootstrap', tipo: 'Framework', lang: "TYPE-SKILL1", src: './assets/skills/bootstrap-logo-01.png', desc: 'Bootstrap é uma biblioteca de código aberto de design front-end. Ele fornece componentes e estilos predefinidos para ajudar a criar interfaces web elegantes e responsivas. Bootstrap é amplamente utilizado para acelerar o desenvolvimento de sites e aplicativos.' },
    { nome: 'Typescript', tipo: 'Linguagem ', lang: "TYPE-SKILL2", src: './assets/skills/ts-01.png', desc: 'TypeScript é uma linguagem de programação desenvolvida pela Microsoft que é uma extensão do JavaScript. Ela adiciona recursos de tipagem estática, facilitando o desenvolvimento de código mais robusto e escalável.' },
    { nome: 'Css', tipo: 'Linguagem de estilo', lang: "TYPE-SKILL3", src: './assets/skills/css-01.png', desc: 'CSS (Cascading Style Sheets) é uma linguagem de estilo usada para definir a aparência e o layout de elementos HTML em uma página web. Ela é fundamental para o design e a formatação de páginas web.' },
    { nome: 'Html', tipo: 'Linguagem de marcação', lang: "TYPE-SKILL4", src: './assets/skills/html-01.png', desc: 'HTML (Hypertext Markup Language) é a linguagem de marcação usada para criar a estrutura de uma página web. Ela define os elementos e a organização do conteúdo em uma página.' },
    { nome: 'Primeng', tipo: 'Biblioteca', lang: "TYPE-SKILL5", src: './assets/skills/primeng-01.png', desc: 'PrimeNG é uma biblioteca de componentes de interface de usuário para Angular. Ela fornece uma ampla variedade de componentes prontos para uso, como botões, tabelas e gráficos, para facilitar o desenvolvimento de aplicativos web com aparência profissional' },
    { nome: 'Rxjs', tipo: 'Biblioteca', lang: "TYPE-SKILL5", src: './assets/skills/rxjs-01.png', desc: 'RxJS é uma biblioteca para programação reativa em JavaScript. Ela permite lidar com fluxos de dados assíncronos e eventos de maneira eficiente, tornando mais fácil a manipulação de observáveis, como streams de eventos.' },
    { nome: 'NodeJs', tipo: 'Ambiente', lang: "TYPE-SKILL6", src: './assets/skills/nodejs-01.png', desc: 'Node.js é um ambiente de tempo de execução de código aberto baseado no JavaScript que permite a execução de código no lado do servidor. Ele é amplamente usado para construir aplicativos web escaláveis e em tempo real.' },
    { nome: 'Express', tipo: 'Framework', lang: "TYPE-SKILL1", src: './assets/skills/pngwing.com-01.png', desc: 'Express é um framework para Node.js que simplifica o desenvolvimento de aplicativos web. Ele fornece uma camada de abstração sobre o Node.js, facilitando a criação de APIs e rotas HTTP.' },
    { nome: 'Sql', tipo: 'Banco de Dados', lang: "TYPE-SKILL7", src: './assets/skills/sql-01.png', desc: ' SQL (Structured Query Language) é uma linguagem de consulta usada para interagir com bancos de dados relacionais. É amplamente utilizado para recuperar, inserir, atualizar e excluir dados em bancos de dados.' },
    { nome: 'MySql', tipo: 'Banco de Dados', lang: "TYPE-SKILL7", src: './assets/skills/mysql-01.png', desc: 'MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto. Ele é amplamente utilizado para armazenar e gerenciar dados em aplicativos web e empresariais.' },
    { nome: 'HTTP', tipo: 'Protocolo', lang: "TYPE-SKILL8", src: './assets/skills/http-01.png', desc: 'HTTP (Hypertext Transfer Protocol) é o protocolo de comunicação usado para transferir informações na World Wide Web. Ele define como as solicitações e respostas devem ser formatadas e transmitidas entre clientes e servidores web.' },
  ]

  ngOnInit(): void {
    this.languageUser()
    this.logsSkill = this.skills;
    this.viewListOrNot = true
    this.createForm()
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
      skill: ['', [Validators.required]],

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
