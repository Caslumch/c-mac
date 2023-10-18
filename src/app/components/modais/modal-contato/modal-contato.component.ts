import { Component, ElementRef, Input, OnInit, ViewChildren } from '@angular/core';
import { BaseForm } from '../../base-form/base-form.component';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { UserController } from 'src/app/core/controllers/user/user.controller';
import { MessageService } from 'primeng/api';
// import { FormArray, FormControlName, FormGroup, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-contato',
  templateUrl: './modal-contato.component.html',
  providers: [MessageService]
})
export class ModalContatoComponent extends BaseForm implements OnInit {

  constructor(
    private fb: UntypedFormBuilder,
    private userController: UserController,
    private messageService: MessageService
  ) {
    super();
  }


  displayModal = false;
  ehMobile: boolean = false;

  destinatario = 'caslumach@gmail.com'


  ngOnInit(): void {
    this.createForm()
    this.ehMobile = window.screen.width < 992;


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

  showOverlay: boolean = false

  save = () => {
    this.showOverlay = true;
    this.closeModal()
    const body = `De: ${this.form.value.nome} email: ${this.form.value.email}, telefone: ${this.form.value.telefone},
    assunto: ${this.form.value.assunto}, texto: ${this.form.value.text}`
    this.userController.enviarEmail(this.destinatario, this.form.value.assunto, body).subscribe({
      next: (resp) => {
        debugger;
        this.messageService.add({
          severity: 'success',
          summary: 'Email',
          detail: 'Email enviado com sucesso',
          life: 3000,
        });
        this.clear()
        this.showOverlay = false

      },
      error: (error) => {
        console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Email',
          detail: 'Olá, não foi possivel mandar seu email',
          life: 3000,
        });

      }
    })


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
