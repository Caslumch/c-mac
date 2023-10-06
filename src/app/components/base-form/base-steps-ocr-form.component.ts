import { Component } from '@angular/core';

import { UntypedFormBuilder } from '@angular/forms';
import { FormularioCampoController } from 'src/app/core/controllers/empresarial/formulario-campo.controller';
import { OnboardingController } from 'src/app/core/controllers/colaboradores/onboarding.controller';
import { MovimentacoesHubs } from 'src/app/core/services/hubs/movimentacoes.hubs';
import { AnexoConstrollers } from 'src/app/core/controllers/colaboradores/anexos.controllers';
import { Router } from '@angular/router';
import { BaseStepsForm } from './base-steps-form.component';
import { MostQiController } from 'src/app/core/controllers/colaboradores/most-qi.controllers';
import { LoaderService } from 'src/app/core/services/loader.service';
import { ExtrairDocumentoCommand } from 'src/app/core/controllers/colaboradores/commands/extrair-documento.command';
import { MessageService } from 'primeng/api';
import { FieldOcr } from 'src/app/core/helpers/models/field-ocr';
import { BehaviorSubject } from 'rxjs';

@Component({
    template: '',
})
export abstract class BaseStepsOcrForm extends BaseStepsForm {

    fieldsOCR: FieldOcr[] = [];
    constructor(
        public messageService: MessageService,
        public loaderService: LoaderService,
        public ocrController: MostQiController,
        public override route: Router,
        public override formularioCampoController: FormularioCampoController,
        public override onboardingController: OnboardingController,
        public override movimentacoesHubs: MovimentacoesHubs,
        public override anexoController: AnexoConstrollers,
        public override fb: UntypedFormBuilder = new UntypedFormBuilder()
    ) {
        super(
            route,
            formularioCampoController,
            onboardingController,
            movimentacoesHubs,
            anexoController,
            fb
        );
    }

    setUploadWithOcrIntegration = (file: any, subtype: string, control: string, object: any) => {
        this.loaderService.show('ocr');

        this.ocrController.checkHasIntegration()
            .subscribe({
                next: (result) => {
                    if (result?.data)
                        this.extractOcrDataByUpload(file, subtype, control, object);
                    else    
                        this.setUploadWithFile(file,control);
                },
                complete: () => {
                    this.loaderService.hide();
                }
            })
    }

    extractOnProcessFinish$ = new BehaviorSubject<any>({});
    extractOcrDataByUpload = (file: any, subtype: string, control: string, object: any) => {
        this.loaderService.show('ocr');
        this.ocrController.extractionDocument(
            new ExtrairDocumentoCommand({
                file: file,
                type: '',
                subtype: subtype
            })).subscribe({
                next: (result) => {
                    this.fieldsOCR.forEach(field => {
                        this.setOcrValueByFieldOcr(result?.data?.result, object, field);
                    });

                    this.setUploadWithFile(file, control); 
                    this.extractOnProcessFinish$.next({ complete: true, success: true});
                },
                error: (err) => {
                    this.loaderService.hide();

                    this.messageService.add({
                        severity: 'error',
                        summary: 'Não foi possível extrair as informações, suba um anexo válido ou verifique a qualidade da imagem!',
                        life: 4000
                    });

                    this.extractOnProcessFinish$.next({ complete: true, success: false});
                },
                complete: () => {
                    this.loaderService.hide();
                }
            })
    }

    setOcrValueByFieldOcr(ocrResult: any, objectDestiny: any, field: FieldOcr) {
        let propsFinds: any = field.keyOcr.split(' | ');

        let ocrFieldValue: any = null;

        propsFinds.forEach((prop: any) => {
            ocrFieldValue = ocrResult[0].fields.find((x: any) => x.name === prop)
        });

        let value = ocrFieldValue?.value;

        if (field?.format)
            value = field.format(value);

        if(!value)
            return;
            
        var propsSets = field.keyPropertyCommand.split('.');
        switch (propsSets.length) {
            case 1:
                objectDestiny[propsSets[0]] = value;
                break;
            case 2:
                objectDestiny[propsSets[0]][propsSets[1]] = value;
                break;
            case 3:
                objectDestiny[propsSets[0]][propsSets[1]][propsSets[2]] = value;
                break;
        }

        if (field.keyPropertyForm)
            this.setControlValue(field.keyPropertyForm, value);
    }

}
