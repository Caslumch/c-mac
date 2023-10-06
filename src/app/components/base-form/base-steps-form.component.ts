import { Component } from '@angular/core';

import { Field } from 'src/app/core/helpers/models/field';
import { BaseForm } from './base-form.component';
import { FormArray, FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { FormularioCampoController } from 'src/app/core/controllers/empresarial/formulario-campo.controller';
import { BehaviorSubject, lastValueFrom, Observable, of, tap } from 'rxjs';
import { OnboardingController } from 'src/app/core/controllers/colaboradores/onboarding.controller';
import { MovimentacoesHubs } from 'src/app/core/services/hubs/movimentacoes.hubs';
import { AnexosCommand } from 'src/app/core/controllers/colaboradores/commands/anexos.command';
import { ENUMS_ANEXOS_TIPO_ENTIDADE } from 'src/app/core/enums';
import { AnexoConstrollers } from 'src/app/core/controllers/colaboradores/anexos.controllers';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  template: '',
})
export abstract class BaseStepsForm extends BaseForm {
  fields: Field[] = [];
  fields$: Observable<Field[]> = new BehaviorSubject<Field[]>(this.fields);

  constructor(
    public route: Router,
    public formularioCampoController: FormularioCampoController,
    public onboardingController: OnboardingController,
    public movimentacoesHubs: MovimentacoesHubs,
    public anexoController: AnexoConstrollers,
    public fb: UntypedFormBuilder = new UntypedFormBuilder()
  ) {
    super();
  }

  ciaFormularioId: number = 0;
  module: string = 'candidatos';

  setInitialModule = (pageName: string, subPage: string = "") => {
    const _baseUrl = window.location.href;

    if (_baseUrl.includes("candidatos/onboardings"))
      this.module = "candidatos";
    else if (_baseUrl.includes("colaborador-gestor"))
      this.module = "colaboradores";
    else if (_baseUrl.includes("recursos-humanos"))
      this.module = "recursos-humanos";

    if (this.ciaFormularioId == 0 && this.module == "candidatos") {
      this.route.navigate(["/candidatos/onboardings/redirect"], {
        state: { page: pageName, subPage: subPage }
      });
    }
  }


  getColaboradorIdOnInitialPage(authCobId: number, stateCobId: number) {
    return this.module == 'recursos-humanos' ? stateCobId : authCobId;
  }

  onboardingId: number = 0;
  movimentacaoId: number = 0;
  createFormByFields() {
    this.createFormByFieldsOrArray(false, this.fields);
  }

  createFormByFieldsOrArray(fromFieldsArray: boolean = false, fields: Field[]) {
    const group = new FormGroup({});

    if (fields.length > 0) {
      fields?.forEach(field => {
        if ((field.fieldsArray?.length ?? 0) > 0) {
          group.addControl(field.name, this.fb.array([this.createFormByFieldsOrArray(true, field.fieldsArray ?? [])]));
        } else {
          group.addControl(field.name, new FormControl(''));
          this.refreshSingleFormFields(group, field);
        }
      });

      if (!fromFieldsArray) {
        this.form = group
        this.refreshOnChangeFields();
        this.verifyRequiredAndVisbible();
      }
    }

    return group;
  }

  getCamposByCiaFormularios = () => {
    if (this.ciaFormularioId > 0)
      return this.formularioCampoController.getCamposByCiaFormularioId(this.ciaFormularioId).pipe(
        tap(response => {

          if (response?.data?.length > 0) {
            this.fields.forEach((_baseField, index) => {
              let fieldsArray: Field[] = [_baseField];
              let isFieldsArray: boolean = false;

              if ((_baseField.fieldsArray?.length ?? 0) > 0) {
                fieldsArray = _baseField.fieldsArray ?? [];
                isFieldsArray = true;
              }

              fieldsArray.forEach((fa, fieldsArrayIndex) => {
                let result = response?.data.filter((value: any) => value.nome == fa.key)[0];

                if (!fa.fixed) {
                  fa.required = result ? result.obrigatorio : false;
                  fa.visible = result ? result.visivel : false;

                  if (!isFieldsArray)
                    this.fields[index] = fa;
                  else
                    (this.fields[index].fieldsArray ?? [])[fieldsArrayIndex] = fa;
                }
              })
            });

            this.refreshOnChangeFields();
            this.verifyRequiredAndVisbible();
          }
        })
      )
    else
      return of('');
  }

