import { Component, ElementRef, Input, OnInit, ViewChildren } from '@angular/core';
import { BaseForm } from '../../base-form/base-form.component';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { UserController } from 'src/app/core/controllers/user/user.controller';
// import { FormArray, FormControlName, FormGroup, UntypedFormGroup } from '@angular/forms';
import * as emailjs from 'emailjs-com';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { TraductionService } from 'src/app/core/services/translate.service';

@Component({
  selector: 'app-modal-contato',
  templateUrl: './modal-contato.component.html',
})
export class ModalContatoComponent extends BaseForm implements OnInit {

  constructor(
    private traductionService: TraductionService,
    private translate: TranslateService,
    private messageService: MessageService,
    private fb: UntypedFormBuilder,
    private userController: UserController
  ) {
    super();
  }


  displayModal = false;
  ehMobile: boolean = false;
  saveLoad: boolean = false

  destinatario = 'caslumach@gmail.com'


  ngOnInit(): void {
    this.languageUser()
    this.createForm()
    this.ehMobile = window.screen.width < 992;
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
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      assunto: [''],
      text: ['', [Validators.required]],
    })
  }

  save = () => {
    this.form.value;
    const body = `
    De: ${this.form.value.nome},
    email: ${this.form.value.email},
    telefone: ${this.form.value.telefone},
    assunto: ${this.form.value.assunto},
    texto: ${this.form.value.text}
    `
    this.closeModal();
    this.saveLoad = true
    emailjs.init('f2J6XmohA9QKj10T7');

    emailjs.send('service_xgv1psc', 'template_2cuonkn', {
      to_name: this.destinatario,
      message: body,
    }).then((response) => {
        this.saveLoad = false
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Email enviado',
          life: 3000,
        });
        this.clear()
      })
      .catch((error) => {
        console.error('Erro ao enviar e-mail', error);
      });
  }



  clear = () => {
    this.form.controls['nome'].setValue('');
    this.form.controls['email'].setValue('');
    this.form.controls['telefone'].setValue('');
    this.form.controls['assunto'].setValue('');
    this.form.controls['text'].setValue('');
  }

  openModal = () => (this.displayModal = true);
  closeModal = () => (this.displayModal = false);


}
