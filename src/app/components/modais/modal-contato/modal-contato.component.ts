import { Component, ElementRef, Input, OnInit, ViewChildren } from '@angular/core';
import { BaseForm } from '../../base-form/base-form.component';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { UserController } from 'src/app/core/controllers/user/user.controller';
// import { FormArray, FormControlName, FormGroup, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-contato',
  templateUrl: './modal-contato.component.html',
})
export class ModalContatoComponent extends BaseForm implements OnInit {

  constructor(
    private fb: UntypedFormBuilder,
    private userController: UserController
  ) {
    super();
  }


  displayModal = false;
  ehMobile: boolean = false;

  destinatario = 'caslumach@gmail.com'


  ngOnInit(): void {
    this.createForm()
    this.ehMobile = window.screen.width < 992;
    debugger;

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
    const body = `De: ${this.form.value.nome} email: ${this.form.value.email}, telefone: ${this.form.value.telefone},
    assunto: ${this.form.value.assunto}, texto: ${this.form.value.text}
    `
    this.form.value
    debugger;

    this.userController.enviarEmail(this.destinatario, this.form.value.assunto, body).subscribe({
      next: () => {
        debugger;
      },
      error: () => {
        debugger;
      }
    })


  }


  openModal = () => (this.displayModal = true);

  closeModal = () => (this.displayModal = false);
}