  findAnexoCommandByTipo(data: any[], tipo: number, control: string, arrayName: any = null, index: number = 0) {
    let anexo = data.find((x: any) => x.tipo === tipo);

    if (!anexo)
      return null;

    const command = new AnexosCommand({ ...anexo, create: false });

    this.setControlValue(control, command, arrayName, index);

    return command;
  }
  findAnexoCommandByAgregado(data: any[], id: number, control: string, arrayName: any = null, index: number = 0, tipo: number = 0) {
    let anexo: any;
    if (tipo != 0)
      anexo = data.find((x: any) => x.agregadoId === id && x.tipo === tipo);
    else
      anexo = data.find((x: any) => x.agregadoId === id);

    if (!anexo)
      return null;

    const command = new AnexosCommand({ ...anexo, create: false });
    this.setControlValue(control, command, arrayName, index);

    return command;
  }


  setUpload = (e: any, control: string) => {
    if (e.currentTarget.files.length > 0) {
      const file = e.currentTarget.files[0];
      this.setUploadWithFile(file, control);
    }
  };
  setUploadWithFile(file: any, control: string) {
    file.create = true;
    this.setControlValue(control, file);
  }

  setControlValue(control: string, value: any, arrayName: any = null, index: number = 0) {
    if (!arrayName) {
      this.form.controls[control].setValue(value);
      this.form.controls[control].updateValueAndValidity();
      this.checkValidity(control);
    } else {
      const formArray = this.form.get(arrayName) as FormArray;
      const controlToSet = formArray.at(index).get(control) as FormControl;

      if (controlToSet) {
        controlToSet.setValue(value);
        controlToSet.updateValueAndValidity();
      }
    }
  }
  setUploadArray = (e: any, arrayName: string, index: number, control: string) => {
    if (e.currentTarget.files.length > 0) {
      const file = e.currentTarget.files[0];
      file.create = true;
      this.setControlValue(control, file, arrayName, index);
    }
  };


  refreshOnChangeFields(): void {
    this.fields$ = new BehaviorSubject<Field[]>(this.fields);
    this.fields$.subscribe(fields => {
      fields.forEach(_baseField => {

        let fieldsArrays = [_baseField];
        let isFieldWithArrays = false;

        if ((_baseField.fieldsArray?.length ?? 0) > 0) {
          fieldsArrays = _baseField.fieldsArray ?? [];
          isFieldWithArrays = true;
        }

        fieldsArrays.forEach((fa) => {
          this.refreshFormFields(fa, isFieldWithArrays, _baseField.name);
        });
      });
    });
  }

  refreshFormFields(field: Field, isFieldWithArrays: boolean, fieldArrayName: string = "") {
    if (!isFieldWithArrays)
      this.refreshSingleFormFields(this.form, field)
    else
      this.refreshMultipleFormFields(field, fieldArrayName);
  }

  refreshSingleFormFields(form: UntypedFormGroup, field: Field) {
    const required = field.hidden ? false : field.required;
    const visible = field.hidden ? false : field.visible;

    if (!form.get(field.name)) {
      form.addControl(field.name, new FormControl(''));
    }

    form.get(field.name)?.clearValidators();

    if (required) {
      // adiciona um validador "required" para campos obrigatórios
      form.get(field.name)?.setValidators([Validators.required]);
    }

    field.validators?.forEach(validator => {
      form.get(field.name)?.addValidators(validator);
    });

    if (!visible) {
      form.removeControl(field.name);
    }

    form.get(field.name)?.updateValueAndValidity();
  }

  refreshMultipleFormFields(field: Field, fieldArrayName: string = "") {
    const form = this.form.get(fieldArrayName) as FormArray;

    for (let control of form.controls) {
      if (control instanceof FormGroup) {
        this.refreshSingleFormFields(control, field);
      }
    }
  }

  refreshMultipleFormFieldsByIndex(index: number, field: Field, fieldArrayName: string = "") {
    const form = this.form.get(fieldArrayName) as FormArray;
    const control = form.controls[index];
    this.refreshSingleFormFields(control as FormGroup, field);
  }

  isVerifyFieldRequired: { [key: string]: boolean } = {};
  isVerifyFieldVisible: { [key: string]: boolean } = {};
  verifyRequiredAndVisbible(): void {
    this.fields$ = new BehaviorSubject<Field[]>(this.fields);
    this.fields$.subscribe(fields => {
      this.createVerifyRequiredAndVisible(fields, this.isVerifyFieldRequired, this.isVerifyFieldVisible);
    });
  }

  createVerifyRequiredAndVisible(fields: Field[], verifyFieldRequired: { [key: string]: boolean }, verifyFieldVisible: { [key: string]: boolean }) {
    fields.forEach(_baseField => {
      let fieldsArrays = [_baseField];

      if ((_baseField.fieldsArray?.length ?? 0) > 0) {
        fieldsArrays = _baseField.fieldsArray ?? [];
      }

      fieldsArrays.forEach((fa) => {
        verifyFieldRequired[fa.name] = fa.hidden ? false : fa.required;
        verifyFieldVisible[fa.name] = fa.hidden ? false : fa.visible;
      })
    });
  }

  clearFormArray = (formArray: FormArray) => {
    while (formArray.length !== 0) {
      formArray.removeAt(0)
    }
  }

  avancaOnboarding = () => {
    this.onboardingController.avancaOnboarding(this.onboardingId, this.ciaFormularioId, this.movimentacaoId).subscribe({
      next: (result) => {
        this.movimentacoesHubs.getMovimentacaoRequest();

        if (this.module == "candidatos") {
          this.route.navigate(["/candidatos/onboardings/redirect"], {
            state: { ciaFormularioId: this.ciaFormularioId, next: true }
          });
        }
      }
    })
  }

  uploadAnexos = async (command: any[], colabId: number, pessoaId: number,
    tipoEntidade: any = ENUMS_ANEXOS_TIPO_ENTIDADE.TIPO_ENTIDADE_PESSOA, aggregate: boolean = false) => {
    
      await Promise.all(command.map(async (upload) =>{
        let anexoForm = new AnexosCommand({
          colaboradorId: colabId,
          pessoaId: pessoaId,
          tipo: upload.tipo,
          tipoEntidade: tipoEntidade,
          file: upload,
          nome: upload.name,
          nomeArquivo: upload.name
        })
  
        if (aggregate)
          anexoForm.agregadoId = upload.agregadoId;
  
        if (upload.id !== 0)
          await lastValueFrom(this.anexoController.update(upload.id, anexoForm, anexoForm.file));
        else
          await lastValueFrom(this.anexoController.create(anexoForm.file, anexoForm));
      }))
  }


  formatMessageErrorFromApi(response: any) {
    let msgError = "";

    if (response?.error?.errors?.length > 0)
      response?.error.errors.forEach((err: any) => {
        msgError = msgError + " " + err;
      });
    else
      msgError = response?.error;

    return msgError;
  }

  getRespostaEnqueteByTag(respostas: any[], tag: string): string {
    if (respostas?.length == 0) return "";
    const resposta = respostas.filter((x: any) => x.questao.tag.includes(tag))[0];
    return resposta?.valor;
  }
}
